import {connectDB} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import {NextRequest,NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'
import { sendEmail } from '@/helpers/mailer'
connectDB()
export async function POST(req:NextRequest,res:NextResponse){
    try{
      const reqBody=await req.json()
      const {username,email,password} = reqBody
      
      const existinguser = await User.findOne({email})
       if(existinguser)
        {
            return NextResponse.json({error:"USer already exist"},{status:400})
        }
        const salt = await bcryptjs.genSalt(10) 
        const hashedPassword = await bcryptjs.hash(password,salt)
        const newUser=  new User({
            username,email,password:hashedPassword
        })
        const savedUser = await newUser.save()
        console.log(savedUser) 
         await sendEmail({email,emailType:"VERIFY",userId:savedUser._id})
       return NextResponse.json({message:"User registered successfully",success:true,savedUser}) 
    }
    catch(err:any)
    { 
        return NextResponse.json({error:err.message})
    }
}