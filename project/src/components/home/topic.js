import trending_topics_data from "../../data/trend_topic_data";
import styles from "./topic.module.css";

function Topic() {
  const topics = trending_topics_data;
  return (
    <div className={styles.topic}>
      <div class="rows">
        <h4>TRENDING TOPICS</h4>

        {topics.map((tp) => (
          <div className={styles.rows}>{tp.topic}</div>
        ))}
      </div>
    </div>
  );
}
export default Topic;
