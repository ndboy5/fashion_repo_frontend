import styles from "./topicPost.module.css";
import { GrEmoji } from "react-icons/gr";
import { GoThumbsdown, GoThumbsup } from "react-icons/go";

function TopicPost({ text }) {
  return (
    <div className={styles.textContainer}>
      <div className={styles.text}>{text}</div>
      <div className={styles.reaction}>
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
      </div>
    </div>
  );
}

export default TopicPost;
