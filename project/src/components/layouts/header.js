import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="" alt="" />
        <h2>LOGO</h2>
      </div>
      <div className={styles.search}>
        <input type="text" className={styles.input} placeholder="search..." />
        <button>
          <a href="">
            {" "}
            <i class="fa fa-search"></i>
          </a>
        </button>
      </div>
    </header>
  );
}

export default Header;
