import styles from "./home.module.css";
import Topic from "./topic";
import Slides from "./slides";
import trending_topics_data from "../../data/trend_topic_data";
function Home() {
  const topics = trending_topics_data;
  const message = "Hi chima, welcome to Lagos";
  return (
    <main className={styles.main}>
      <Topic data={topics} message={message} />
      <Slides />
    </main>
  );
}
export default Home;
