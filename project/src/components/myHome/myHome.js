import { Link } from "react-router-dom";
import Carousel from "../home/carousel";
import Layout from "../layouts/layout";
import styles from "./myHome.module.css";

/**
 *
 * @returns The home page for user experience that has been customized solely for the user
 */
function MyHome() {
  //TODO: figure out where this component would be useful else it is to be deleted
  return (
    <div className={styles.Container}>
      <div className={styles.myHome}>
        <div className={styles.myHomeChat}>
          <Link to="/chatContainer">
            <button className={styles.btn}>Message Log</button>
          </Link>
        </div>
        <div className={styles.myHomeTitle}>
          {" "}
          <h2>MY HOME PAGE</h2>
        </div>
        <div className={styles.myHomeMeasurement}>
          <Link to="/myhome/measurement">
            <button className={styles.btn}>My Measurement</button>
          </Link>
        </div>
      </div>
      <div className={styles.myHomeCarousel}>
        <Carousel />
      </div>
    </div>
  );
}

MyHome.Layout = Layout;

export default MyHome;
