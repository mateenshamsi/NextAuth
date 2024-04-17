'use client'
import axios from 'axios'
import React, { useState } from 'react'

function VerifyEmailPage() {
    const [token,setToken] = useState("")
    const [verified,setVerified] = useState("")
    const [error,setError] = useState("")
    const verifyUserEmail = async()=>{
        
        try {
            await axios.post('/api/users/verifyEmail',{token})
        setVerified(true)
        } catch (error:message) {
            setError(true) 
            
        }
    }
    return (
    <div>
      
    </div>
  )
}

export default VerifyEmailPage
