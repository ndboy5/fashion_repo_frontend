import styles from "./signin.module.css";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function TopicForm() {
  // TODO: Setup toast options
  // https://www.youtube.com/watch?v=otaQKODEUFs&t=4009s

  const navigate = useNavigate();

  const [topicDetails, setTopicDetails] = useState({
    title: "",
    detail: "",
    isOpen: true,
  });

  // handle input change
  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setTopicDetails({ ...topicDetails, [name]: value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    //setup config for http header to server
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          "online-couturier-user-tk"
        )}`,
      },
    };

    //Get user ID from local storage
    const user = {
      createdBy: `${localStorage.getItem("online-couturier-user")}`,
    };

    axios
      .post(
        "http://localhost:5000/api/v1/topics",
        { ...topicDetails, user },
        config
      )
      .then((response) => {
        const { success, data } = response.data;

        if (success) {
          console.log(`Topic successfully created. ID: ${data._id}`);

          //After topic creation, navigate to the myHome page
          navigate("/myhome");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form className={styles.container} onSubmit={handleSubmitForm}>
      <h3>New Topic</h3>
      <div className={styles.title}>
        <div className={styles.title}>Topic</div>
        <input
          type="text"
          name="title"
          id="title"
          value={topicDetails.title}
          onChange={handleInputChange}
        ></input>
        <div className={styles.detail}>Detail</div>
        <textarea
          name="detail"
          placeholder="Enter interesting details of this topic here."
          id="detail"
          value={topicDetails.detail}
          onChange={handleInputChange}
        ></textarea>

        <div className={styles.checkbox}>
          <input
            type="checkbox"
            name="isOpen"
            value={topicDetails.isOpen}
            checked={topicDetails.isOpen}
            onChange={handleInputChange} //TODO: test and confirm that this works as desired for the check box
          ></input>
          <p>Is this topic open for discussion?</p>
        </div>
      </div>

      <button type="submit" className={styles.btn}>
        SUBMIT
      </button>
    </form>
  );
}
export default TopicForm;
