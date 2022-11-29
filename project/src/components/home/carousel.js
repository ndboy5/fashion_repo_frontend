import { FaCoffee } from "react-icons/fa";
import styles from "./carousel.module.css";
function Carousel() {
  return (
    <div className={styles.carousel}>
      <button className={styles.btn}>
        <p> Trending Topics Shows on</p>
        <h1>CLICK</h1>
      </button>
    </div>
  );
}
export default Carousel;
