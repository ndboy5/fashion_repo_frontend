import styles from "./nav.module.css";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "./header";

function Nav() {
  return (
    <>
      <div className={styles.navBar}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.a}>
            About
          </Link>
        </nav>

        <nav className={styles.nav}>
          <Link to="/community" className={styles.a}>
            Community
          </Link>
        </nav>

        <ul>
          <nav className={styles.nav}>
            <Link to={"/myhome/"} className={styles.a}>
              My Home
              <i className={styles.i}>
                <FaChevronDown />
              </i>
            </Link>
            <li hidden>
              <a href="">Order</a>
            </li>
            <li hidden>
              <a href="">My Tailor</a>
            </li>

            <li hidden>
              <a href="">Measurement</a>
            </li>
          </nav>
        </ul>

        <nav className={styles.nav}>
          <a href="#" className={styles.a}>
            <Link to="/Market">Market</Link>
          </a>
        </nav>

        <nav className={styles.nav}>
          <Link to="/gallery" className={styles.a}>
            Gallery
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Nav;
