import styles from "./home.module.css";
import Topic from "./topic";
import Slides from "./slides";
function Home() {
  return (
    <main className={styles.main}>
      <Topic />
      <Slides />
    </main>
  );
}
export default Home;
