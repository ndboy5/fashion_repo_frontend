import styles from "./header.module.css";
import { FaSearch } from "react-icons/fa";

function Header() {
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
            {" "}
            <h3 className={styles.btn.i}>
              {" "}
              <FaSearch />{" "}
            </h3>
          </a>
        </button>
      </div>
    </header>
  );
}

export default Header;
