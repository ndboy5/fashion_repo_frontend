import { useState } from "react";
import { useParams } from "react-router-dom";
import measurement_data from "../../../data/measurement_data";
import MeasureInputField from "./measureInputField";
import styles from "./singleMeasurement.module.css";

/**
 *@param1 A measurment object is received as parameter from the myHome Component
 *@param2 A flag indicating if this is a new measurement or an edit
 *@returns This component displays the measurement for all the various body segments
 * The measurement elements displayed is based on the type of measurement pattern and gender.
 * it should accept an empty measurement as default
 *
 * TODO: Addition of edit functionality to the measurement entries
 * TODO: Validation of the entries
 */

function SingleMeasurement() {
  //TODO: recieve parameters when decided on wether to use Redux or not
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

  const styleClass = "dark";
  // TODO: handle save functionality to server
  return (
    // <div className={styles.container}>
    <form onSubmit={handleSubmit}>
      <section className={styles.details} id="details">
        <div className={styles.detailsLeft}>
          <MeasureInputField
            name={"name"}
            value={measurement.name}
            styleClass={styleClass}
          />
          <MeasureInputField
            name={"description"}
            value={measurement.description}
            styleClass={styleClass}
          />
          <MeasureInputField
            name={"is_favourite"}
            value={measurement.is_favourite}
            styleClass={styleClass}
          />
        </div>
        <div className={styles.detailsRight}>
          <MeasureInputField
            name={"gender"}
            value={measurement.gender}
            styleClass={styleClass}
          />
          <MeasureInputField
            name={"type"}
            value={measurement.type}
            styleClass={styleClass}
          />
          <MeasureInputField
            name={"unit"}
            value={measurement.unit}
            styleClass={styleClass}
          />
        </div>
      </section>
      <section className={styles.measureImageSection} id="measuresSection">
        {/* The measures section which shows the various measured values starts here */}
        <div className={styles.measuresContainer}>
          {measurement.type === "Free Hand" &&
            measurement.upper_body_measure && (
              <div className={styles.FHMaleUpperBody}>
                <span>This is the Free-hand male upper body</span>

                {Object.keys(measurement.upper_body_measure).map(
                  (measure, i) => {
                    return (
                      <MeasureInputField
                        key={i}
                        name={measure}
                        value={measurement.upper_body_measure[measure]}
                      />
                    );
                  }
                )}
              </div>
            )}
          {measurement.type === "Free Hand" &&
            measurement.lower_body_measure && (
              <div className={styles.FHMaleLowerBody}>
                <span>This is the free- hand male lower body</span>
                {Object.keys(measurement.lower_body_measure).map(
                  (measure, i) => {
                    return (
                      <MeasureInputField
                        key={i}
                        name={measure}
                        value={measurement.lower_body_measure[measure]}
                      />
                    );
                  }
                )}
              </div>
            )}
          {measurement.type === "Pattern Drafting" &&
            measurement.upper_body_measure && (
              <div className={styles.PDMaleUpperBody}>
                <span>This is the pattern design male upper body</span>
                {Object.keys(measurement.upper_body_measure).map(
                  (measure, i) => {
                    return (
                      <MeasureInputField
                        key={i}
                        name={measure}
                        value={measurement.upper_body_measure[measure]}
                      />
                    );
                  }
                )}
              </div>
            )}
          {measurement.type === "Pattern Drafting" &&
            measurement.lower_body_measure && (
              <div className={styles.PDMaleLowerBody}>
                <span>This is the pattern design male lower body</span>
                {Object.keys(measurement.lower_body_measure).map(
                  (measure, i) => {
                    return (
                      <MeasureInputField
                        key={i}
                        name={measure}
                        value={measurement.upper_body_measure[measure]}
                      />
                    );
                  }
                )}
              </div>
            )}
          {measurement.gender === "F" && measurement.bodice_measure && (
            <div className={styles.PDFemaleBodice}>
              <span>This is the pattern design female Bodice</span>
              {Object.keys(measurement.bodice_measure).map((measure, i) => {
                return (
                  <MeasureInputField
                    key={i}
                    name={measure}
                    value={measurement.bodice_measure[measure]}
                  />
                );
              })}
            </div>
          )}
          {measurement.gender === "F" && measurement.skirt_measure && (
            <div className={styles.PDFemaleSkirt}>
              <span>This is the pattern design female skirt</span>
              {Object.keys(measurement.skirt_measure).map((measure, i) => {
                return (
                  <MeasureInputField
                    key={i}
                    name={measure}
                    value={measurement.skirt_measure[measure]}
                  />
                );
              })}
            </div>
          )}
          {measurement.gender === "F" && measurement.trouser_measure && (
            <div className={styles.PDFemaleTrouser}>
              <span>This is the pattern design female Trouser</span>
              {Object.keys(measurement.trouser_measure).map((measure, i) => {
                return (
                  <MeasureInputField
                    key={i}
                    name={measure}
                    value={measurement.trouser_measure[measure]}
                  />
                );
              })}
            </div>
          )}
        </div>
        {/* When each section/field is clicked, the image component should change
        TODO: To make the image component dynamic
        */}
        <div className={styles.imageContainer}> Dynamic images go in here</div>
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
