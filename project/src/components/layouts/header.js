import styles from "./header.module.css";
import {
  FaPortrait,
  FaRegCalendarMinus,
  FaRegMinusSquare,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProfileButton from "../profile/profileButton";

function Header() {
  const [isSearchToggle, setIsSearchToggle] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="" alt="" />
        <h2>LOGO</h2>
      </div>
      <button className={styles.hidden}>
        {" "}
        <FaRegMinusSquare />
      </button>

      <div className={styles.headerLeft}>
        <div className={styles.search}>
          <div
            className={isSearchToggle ? styles.Input.expanded : styles.Input}
          >
            <ul className={styles.searchInput}>
              <li>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Search..."
                />
              </li>
            </ul>
          </div>

          <button
            className={styles.btn}
            onClick={() => {
              setIsSearchToggle(!isSearchToggle);
            }}
          >
            <a href="#">
              <i className={styles.i}>
                <FaSearch />
              </i>
            </a>
          </button>
        </div>

        <div className={styles.login}>
          <Link to="/signin">
            <button className={styles.btn}>LOGIN</button>
          </Link>
          <Link to="/signup">
            <button className={styles.btn}>SIGN UP</button>
          </Link>
          <ProfileButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
