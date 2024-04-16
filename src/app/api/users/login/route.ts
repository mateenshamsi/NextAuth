import {connectDB} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import {NextRequest,NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'
import { sendEmail } from '@/helpers/mailer'
import jwt from 'jsonwebtoken'
connectDB()
export async function POST(req:NextRequest){
try{
    const reqBody=await req.json()
    const {username,email,password} = reqBody
    const user = await User.findOne({email})  
    if(!user)
        {
    return  NextResponse.json({error:"Sorry could not find User"},{status:400})

        }
       
        const validPassword = await bcryptjs.compare(password,user.password)
        if(!validPassword)
            {
            return  NextResponse.json({error:"Enter correct credentials"},{status:400})
           }
        const tokenData = {
            id:user._id, 
            user:user.username,
            email:user.email, 
        } 
        const token =  jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:'1h'})
        const res = NextResponse.json({
            message:"Logged In successfully",
            success:true 
        })       
        res.cookies.set("token",token,{
            httpOnly:true 
        }) 
        return res 


}
catch(error:any){
    return NextResponse.json({error:error.message})

}
}