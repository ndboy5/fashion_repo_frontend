import styles from "./newMeasurement.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function NewMeasurement() {
  const navigate = useNavigate();
  const [measurement, setMeasurement] = useState({
    name: "",
    description: "",
    gender: "",
    unit: "",
    type: "",
    last_update_by: "",
    upperBodyMeasure: {
      "Shoulder Width": "",
      Chest: "",
      Waist: "",
      Hip: "",
    },
    lowerBodyMeasure: {
      Waist: "",
      Hip: "",
      Inseam: "",
    },
    bodiceMeasure: {},
    skirtMeasure: {},
    trouserMeasure: {},
    __v: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeasurement((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpperBodyInputChange = (e) => {
    // event.preventDefault();
    const { name, value } = e.target;
    setMeasurement((prevState) => ({
      ...prevState,
      upperBodyMeasure: {
        ...prevState.upperBodyMeasure,
        [name]: parseFloat(value),
      },
    }));
  };

  const handleLowerBodyInputChange = (e) => {
    // event.preventDefault();
    const { name, value } = e.target;
    setMeasurement((prevState) => ({
      ...prevState,
      lowerBodyMeasure: {
        ...prevState.lowerBodyMeasure,
        [name]: parseFloat(value),
      },
    }));
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    // Code to send `measurement` to server
    // const { name, value } = event.target;
    // setMeasurement({ ...measurement, [name]: value });
    console.log(measurement);
    axios
      .post("http://localhost:5000/api/v1/measurements", measurement)
      .then((response) => {
        //TODO: Determine where to store token recieved from server securely
        const { name, success } = response.data;
        if (success) {
          console.log(response.data);
          //After login, navigate to the myHome page
          navigate("/myhome");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.info}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={measurement.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              name="description"
              // placeholder="purpose of measurement"
              value={measurement.description}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Gender:
            <input
              type="text"
              name="gender"
              value={measurement.gender}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            unit:
            <input
              type="text"
              name="unit"
              placeholder="cm,inch,m,mm"
              value={measurement.unit}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Type:
            <input
              type="text"
              name="type"
              placeholder="Free Hand, Pattern Drafting"
              value={measurement.type}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <br />
        <br />
        <div className={styles.lowerBody}>
          UPPER BODY
          <br />
          <br />
          <label>
            Shoulder Width:
            <input
              type="number"
              name="Shoulder Width"
              value={measurement.upperBodyMeasure["Shoulder Width"]}
              onChange={handleUpperBodyInputChange}
            />
          </label>
          <br />
          <label>
            Chest:
            <input
              type="number"
              name="Chest"
              value={measurement.upperBodyMeasure.Chest}
              onChange={handleUpperBodyInputChange}
            />
          </label>
          <br />
          <label>
            Waist:
            <input
              type="number"
              name="Waist"
              value={measurement.upperBodyMeasure.Waist}
              onChange={handleUpperBodyInputChange}
            />
          </label>
          <br />
          <label>
            Hip:
            <input
              type="number"
              name="Hip"
              value={measurement.upperBodyMeasure.Hip}
              onChange={handleUpperBodyInputChange}
            />
          </label>
        </div>
        <br />
        <div className={styles.lowerBody}>
          LOWER BODY
          <br />
          <br />
          <label>
            Waist:
            <input
              type="number"
              name="Waist"
              value={measurement.lowerBodyMeasure.Waist}
              onChange={handleLowerBodyInputChange}
            />
          </label>
          <br />
          <label>
            Hip:
            <input
              type="number"
              name="Hip"
              value={measurement.lowerBodyMeasure.Hip}
              onChange={handleLowerBodyInputChange}
            />
          </label>
          <br />
          <label>
            Inseam:
            <input
              type="number"
              name="Inseam"
              value={measurement.lowerBodyMeasure.Inseam}
              onChange={handleLowerBodyInputChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
          <br />
        </div>
      </form>

      {/* </div> */}
    </div>
  );
}

export default NewMeasurement;
