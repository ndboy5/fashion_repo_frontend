import styles from "./chatMessage.module.css";
import {IoIosAddCircle, IoMdAddCircleOutline, IoMdSend} from 'react-icons/io';
import {GrEmoji} from 'react-icons/gr';
import {BiMicrophone} from 'react-icons/bi';
function ChatMessage(){
    return(
        <div className={styles.container}>
            <div className={styles.messageBox}>
            <input type="text" className={styles.message} placeHolder="Message"/>
            </div>
            <div>
            <button className={styles.btn}>
                <i>
                    <IoIosAddCircle/>
                </i>
            </button>
            <button className={styles.btn}>
                <i>
                    <IoMdSend/>
                </i>
            </button>
            <button className={styles.btn}>
                <i>
                    <GrEmoji/>
                </i>
            </button>
            <button className={styles.btn}>
                <i>
                    <div className={styles.textIcon}>@</div>
                </i>
            </button>
            <button className={styles.btn}>
                <i>
                    <div className={styles.textIcon}>Aa</div>
                </i>
            </button>
            <button className={styles.btn}>
                <i>
                    <BiMicrophone/>
                </i>
            </button>
            </div>
        </div>
    );
}
export default ChatMessage;