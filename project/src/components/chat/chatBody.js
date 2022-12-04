import styles from "./chatBody.module.css"
function ChatBody(props){
    return(
        <div className={styles.chatBody}>
            {props.showMessage}
        </div>
    );
}
export default ChatBody;