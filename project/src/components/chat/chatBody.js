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
      <ProfilePic />
      <ChatLog />
    </div>
  );
}
export default ChatBody;
