
import express from "express"
import dotenv from 'dotenv'
import authRoutes from './routes/authroutes.js'
import messageRoutes from './routes/messageroutes.js'
import userRoutes from './routes/userroutes.js'
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";


dotenv.config();



const app=express();
const PORT=process.env.PORT||5000

app.use(express.json());   //to parse incoming requests to json payloads from (req.body)
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);

app.listen(PORT,()=>{
    console.log(`Server running in port ${PORT}`);
    connectToMongoDB();
})