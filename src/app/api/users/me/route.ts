import {connectDB} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import {NextRequest,NextResponse} from 'next/server'
import jwt from 'jsonwebtoken'
import { getDataFromToken } from '@/helpers/getdataFromToken'
export async function POST(req:NextRequest){
    try{
       const userId = await getDataFromToken(req)  
       const user = await  User.findOne({_id:userId}).select("-password")
       if(!user)
        { 
            return NextResponse.json({message:"Error finding User"},{status:400})
        }
        return NextResponse.json({message:user},{status:200})

    }
    catch(error:any){
        return NextResponse.json({error:error.message})
    
    }
    }