import styles from "./nav.module.css";
import { FaArrowDown, FaChevronDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [isNavMenuToggle, setIsNavMenuToggle] = useState(false);
  return (
    <nav className={styles.navHolder}>
      <ul className={styles.menu}>
        <li className={styles.nav}>
          <a href="#" className={styles.navName}>
            <Link to={"/"}>My Home</Link>
          </a>

          <button
            className={styles.btn}
            onClick={() => {
              setIsNavMenuToggle(!isNavMenuToggle);
            }}
          >
            <i className={styles.i}>
              <IoMdArrowDropdown />
            </i>
          </button>

          <div
            className={
              isNavMenuToggle ? styles.navMenu.expanded : styles.navMenu
            }
          >
            <ul
              className={styles.navMenu}
              onClick={() => setIsNavMenuToggle(false)}
            >
              <li>
                <Link to={"/order"}>
                  {" "}
                  <a href="">Order</a>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  {" "}
                  <a href="">My Tailor</a>{" "}
                </Link>
              </li>

              <li>
                <Link to={"/myhome/measurement"}>
                  <a href=""> Measurement</a>
                </Link>
              </li>
              <li>
                <Link to={"/chatContainer"}>
                  <a href=""> Chats</a>
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className={styles.nav}>
          <a href="#" className={styles.a}>
            <Link to="/Market">Market</Link>
          </a>
        </li>

        <li className={styles.nav}>
          <Link to="/gallery" className={styles.a}>
            Gallery
          </Link>
        </li>

        <li className={styles.nav}>
          <a href="#" className={styles.a}>
            About Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
