import { useParams } from "react-router-dom";
import measurement_data from "../../../data/measurement_data";
import styles from "./singleMeasurement.module.css";

/**
 *@param1 A measurment object is received as parameter from the myHome Component
 @param2 A flag indicating if this is a new measurement or an edit
 * @returns This component displays the measurement for all the various body segments
 * The elements displayed is based on the type of measurement pattern and gender.
 * it should accept an empty measurement as default
 *
 * TODO: Addition of edit functionality to the measurement entries
 * TODO: Validation of the entries
 */

function SingleMeasurement() {
  let params = useParams();

  // Get the measurment data from store
  const measurement = measurement_data[params.id];

  // TODO: handle save functionality to server

  return (
    <>
      <h1>{`${measurement.name}`}</h1>
      <form>
        <label></label>
      </form>
    </>
  );
}

export default SingleMeasurement;
