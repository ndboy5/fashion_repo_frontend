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
/**
 * This component lists all the measurements in the user's records.
 * This includes measurements entered by the user and measurements shared with the user.
 * It uses the user's ID to draw measurement list from the server
 */

function MeasurementList() {
  const myMeasurements = measurementData;

  return (
    <>
      <section>
        <button>New</button>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Owner</th>
            <th>Sex</th>
            <th>Type</th>
            <th>Measure Unit</th>
            <th>
              <FaHeart />{" "}
            </th>
            <th>Last Update</th>
            <th></th>
          </tr>
          {myMeasurements.map((m, index) => (
            <tr>
              <td>{m.id}</td>
              <td>
                <Link to={"/myhome/measurement/" + index}>{m.name}</Link>
              </td>
              <td>{m.owner}</td>
              <td>
                {m.gender === "M" ? <i>{<FaMale />}</i> : <i>{<FaFemale />}</i>}
              </td>
              <td>
                {m.type === "Free Hand" ? (
                  <i alt="Free Hand">{<FaHandPaper />}</i>
                ) : (
                  <i alt="Pattern Design">{<FaDraftingCompass />}</i>
                )}
              </td>
              <td>{m.unit}</td>
              <td>
                {m.is_favourite ? (
                  <i>
                    <FaHeart />
                  </i>
                ) : (
                  " "
                )}
              </td>
              <td>{m.last_update_date}</td>
              <td>
                <i>
                  <FaTrash />
                </i>{" "}
                <i>
                  <FaEdit />
                </i>
              </td>
            </tr>
          ))}
        </table>
      </section>
    </>
  );
}

export default MeasurementList;
