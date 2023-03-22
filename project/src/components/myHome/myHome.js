import { Link } from "react-router-dom";
import Layout from "../layouts/layout";
import MeasurementList from "./measurement/measurementList";
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
          <Link to="/">
            <button className={styles.btn}>Home</button>
          </Link>
        </div>
        <div className={styles.myHomeTitle}>
          {" "}
          <h2>Welcome!</h2>
        </div>
        <div className={styles.myHomeMeasurement}>
          <Link to="/chatContainer">
            <button className={styles.btn}>My Inbox</button>
          </Link>
        </div>
      </div>
      <div className={styles.myHomeCarousel}>
        <div className={styles.measureSummary}>
          {" "}
          <MeasurementList />{" "}
        </div>
        <div className={styles.favTopics}>My favorite topics </div>
      </div>
    </div>
  );
}

MyHome.Layout = Layout;

export default MyHome;
