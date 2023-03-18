import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";

import styles from "./profilePhoto.module.css";

function ProfilePic() {
  return (
    <div className={styles.profilePic}>
      <i>
        <BsFillPersonFill />
      </i>
    </div>
  );
}

export default ProfilePic;
