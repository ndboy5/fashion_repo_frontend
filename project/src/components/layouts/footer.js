import styles from "./footer.module.css";
function Footer() {
  return (
    <div className={styles.footerContainer}>
      <hr />
      <footer>
        <div className={styles.logo}>
          <a href="#">
            <img src="\images\shopLogo2.png" alt="logo" />
          </a>
        </div>
        <div className={styles.footerItems}>
          <ul>
            <a href="#">About</a>
            <a href="#">Contacts</a>
            <a href="#">Location</a>
          </ul>
        </div>

        <div className={styles.contactMedia}>
          <ul>
            <a href="">
              <img src="images/linkedin.png" alt="Linkedin" />
            </a>
            <a href="">
              <img src="images/instagram.png" alt="Linkedin" />
            </a>
            <a href="">
              <img src="images/whatsapp.png" alt="Linkedin" />
            </a>
            <a href="">
              <img src="images/twitter.png" alt="Linkedin" />
            </a>
          </ul>
        </div>
      </footer>
      <hr />
    </div>
  );
}

export default Footer;
