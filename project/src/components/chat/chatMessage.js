import styles from "./chatMessage.module.css";
import { IoIosAddCircle, IoMdAddCircleOutline, IoMdSend } from "react-icons/io";
import { GrAttachment, GrEmoji } from "react-icons/gr";
import { GoThumbsdown, GoThumbsup } from "react-icons/go";
import { BiMicrophone } from "react-icons/bi";
import { useEffect, useState } from "react";
/**
 * This component returns JSX code where the user types in content into the forum.
 * React icons are used to allow for reactions and other contents.
 * TODO:
 * @param {*} props:  onMessageChange and onButtonClick handlers functions
 * @returns JSX
 */
function ChatMessage(props) {
  const [message, setMessage] = useState();
  const [updatedMessage, setUpdatedMessage] = useState(message);

  function handleChange(event) {
    event.preventDefault();
    setMessage(event.target.value);
  }

  function handleKeydown(event) {
    if (event.key === "Enter") {
      props.onMessageChange(message);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.messageBox}>
        <i>
          <GrAttachment />
        </i>
        <input
          type="text"
          id="message-input"
          name="message"
          onChange={handleChange}
          placeholder="Type your message here..."
          onKeyDown={handleKeydown}
        />
        <i>
          <IoMdSend />
        </i>
      </div>

      <div className={styles.icons}>
        <button className={styles.btn}>
          <i>
            <GoThumbsup />
          </i>
        </button>
        <button className={styles.btn}>
          <i>
            <GoThumbsdown />
          </i>
        </button>
        <button className={styles.btn}>
          <i>
            <GrEmoji />
          </i>
        </button>
        <button className={styles.btn}>
          <i>
            <BiMicrophone />
          </i>
        </button>
      </div>
    </div>
  );
}
export default ChatMessage;
