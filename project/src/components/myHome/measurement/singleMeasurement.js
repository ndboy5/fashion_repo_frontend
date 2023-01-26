import { useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import measurement_data from "../../../data/measurement_data";
import MeasureInputField from "./measureInputField";
import { FaStar } from "react-icons/fa";
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
  //TODO: recieve parameters when decided on whether to use Redux or not
  let params = useParams();

  const reducer = (measurement, action) => {
    const { name, value } = action.payload;
    switch (action.type) {
      case "update_male_upper_body":
        return {
    //Use nested destructuring to update value in measurement
          ...measurement,
          upper_body_measure: {
            ...measurement.upper_body_measure,
            [name]: value,
          }, 
        };

      case "update_male_lower_body":
        return {
          ...measurement,
          lower_body_measure: {
            ...measurement.lower_body_measure,
            [name]: value,
          }, 
        };
      case "update_bodice_measure":
        return {
          ...measurement,
          bodice_measure: {
            ...measurement.bodice_measure,
            [name]: value,
          }, 
        };
      case "update_skirt_measure":
        return {
          ...measurement,
          skirt_measure: {
            ...measurement.skirt_measure,
            [name]: value,
          }, 
        };
      case "update_trouser_measure":
        return {
          ...measurement,
          trouser_measure: {
            ...measurement.trouser_measure,
            [name]: value,
          },
        };
      default:
        return measurement;
    }
  };

  // Get the measurment data from store
  const [measurement, dispatch] = useReducer(
    reducer,
    measurement_data[params.id]
  );

  //handle form change events
  /**
   * @param {*} event: The called here is being generated from each individual MeasurementInputField
   * @param {*} action_type: The ation types are the various reducer action types such as update_upper_body.
   */
  const handleOnChangeMeasures = (event, action_type) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    // console.log(`name: ${name}, value: ${value}  - ${action_type}`);
    dispatch({
      type: action_type,
      payload: { name: name, value: value },
    });

  };

  const styleClass = "dark"; //TODO: for testing only, to be modified afterwards
  // TODO: handle save functionality to server
  return (
    // <div className={styles.container}>
    <div className={styles.mainContainer}>
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
            name={"unit"}
            value={measurement.unit}
            styleClass={styleClass}
          />
        </div>
        <div className={styles.detailsRight}>
          <div><span>Sex: </span><span>{measurement.gender}</span></div>
         <div>
          <i>
            <FaStar
              style={
                measurement.is_favourite
                  ? { color: "#FFD700" }
                  : { color: "#FBEAEB" }
              }
            />{" "}
          </i>
        </div>
  <div><span>Measure Style: </span><span>{measurement.type}</span></div>
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
                        handleChange={handleOnChangeMeasures}
                        name={measure}
                        action_type="update_male_upper_body"
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
                        handleChange={handleOnChangeMeasures}
                        action_type="update_male_lower_body"
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
                        handleChange={handleOnChangeMeasures}
                        action_type="update_male_upper_body"
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
                        handleChange={handleOnChangeMeasures}
                        action_type="update_male_lower_body"
                        name={measure}
                        value={measurement.lower_body_measure[measure]}
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
                    handleChange={handleOnChangeMeasures}
                    action_type="update_bodice_measure"
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
                    handleChange={handleOnChangeMeasures}
                    action_type="update_skirt_measure"
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
                    handleChange={handleOnChangeMeasures}
                    action_type="update_trouser_measure"
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
        <div
        // style={{
        // backgroundImage: `url("/images/measurement/waist_measure.jpg")`,
        // }}
        >
          <img
            src={"/images/measurement/waist_measure.jpg"}
            alt="Body part"
            className={styles.imageContainer}
          />{" "}
          Dynamic images come in here
        </div>
      </section>
      <span className={styles.saveButton}>save</span>
    </div>
    // </div>
  );
}

/**
 * This helper function checks the edited data and prompts the user if there are errors
 */
const validateEntries = () => {};

export default SingleMeasurement;
