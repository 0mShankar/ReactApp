import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../Hooks/useGetMessage'
import Messageskeleton from '../../skeletons/Messageskeleton';
import useListenMessages from '../../Hooks/useListenMessages';

const Messages = () => {
  const{messages,loading} =useGetMessage();
  console.log("messages",messages);
   useListenMessages();
  const lastMessageRef =useRef();

  useEffect(()=>{
   lastMessageRef.current?.scrollIntoView({behaviour:"smooth"});
  },[messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>

{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} 
           ref={lastMessageRef}
          >
						<Message message={message} />
					</div>
				))}
      {loading && [...Array(3)].map((_,idx)=><Messageskeleton key={idx}/>)}

      {!loading && messages.length === 0 && (
				<p className='text-center text-gray-300'>Send a message to start the conversation</p>
			)}
    </div>
  )
}

export default Messages
