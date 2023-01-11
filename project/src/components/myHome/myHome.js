import Layout from "../layouts/layout";
import MeasurementList from "./measurement/measurementList";
import styles from "./myHome.module.css";
/**
 *
 * @returns The home page for user experience that has been customized solely for the user
 */
function MyHome() {
  return (
    <div>
      <div>
        <h1>Welcome David</h1>
      </div>
      <div>
        <div>
          <p>Here are your favorite topics from the community</p>
        </div>
        <div>
          <MeasurementList />
        </div>
      </div>
    </div>
  );
}

MyHome.Layout = Layout;

export default MyHome;
