import styles from "./chatBody.module.css";
function ChatBody(props) {
  console.log(props.message);
  return (
    <div className={styles.chatBody}>
      <div>{props.message}</div>
    </div>
  );
}
export default ChatBody;
