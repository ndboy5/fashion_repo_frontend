import styles from "./header.module.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <i className={styles.i}>
              <FaSearch />
            </i>
          </a>
        </button>
      </div>

      <div className={styles.login}>
        <Link to="/signin">
          <button className={styles.btn}>LOGIN</button>
        </Link>
        <Link to="/signup">
          <button className={styles.btn}>SIGN UP</button>
        </Link>
      </div>
    </header>
  );
}
// const search = document.querySelector(".search");
// const btn = document.querySelector(".btn");
// const input = document.querySelector(".input");

// btn.addEventListener("click", () => {
//   search.classList.toggle("active");
//   input.focus();
// });

export default Header;
