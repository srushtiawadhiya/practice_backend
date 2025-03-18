import express from "express"
import cors from  "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use((cors({
    origin: process.env.CORS_ORIGIN,
    Credentials : true
})))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public")) //store image public folder
app.use(cookieParser())










export { app }