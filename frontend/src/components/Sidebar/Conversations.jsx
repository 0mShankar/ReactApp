import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../Hooks/useGetConversation'
import { getRandomEmoji } from '../../emoji/emojis';

const Conversations = () => {
  const {loading,conversations}=useGetConversation();
  console.log("Conversations",conversations)
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, idx)=>(
       <Conversation
       key={conversation._id}
       conversation={conversation}
       emoji={getRandomEmoji()}
       lastIdx={idx === conversations.length -1}
       />
      ))}
    </div>
  )
}

export default Conversations
