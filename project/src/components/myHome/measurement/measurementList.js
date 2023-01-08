import measurementData from "../../../data/measurement_data";
import { FaTrash, FaEdit } from "react-icons/fa";
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
      </section>
      <section>
        <button>New</button>
        <table>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Owner</th>
            <th>Gender</th>
            <th>Last Update</th>
            <th> </th>
          </tr>
          {myMeasurements.map((m) => (
            <tr>
              <td>{m.id}</td>
              <td>
                <Link to={"/myhome/measurement/" + m.id}>{m.name}</Link>
              </td>
              <td>{m.owner}</td>
              <td>{m.gender}</td>
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