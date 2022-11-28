import styles from "./nav.module.css";
import { FaInfo } from "react-icons/fa";

function nav() {
  return (
    <home className={styles.home}>
      <div className={styles.nav}>
        <a href="">
          {" "}
          <h3>
            {" "}
            <FaInfo />
          </h3>
          About
        </a>
      </div>
    </home>
  );
}

export default nav;
