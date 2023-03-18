import ChatMessage from "./chatMessage";
import MessageBody from "./messageBody";
import MessageHeader from "./messageHeader";
import styles from "./messageContainer.module.css";

function MessageContainer() {
  return (
    <div className={styles.messages}>
      <MessageHeader />
      <MessageBody />
      <ChatMessage />
    </div>
  );
}

export default MessageContainer;
