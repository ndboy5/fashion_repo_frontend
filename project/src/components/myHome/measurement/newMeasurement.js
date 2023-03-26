import styles from "./newMeasurement.module.css";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import measurements from "../../../data/measurements";

function NewMeasurement() {
  const navigate = useNavigate();
  const [measurement, setMeasurement] = useState({
    name: "",
    description: "",
    gender: "",
    createdBy: "",
    owner: "",
    ownerId: "",
    lastUpdateBy: "",
    isFavourite: false,
    createdAt: "",
    lastSyncTime: "",
    lastUpdateDate: "",
    type: "",
    unit: "",
    upperBodyMeasure: {
      "Shoulder Width": "",
      Chest: "",
      Waist: "",
      Hip: "",
    },
    lowerBodyMeasure: {
      "Shoulder Width": "",
      Chest: "",
      Waist: "",
      Hip: "",
      BackLength: "",
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
    const { name, value } = e.target;
    setMeasurement((prevState) => ({
      ...prevState,
      upperBodyMeasure: {
        ...prevState.upperBodyMeasure,
        [name]: parseFloat(value),
      },
    }));
  };

  // setMeasurement({ ...measurement, [name]: value })
  const handleLowerBodyInputChange = (e) => {
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
    event.preventDefault();
    // Code to send `measurement` to server
    const { name, value } = event.target;
    setMeasurement({ ...measurement, [name]: value });
    console.log(measurement);
  };

  axios
    .post("http://localhost:5000/api/v1/measurements", {
      ...measurement,
    })
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

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
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

        <br />
        <div className={styles.upperBody}>
          UPPER BODY
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

        <div className={styles.upperBody}>
          LOWER BODY
          <br />
          <label>
            Shoulder Width:
            <input
              type="number"
              name="Shoulder Width"
              value={measurement.lowerBodyMeasure["Shoulder Width"]}
              onChange={handleLowerBodyInputChange}
            />
          </label>
          <br />
          <label>
            Chest:
            <input
              type="number"
              name="Chest"
              value={measurement.lowerBodyMeasure.Chest}
              onChange={handleLowerBodyInputChange}
            />
          </label>
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
            BackLength:
            <input
              type="number"
              name="BackLength"
              value={measurement.lowerBodyMeasure.BackLength}
              onChange={handleLowerBodyInputChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewMeasurement;

//   const handleChange = (event) => {
//     event.preventDefault();
//     const { name, value } = event.target;
//     setMeasurement({ ...measurement, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(measurement);
//     //Validate form entries before posting to server
//     // if (true) {
//     axios
//       .post("http://localhost:5000/api/v1/measurements", {
//         ...measurement,
//         // testMeasurements,
//       })
//       .then((response) => {
//         //TODO: Determine where to store token recieved from server securely
//         const { name, success } = response.data;
//         if (success) {
//           console.log("done");
//           //After login, navigate to the myHome page
//           navigate("/myhome");
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
