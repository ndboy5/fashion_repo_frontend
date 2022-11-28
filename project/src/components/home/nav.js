import styles from "./nav.module.css";
import {
  FaHome,
  FaInfo,
  FaPhotoVideo,
  FaShoppingBasket,
  FaUser,
} from "react-icons/fa";

function Nav() {
  return (
    <home className={styles.home}>
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
            <FaHome />
          </i>
          My Home
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
    </home>
  );
}

export default Nav;
