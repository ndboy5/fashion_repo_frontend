import styles from "./messageHeader.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
function MessageHeader() {
  return (
    <div className={styles.messageHeader}>
      <div className={styles.mesgTitle}>
        <button className={styles.btn}>
          <Link to="/chatContainer">
            <i>
              <IoIosArrowBack />
            </i>
          </Link>
        </button>

        <h2>Message</h2>
      </div>
    </div>
  );
}

export default MessageHeader;
