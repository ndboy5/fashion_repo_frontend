import styles from "./chatBody.module.css";
import ChatLog from "./chatLog";
import ProfilePic from "./profilePhoto";
import SingleChatTemplate from "./singleChatTemplate";
function ChatBody(props) {
  console.log(props.message);
  const { messages } = props;
  return (
    <div className={styles.chatBody}>
      {props.message.map((message) => (
        <SingleChatTemplate singleMessage={message} />
      ))}
      <div className={styles.chatHistory}>
        <ProfilePic />
        <ChatLog />
      </div>
      <hr></hr>
    </div>
  );
}
export default ChatBody;
