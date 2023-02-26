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
    <div className={styles.container}>
      <div>
        <h1>my Home page</h1>
        <div>
          <MeasurementList />
        </div>
      </div>
    </div>
  );
}

MyHome.Layout = Layout;

export default MyHome;
