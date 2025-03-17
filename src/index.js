// require('dotenv').config({path: '.env'}) 
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";


dotenv.config({
    path: './env'
})



connectDB()









/* first approch 
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express()


;( async () => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}`)
       app.on("error",(error)=>{
        console.log("error:",error);
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`APP is Listening on port $ {process.envPORT}`);
       })


    }catch(error){
        console.error("ERROR: ",error)
        throw err
    }
})() // start for semi; for professinal purpose
 */