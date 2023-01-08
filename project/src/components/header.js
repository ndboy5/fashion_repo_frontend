import styles from "./headerHome.module.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeaderHome() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="" alt="" />
        <h2>LOGO</h2>
      </div>

      <div className={styles.search}>
        <input type="text" className={styles.input} placeholder="search..." />

        <button className={styles.btn}>
          <a href="">
            <i className={styles.i}>
              <FaSearch />
            </i>
          </a>
        </button>
      </div>

      <div className={styles.login}>
        <Link to="/headerHome">
          <button className={styles.btn}>HOME</button>
        </Link>
      </div>
    </header>
  );
}

export default HeaderHome;
