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
          upperBodyMeasure: {
            ...measurement.upperBodyMeasure,
            [name]: value,
          },
        };

      case "update_male_lower_body":
        return {
          ...measurement,
          lowerBodyMeasure: {
            ...measurement.lowerBodyMeasure,
            [name]: value,
          },
        };
      case "update_bodice_measure":
        return {
          ...measurement,
          bodiceMeasure: {
            ...measurement.bodiceMeasure,
            [name]: value,
          },
        };
      case "update_skirt_measure":
        return {
          ...measurement,
          skirtMeasure: {
            ...measurement.skirtMeasure,
            [name]: value,
          },
        };
      case "update_trouser_measure":
        return {
          ...measurement,
          trouserMeasure: {
            ...measurement.trouserMeasure,
            [name]: value,
          },
        };
      case "update_main_detail":
        return { ...measurement, [name]: value };

      case "update_isFavourite":
        return { ...measurement, [name]: value };
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

    console.log(`name: ${name}, value: ${value}  - ${action_type}`);
    dispatch({
      type: action_type,
      payload: { name: name, value: value },
    });
  };

  const handleUpdateFavorite = (action_type) => {
    const name = "is_favourite";
    const value = !measurement.is_favourite;

    console.log(`name: ${name}, value: ${value}  - ${action_type}`);
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
            isText={true}
            handleChange={handleOnChangeMeasures}
            action_type="update_main_detail"
          />
          <MeasureInputField
            name={"description"}
            value={measurement.description}
            isText={true}
            handleChange={handleOnChangeMeasures}
            action_type="update_main_detail"
          />
          <div className={styles.selectBox}>
            <select
              className={styles.select}
              onChange={(e) => handleOnChangeMeasures(e, "update_main_detail")}
              name={"unit"}
              value={measurement.unit}
            >
              <option value="CM">Centimeters</option>
              <option value="M">Meters</option>
              <option value="Inch">Inches</option>
            </select>
          </div>
        </div>
        <div className={styles.detailsRight}>
          <div>
            <span>Sex: </span>
            <span>{measurement.gender}</span>
          </div>
          <div onClick={(e) => handleUpdateFavorite("update_isFavourite")}>
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
          <div>
            <span>Measure Style: </span>
            <span>{measurement.type}</span>
          </div>
        </div>
      </section>
      <section className={styles.measureImageSection} id="measuresSection">
        {/* The measures section which shows the various measured values starts here */}
        <div className={styles.measuresContainer}>
          {measurement.type === "Free Hand" && measurement.upperBodyMeasure && (
            <div className={styles.FHMaleUpperBody}>
              <h2>Free-hand male upper body</h2>

              {Object.keys(measurement.upperBodyMeasure).map((measure, i) => {
                return (
                  <MeasureInputField
                    key={i}
                    handleChange={handleOnChangeMeasures}
                    name={measure}
                    action_type="update_male_upper_body"
                    value={measurement.upperBodyMeasure[measure]}
                  />
                );
              })}
            </div>
          )}
          {measurement.type === "Free Hand" && measurement.lowerBodyMeasure && (
            <div className={styles.FHMaleLowerBody}>
              <h2>free- hand male lower body</h2>
              {Object.keys(measurement.lowerBodyMeasure).map((measure, i) => {
                return (
                  <MeasureInputField
                    key={i}
                    handleChange={handleOnChangeMeasures}
                    action_type="update_male_lower_body"
                    name={measure}
                    value={measurement.lowerBodyMeasure[measure]}
                  />
                );
              })}
            </div>
          )}
          {measurement.type === "Pattern Drafting" &&
            measurement.upperBodyMeasure && (
              <div className={styles.PDMaleUpperBody}>
                <h2>pattern design male upper body</h2>
                {Object.keys(measurement.upperBodyMeasure).map((measure, i) => {
                  return (
                    <MeasureInputField
                      key={i}
                      handleChange={handleOnChangeMeasures}
                      action_type="update_male_upper_body"
                      name={measure}
                      value={measurement.upperBodyMeasure[measure]}
                    />
                  );
                })}
              </div>
            )}
          {measurement.type === "Pattern Drafting" &&
            measurement.lower_body_measure && (
              <div className={styles.PDMaleLowerBody}>
                <h2>pattern design male lower body</h2>
                {Object.keys(measurement.lowerBodyMeasure).map((measure, i) => {
                  return (
                    <MeasureInputField
                      key={i}
                      handleChange={handleOnChangeMeasures}
                      action_type="update_male_lower_body"
                      name={measure}
                      value={measurement.lowerBodyMeasure[measure]}
                    />
                  );
                })}
              </div>
            )}
          {measurement.gender === "F" && measurement.bodiceMeasure && (
            <div className={styles.PDFemaleBodice}>
              <h2>pattern design female Bodice</h2>
              {Object.keys(measurement.bodiceMeasure).map((measure, i) => {
                return (
                  <MeasureInputField
                    key={i}
                    handleChange={handleOnChangeMeasures}
                    action_type="update_bodice_measure"
                    name={measure}
                    value={measurement.bodiceMeasure[measure]}
                  />
                );
              })}
            </div>
          )}
          {measurement.gender === "F" && measurement.skirtMeasure && (
            <div className={styles.PDFemaleSkirt}>
              <h2>pattern design female skirt</h2>
              {Object.keys(measurement.skirtMeasure).map((measure, i) => {
                return (
                  <MeasureInputField
                    key={i}
                    handleChange={handleOnChangeMeasures}
                    action_type="update_skirt_measure"
                    name={measure}
                    value={measurement.skirtMeasure[measure]}
                  />
                );
              })}
            </div>
          )}
          {measurement.gender === "F" && measurement.trouserMeasure && (
            <div className={styles.PDFemaleTrouser}>
              <h2>pattern design female Trouser</h2>
              {Object.keys(measurement.trouserMeasure).map((measure, i) => {
                return (
                  <MeasureInputField
                    key={i}
                    handleChange={handleOnChangeMeasures}
                    action_type="update_trouser_measure"
                    name={measure}
                    value={measurement.trouserMeasure[measure]}
                  />
                );
              })}
            </div>
          )}
        </div>
        {/* When each section/field is clicked, the image component should change
        TODO: To make the image component dynamic
        */}
        <div>
          <img
            src={"/images/measurement/waist_measure.jpg"}
            alt="Body part"
            className={styles.imageContainer}
          />{" "}
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
