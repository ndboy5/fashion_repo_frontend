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

function Nav() {
  return (
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
        <a href="#" className={styles.a}>
          <i className={styles.i}>
            <FaUsersCog />
          </i>
          Community
        </a>
      </nav>

      <nav className={styles.nav}>
        <a href="#" className={styles.a}>
          My Home
          <i className={styles.i}>
            <FaChevronDown />
          </i>
        </a>
      </nav>

      <nav className={styles.nav}>
        <a href="#" className={styles.a}>
          <i className={styles.i}>
            <FaShoppingBasket />
          </i>
          Market
        </a>
      </nav>

      <nav className={styles.nav}>
        <a href="#" className={styles.a}>
          <i className={styles.i}>
            <FaPhotoVideo />
          </i>
          Gallery
        </a>
      </nav>
    </div>
  );
}

export default Nav;
