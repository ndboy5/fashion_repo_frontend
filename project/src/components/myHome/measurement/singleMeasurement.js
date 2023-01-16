import { useState } from "react";
import { useParams } from "react-router-dom";
import measurement_data from "../../../data/measurement_data";
import MeasureInputField from "./measureInputField";
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
  const [measurement, setMeasurement] = useState(measurement_data[params.id]);

  //handle form change events
  const handleOnchange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setMeasurement({ ...measurement, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(measurement);
  };

  const detail_section = true;
  // TODO: handle save functionality to server

  return (
    // <div className={styles.container}>
    <form onSubmit={handleSubmit}>
      <section className={styles.details} id="details">
        <div className={styles.detailsLeft}>
          <MeasureInputField
            name={"name"}
            value={measurement.name}
            detail_section
          />
          <MeasureInputField
            name={"description"}
            value={measurement.description}
            detail_section={detail_section}
          />
          <MeasureInputField
            name={"is_favourite"}
            value={measurement.is_favourite}
          />
        </div>
        <div className={styles.detailsRight}>
          <MeasureInputField name={"gender"} value={measurement.gender} />
          <MeasureInputField name={"type"} value={measurement.type} />
          <MeasureInputField name={"unit"} value={measurement.unit} />
        </div>
      </section>
      <section className={styles.measures} id="measures-section">
        <MeasureInputField name={"unit"} value={measurement.unit} />
      </section>
      <input type="submit" />
    </form>
    // </div>
  );
}

/**
 * This helper function checks the edited data and prompts the user if there are errors
 */
const validateEntries = () => {};

export default SingleMeasurement;
