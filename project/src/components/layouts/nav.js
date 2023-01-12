import styles from "./nav.module.css";
import { FaArrowDown, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [isNavMenuToggle, setIsNavMenuToggle] = useState(false);
  return (
    <nav className={styles.navHolder}>
      <div className={styles.nav}>
        <Link to="/community" className={styles.a}>
          Community
        </Link>
        <button className={styles.btn}>
          <i className={styles.i}>
            <FaChevronDown />
          </i>
        </button>
      </div>

      <div className={styles.nav}>
        <a href="#" className={styles.a}>
          About Us
        </a>
        <button className={styles.btn}>
          <i className={styles.i}>
            <FaChevronDown />
          </i>
        </button>
      </div>

      <div className={styles.nav}>
        <a
          href="#"
          className={styles.navName}
          // onClick={() => {
          //   setIsNavMenuToggle(!isNavMenuToggle);
          // }}
        >
          My Home
        </a>

        <button
          className={styles.btn}
          onClick={() => {
            setIsNavMenuToggle(!isNavMenuToggle);
          }}
        >
          <i className={styles.i}>
            <FaChevronDown />
          </i>
        </button>

        < div
          className={isNavMenuToggle ? styles.navMenu.expanded : styles.navMenu}
        >
          <ul className={styles.navMenu}>
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
              <Link to={"/myhome/"}>
                <a href=""> Measurement</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.nav}>
        <a href="#" className={styles.a}>
          <Link to="/Market">Market</Link>
        </a>
        <button className={styles.btn}>
          <i className={styles.i}>
            <FaChevronDown />
          </i>
        </button>
      </div>

      <div className={styles.nav}>
        <Link to="/gallery" className={styles.a}>
          Gallery
        </Link>
        <button className={styles.btn}>
          <i className={styles.i}>
            <FaChevronDown />
          </i>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
