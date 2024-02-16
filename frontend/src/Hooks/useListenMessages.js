import { useEffect } from 'react';
import {useSocketContext} from '../context/SocketContext'
import useConversation from '../zustand/useConversation'

const useListenMessages = () => {
  const {socket} =useSocketContext()
  const {messages,setMessges}=useConversation();

  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        setMessges([...messages,newMessage])
    })

    return ()=>socket.off("newMessage")
  },[socket,setMessges,messages])
}

export default useListenMessages
