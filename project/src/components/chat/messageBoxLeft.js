import styles from "./messageBoxLeft.module.css";
import { BsChatLeft, BsChatLeftFill, BsChatRightFill } from "react-icons/bs";

function MessageBoxLeft({ text }) {
  return (
    <div className={styles.icon}>
      <div className={styles.iconLeft}>
        <i>
          <BsChatLeftFill />
        </i>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default MessageBoxLeft;
