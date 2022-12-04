import styles from "./chatMessage.module.css";
import {IoIosAddCircle, IoMdAddCircleOutline, IoMdSend} from 'react-icons/io';
import {GrEmoji} from 'react-icons/gr';
import {BiMicrophone} from 'react-icons/bi';
import { useState } from "react";
function ChatMessage(props){
    const [message, setMessage] = useState("");

    function onMessageChanged(event){
        setMessage(event.target.value);
    }
    return(
        <div className={styles.container}>
            <div className={styles.messageBox}>
            <input type="text" className={styles.message} placeholder="Message" onChange={onMessageChanged}/>
            </div>
            <div>
            <button className={styles.btn}>
                <i>
                    <IoIosAddCircle/>
                </i>
            </button>
            <button className={styles.btn} onClick={props.onMessageChange(message)}>
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