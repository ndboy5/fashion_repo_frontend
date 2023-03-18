import styles from "./messageBoxLeft.module.css";
import { BsChatLeft, BsChatLeftFill, BsChatRightFill } from "react-icons/bs";

function MessageBoxLeft() {
  return (
    <div className={styles.icon}>
      <div className={styles.iconLeft}>
        <i>
          <BsChatLeftFill />
        </i>
      </div>
    </div>
  );
}

export default MessageBoxLeft;
