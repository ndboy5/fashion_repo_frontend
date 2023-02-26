import React, { useState } from "react";
import styles from "./chatContainer.module.css";
import ChatBody from "./chatBody";
import ChatHeader from "./chatHeader";
import ChatMessage from "./chatMessage";

function ChatContainer(props){
  const [message, setMessage] = useState([]);

  function changeMessage(newMessage) {
    
    setMessage([...message, newMessage])
  }

  function onButtonClick(event) {
    event.preventDefault();
    console.log("Button clicked...");
    //TODO: @Chima I beleive your intent is to do something with the message, you can do that here
  }

  
    return (
      <div className={styles.container}>
        <ChatHeader />
        <ChatBody message={message} />
        <ChatMessage
          onMessageChange={changeMessage}
          onButtonClick={onButtonClick}
        />
      </div>
    );
  
}
export default ChatContainer;
