// import trending_topics_data from "../../data/trend_topic_data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./trendingTopics.module.css";
import axios from "axios";

function TrendingTopics(props) {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    //setup config for http header to server
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          "online-couturier-user"
        )}`,
      },
    };
    //Get trending topics from the server
    //TODO: filter on server side to receive only the top 50 trending topics
    axios
      .get("http://localhost:5000/api/v1/topics", config)
      .then((response) => {
        const { success, data } = response.data;

        if (success) {
          // load topics received from server
          setTopics(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.topic}>
      <div class="rows">
        <h4>TRENDING TOPICS</h4>

        {topics.map((tp) => (
          <Link to={"/topics/" + tp._id} className={styles.rows}>
            {tp.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TrendingTopics;
