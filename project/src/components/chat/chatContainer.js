import React, { useState } from "react";
import styles from "./chatContainer.module.css";
import ChatBody from "./chatBody";
import ChatHeader from "./chatHeader";
import ChatMessage from "./chatMessage";
import { useParams } from "react-router-dom";


function ChatContainer(props) {
  let { id } = useParams();
  const [message, setMessage] = useState([]);
  function changeMessage(newMessage) {
    // event.preventDefault();
    setMessage([...message, newMessage]);
  }

  function onButtonClick(event) {
    event.preventDefault();
    console.log("Button clicked...");
    //TODO: @Chima I beleive your intent is to do something with the message, you can do that here
  }

  // const { match } = props;
  return (
    <div className={styles.container}>
      <p>Route params: {id}</p>
      <ChatHeader />
      <ChatBody message={message} />
<<<<<<< HEAD
=======
      <ChatMessage
        onMessageChange={changeMessage}
        onButtonClick={onButtonClick}
      />
>>>>>>> a2793965e55c36527a6b8286591bb8e136ec07f7
    </div>
  );
}
export default ChatContainer;
