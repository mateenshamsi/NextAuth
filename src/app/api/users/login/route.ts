import {connectDB} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import {NextRequest,NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'
import { sendEmail } from '@/helpers/mailer'
import jwt from 'jsonwebtoken'
export async function POST(req:NextRequest,res:NextResponse){
try{
    const reqBody=await req.json()
    const {username,email,password} = reqBody
    const user = await User.findOne({email})  
    if(!user)
        {
    return  NextResponse.json({error:"Sorry could not find User"},{status:400})

        }
        console.log("User exists")
        const validPassword = await bcryptjs.compare(password,user.password)
        if(!validPassword)
            {
            return  NextResponse.json({error:"Enter correct credentials"},{status:400})
           }
        const tokenData = {
            id:user._id, 
            username:user.username,
            email:user.email, 
        } 
        jwt.sign()        

}
catch(error:any){
    return NextResponse.json({error:error.message})

}
}