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
        <button className={styles.btn}>
          <li className={styles.nav}>
            <Link to={"/"}>
              <a href="#" className={styles.navName}>
                Home
              </a>
            </Link>
            <button
              className={styles.btnI}
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
                <Link to={"/order"}>
                  <button className={styles.btn3}>
                    <li>
                      {" "}
                      <a href="">Order</a>
                    </li>
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className={styles.btn3}>
                    <li>
                      {" "}
                      <a href="">My Tailor</a>
                    </li>
                  </button>
                </Link>

                <Link to={"/myhome/measurement"}>
                  <button className={styles.btn3}>
                    <li>
                      {" "}
                      <a href="">Measurement</a>
                    </li>
                  </button>
                </Link>
                <Link to={"/chatContainer"}>
                  <button className={styles.btn3}>
                    <li>
                      {" "}
                      <a href="">Chats</a>
                    </li>
                  </button>
                </Link>
              </ul>
            </div>
          </li>
        </button>

        <Link to="/Market">
          <button className={styles.btn}>
            <li className={styles.nav}>
              {" "}
              Market
              <a href="#" className={styles.a}></a>
            </li>
          </button>
        </Link>

        <Link to="/gallery">
          <button className={styles.btn}>
            <li className={styles.nav}>
              {" "}
              Gallery
              <a href="#" className={styles.a}></a>
            </li>
          </button>
        </Link>

        <Link to="/">
          <button className={styles.btn}>
            <li className={styles.nav}>
              {" "}
              About Us
              <a href="#" className={styles.a}></a>
            </li>
          </button>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
