
import express from "express"
import dotenv from 'dotenv'
import authRoutes from './routes/authroutes.js'
import messageRoutes from './routes/messageroutes.js'
import userRoutes from './routes/userroutes.js'
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import {app,server} from './socket/socket.js'
import path from 'path'


dotenv.config();




const PORT=process.env.PORT||5000

const __dirname=path.resolve();



app.use(express.json());   //to parse incoming requests to json payloads from (req.body)
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);


app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
server.listen(PORT,()=>{
    console.log(`Server running in port ${PORT}`);
    connectToMongoDB();
})