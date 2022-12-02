import styles from "./chatMessage.module.css";
import {IoMdAddCircleOutline, IoMdSend} from 'react-icons/io';
function ChatMessage(){
    return(
        <div className={styles.container}>
            <div className={styles.messageBox}>
            <input type="text" className={styles.message} placeHolder="Message"/>
            </div>
            <div>
            <button className={styles.btn}>
                <i>
                    <IoMdAddCircleOutline/>
                </i>
            </button>
            <button className={styles.btn}>
                <i>
                    <IoMdSend/>
                </i>
            </button>
            </div>
        </div>
    );
}
export default ChatMessage;