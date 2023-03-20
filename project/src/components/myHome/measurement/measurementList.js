import measurementData from "../../../data/measurement_data";
import styles from "./measurementList.module.css";
import {
  FaTrash,
  FaEdit,
  FaFemale,
  FaMale,
  FaHeart,
  FaHandPaper,
  FaDraftingCompass,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import measurement_data from "../../../data/measurement_data";
import axios from "axios";
/**
 * This component lists all the measurements in the user's records.
 * This includes measurements entered by the user and measurements shared with the user.
 * It uses the user's ID to draw measurement list from the server
 */

function MeasurementList() {
  const myMeasurements = measurementData;

  if (true) {
    axios
      .get("http://localhost:5000/api/v1/measurements", {
        ...measurement_data,
      })
      .then((response) => {
        const {} = response.data;
      });
  }
  return (
    <section className={styles.container}>
      <div>
        <button className={styles.newButton}>New Measurement</button>
      </div>
      <div className={styles.measurementTable}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Measurement</th>
              <th>Owner</th>
              <th>Unit</th>
              <th>Last Update</th>
              <th>Sex</th>
              <th>Type</th>
              <th>
                <FaHeart />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myMeasurements.map((m, index) => (
              <tr title={m.description} key={index}>
                <td data-label="ID">{m.id}</td>
                <td data-label="Measurement">
                  <Link to={"/myhome/measurement/" + index}>{m.name}</Link>
                </td>
                <td data-label="Owner">{m.owner}</td>
                <td data-label="Unit">{m.unit}</td>
                <td data-label="Last Update">{m.last_update_date}</td>
                <td data-label="Sex">
                  {m.gender === "M" ? (
                    <i>{<FaMale />}</i>
                  ) : (
                    <i>{<FaFemale />}</i>
                  )}
                </td>
                <td data-label="Type">
                  {m.type === "Free Hand" ? (
                    <i alt="Free Hand">{<FaHandPaper />}</i>
                  ) : (
                    <i alt="Pattern Design">{<FaDraftingCompass />}</i>
                  )}
                </td>
                <td data-label="Favorite">
                  {m.is_favourite ? (
                    <i>
                      <FaHeart />
                    </i>
                  ) : (
                    " "
                  )}
                </td>
                <td data-label="Actions">
                  <i>
                    <FaTrash />
                  </i>{" "}
                  <i>
                    <FaEdit />
                  </i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default MeasurementList;
