import styles from "./messageBoxRight.module.css";
import { BsChatLeft, BsChatLeftFill, BsChatRightFill } from "react-icons/bs";

function MessageBoxRight({ text }) {
  return (
    <div className={styles.icon}>
      <div className={styles.iconRight}>
        <i>
          <BsChatRightFill />
        </i>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default MessageBoxRight;
