import styles from "./messageBody.module.css";
import ProfilePic from "./profilePhoto";
import { BsChatLeft, BsChatLeftFill, BsChatRightFill } from "react-icons/bs";
import MessageBoxLeft from "./messageBoxLeft";
import MessageBoxRight from "./messageBoxRight";

function MessageBody() {
  return (
    <div className={styles.messageBody}>
      <div className={styles.userPic}>
        <ProfilePic />
      </div>
      <div className={styles.iconleft}>
        <MessageBoxLeft />
      </div>
      <div className={styles.iconright}>
        <MessageBoxRight />
      </div>
    </div>
  );
}

export default MessageBody;
