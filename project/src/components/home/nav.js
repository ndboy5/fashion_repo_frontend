import styles from "./nav.module.css";
import {
  FaArrowDown,
  FaCaretDown,
  FaCartArrowDown,
  FaChartArea,
  FaChevronDown,
  FaHome,
  FaInfo,
  FaPersonBooth,
  FaPhotoVideo,
  FaRegArrowAltCircleDown,
  FaShoppingBasket,
  FaUser,
  FaUsersCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../layouts/header";

function Nav() {
  return (
    <>
      <div className={styles.home}>
        <nav className={styles.nav}>
          <a href="#" className={styles.a}>
            <i className={styles.i}>
              <FaInfo />
            </i>
            About
          </a>
        </nav>

        <nav className={styles.nav}>
          <Link to="/community" className={styles.a}>
            Community
            <i className={styles.i}>
              <FaChevronDown />
            </i>
          </Link>
          <li hidden>
            <a href="">Chat</a>
          </li>
        </nav>

        <ul>
          <nav className={styles.nav}>
            <a href="#" className={styles.a}>
              My Home
              <i className={styles.i}>
                <FaChevronDown />
              </i>
            </a>
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
            Market
            <i className={styles.i}>
              <FaChevronDown />
            </i>
          </a>
        </nav>

        <nav className={styles.nav}>
          <Link to="/gallery" className={styles.a}>
            Gallery
            <i className={styles.i}>
              <FaChevronDown />
            </i>
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Nav;
