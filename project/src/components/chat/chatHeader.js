import styles from "./chatHeader.module.css";
import { IoIosAdd, IoIosArrowBack, IoIosSearch } from "react-icons/io";
import { FaChevronDown, FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";
function ChatHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Link to="/order" className={styles.a}>
          <button className={styles.btn}>
            <i>
              <IoIosArrowBack />
            </i>
          </button>
        </Link>

        <h2>Chats</h2>
      </div>
    </div>
  );
}
export default ChatHeader;
