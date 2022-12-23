// import trending_topics_data from "../../data/trend_topic_data";
import { Link } from "react-router-dom";
import styles from "./topic.module.css";

function Topic(props) {
  // const topics = trending_topics_data;
  const topics = props.data;
  return (
    <div className={styles.topic}>
      <div class="rows">
        <h4>TRENDING TOPICS</h4>

        {topics.map((tp) => (
          <Link to={"/topic/" + tp.id} className={styles.rows}>
            {tp.topic}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topic;
