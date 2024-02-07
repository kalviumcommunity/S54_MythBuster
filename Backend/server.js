import express from "express"
import dotenv from "dotenv"
import {ConnectToDB} from "./db/connectToMongoDB.js"
import postRoutes from "./routes/postRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import cors from "cors"

dotenv.config()
const app = express()
const Port = process.env.PORT || 5000

app.use(cors())

app.get("/",(req,res)=>{
  res.send("Welcome To the Backend")
})
app.use(express.json()) //? to parse the incoming requests with JSON payloads (from req.body)

// * Functional Routes related to Myth
app.use("/myths",postRoutes)

// & Functional Routes related to Authentication
app.use("/api/auth",authRoutes)


// ^ Listening to the connections
app.listen(Port,()=>{
  console.log("Server  started on port "+ Port)
  ConnectToDB()
})