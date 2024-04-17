'use client'
import axios from 'axios'
import { Link } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

function SignUp() {
    const router = useRouter()

    const [user,setUser] = useState({
        email:"",
        password:"",
        username:""
    })
    const [buttonDisabled,setButtonDisabled] = useState(false)
    const [loading,setLoading] = useState(false) 

    useEffect(()=>{
        if(user.email.length>0&&user.password.length>0&&user.username.length>0)
            {
                setButtonDisabled(false)
            }
            else
            {
                setButtonDisabled(true)
            }
    },[user])
       const signUp = async()=>{
        try{
            setLoading(true)
           const res =  await axios.post("/api/users/signup",user)
            console.log("Signup Success",res.data)
            router.push('/login')
        }
        catch(e:any)
        { 
            console.log("Signup Error")
            toast.error(e.message)
        }
    }
    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>{loading?"Processing....":"SignUp"}</h1>
       
        <label htmlFor="username">Username</label>
        <input id="username" className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" type="text" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} placeholder='username'/>
       <label htmlFor="email">Email</label>
       <input id="email" className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" type="text" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} placeholder='email'/>
       <label htmlFor="password">Password</label>
       <input id="password" className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" type="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} placeholder='password'/>
        <button>{buttonDisabled?"No signup":"Signup"}</button>
        <Link href="/login">Visit Login Page</Link>
    </div>
    
    
  )
}

export default SignUp
