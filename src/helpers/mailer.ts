import User from '@/models/userModel'
import bcryptjs from 'bcryptjs'
import nodemailer from 'nodemailer'
export const sendEmail = async({email,emailType,userId}:any)=>{
  try{
    //TODO : configure mail for usage
   const hashedToken =  await bcryptjs.hash(userId.toString(),12)

    if(emailType==="VERIFY")
      {
        await User.findByIdAndUpdate(userId,{$set:{verifyToken:hashedToken,verifyTokenExpiry:Date.now()+3600000}}) 
      }
      else if(emailType==="RESET")
      { 
        await User.findByIdAndUpdate(userId,{$set:{forgotPasswordToken:hashedToken,forrgotPasswordTokenExpiry:Date.now()+3600000}}) 

      }
      var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.transport_user_id,
          pass: process.env.transport_pass_id
        }
      });
      const mailOption = {
        from: '<matin@matin.ai>', // sender address
        to: email, // list of receivers
        subject: emailType==="VERIFY"?"Verify your email":"Reset your password",
        html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
        or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
        </p> `, 
      }
      const mailResponse = await transport.sendMail(mailOption)
      return mailResponse

    }
    catch(err:any)
    { 
        throw new Error(err.message) 
    }
}