import { useContext, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import EditDetails from "./editDetails";
import styles from "./profileComponent.module.css";
import { UserContext } from "../../utils/userContext";

function ProfileComponent() {
  const { user, setUser } = useContext(UserContext);

  let url = null;
  const [userName, changeName] = useState("Jack John");
  const [userEmail, changeEmail] = useState("jackjohn@example.com");
  const [editContext, setContext] = useState("");
  const [showValue, changeShow] = useState(false);

  function changeDetails(context, newDetail) {
    switch (context) {
      case "Email":
        {
          changeEmail(newDetail);
        }
        break;
      case "Name": {
        changeName(newDetail);
      }
    }
    changeShow(false);
  }

  function emailChange() {
    setContext("Email");
    changeShow(true);
  }

  function nameChange() {
    setContext("Name");
    changeShow(true);
  }

  //This function removes the login details from localstorage and react context
  function handleLogout(event) {
    event.preventDefault();
    localStorage.removeItem("online-couturier-user-tk");
    localStorage.removeItem("online-couturier-user");
    localStorage.removeItem("online-couturier-user-nm");

    setUser(null);
    //TODO: Navigate to the login page be default
    console.log("user logged out successfully");
  }

  return (
    <section className={styles.container}>
      <div className={styles.subContainer}>
        <h3 className={styles.label}>Profile Photo</h3>
        <div className={styles.profileImage}>
          <div className={styles.userImage}>
            <i>
              <BsFillPersonFill />
            </i>
          </div>
          <div className={styles.buttons}>
            <button>Change photo</button>
            <button>Remove Photo</button>
          </div>
        </div>

        <h3 className={styles.labels}>Name</h3>
        <div className={styles.profileName}>
          <div className={styles.userDetails}>
            <div className={styles.input}>{userName}</div>

            <div className={styles.editButtons}>
              <button onClick={nameChange}>Edit</button>
            </div>
          </div>
        </div>

        <h3 className={styles.labels}>Email</h3>
        <div className={styles.profileEmail}>
          <div className={styles.userDetails}>
            <div className={styles.input}>{userEmail}</div>

            <div className={styles.editbuttons}>
              <button onClick={emailChange}>Edit</button>
            </div>
          </div>
        </div>
        <EditDetails
          context={editContext}
          handleEdit={changeDetails}
          show={showValue}
        />
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
    </section>
  );
}

export default ProfileComponent;
