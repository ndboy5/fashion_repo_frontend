import { FaPersonBooth } from "react-icons/fa";
import {
  BsCart,
  BsFillPersonXFill,
  BsHeart,
  BsPerson,
  BsSearch,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./template.module.css";
import MarketBody from "./marketBody";

function Market() {
  return (
    <section className={styles.container}>
      <section className={styles.headerTop}>
        <div className={styles.logo}>
          <img src="" alt="" />
          <h2>LOGO</h2>
        </div>
      </section>

      <section className={styles.headerBar}>
        <div className={styles.barLeft}>
          <a href="#" className={styles.a}>
            <i className={styles.i}>
              <BsPerson />
            </i>
          </a>

          <div className={styles.sideline}></div>
          <a href="#" className={styles.a}>
            <i className={styles.i}>
              <BsHeart />
            </i>
          </a>
          <div className={styles.sideline}></div>
        </div>

        <div className={styles.barRight}>
          <div className={styles.sideline}></div>
          <a href="#" className={styles.a}>
            <i className={styles.i}>
              <BsSearch />
            </i>
          </a>
          <div className={styles.sideline}></div>
          <a href="#" className={styles.a}>
            <i className={styles.i}>
              <BsCart />
            </i>
          </a>
        </div>
      </section>

      <MarketBody />
    </section>
  );
}

export default Market;
