import Conversation from "../models/conversationmodel.js";
import Message from "../models/messagemodel.js";
import { getReceiverSocketId } from "../socket/socket.js";


export const sendMessage=async(req,res)=>{
    try {
        const {message}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id;

        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,receiverId]},

        })

        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId, receiverId],
            })
        }
        const newMessage=new Message({
            senderId,
            receiverId,
            message,
        })
        if(newMessage){
            conversation.message.push(newMessage._id);
        }
        // await conversation.save();
        // await newMessage.save();
        await Promise.all([conversation.save(),newMessage.save()]);
        
        const receiverSocketId=getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }


        res.status(201).json(newMessage);


    } catch (error) {
        console.log("error in send message controller",error.message) 
        res.status(500).json({error:"Internal Server Error"})
    }
}

export const getMessage=async(req,res)=>{
    try {
        const{id:userToChatId}=req.params;
        const senderId=req.user._id;

        const conversation=await Conversation.findOne({
        participants:{$all:[senderId,userToChatId]}
        }).populate("message")
        
        if(!conversation){
            return res.status(200).json([]);
        }
        const messages=conversation.message;
        res.status(200).json(messages);

    } catch (error) {
        console.log("error in get message controller",error.message) 
        res.status(500).json({error:"Internal Server Error"})
    }
}