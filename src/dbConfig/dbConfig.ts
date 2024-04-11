 import mongoose from 'mongoose' 
 const connectDB = async()=>{
   
    try{
        mongoose.connect( process.env.MONGO_URI!)  
        const connect = mongoose.connection 
        connect.on('connected',()=>{
            console.log(" Mongodb connected")
        })
        connect.on('error',(err)=>{
            console.log("error connecting to db"+err)
            process.exit()
        })
    }
    catch(err)
    {
        console.log("Connection to database refused")
    }
 }
module.exports=connectDB 