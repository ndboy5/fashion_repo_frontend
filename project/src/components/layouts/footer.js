import styles from "./footer.module.css";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerItems}>
        <ul>
          <a href="#">About</a>
          <a href="#">Contacts</a>
          <a href="#">Location</a>
        </ul>
        <p>Copy &copy; 2022</p>
        <div className={styles.contactMedia}>
          <ul>
            <a href="">
              <i className={styles.i}>
                <FaLinkedinIn />
              </i>
            </a>

            <a href="">
              <i className={styles.i}>
                <FaInstagram />
              </i>
            </a>

            <a href="">
              <i className={styles.i}>
                <FaWhatsapp />
              </i>
            </a>

            <a href="">
              <i className={styles.i}>
                <FaTwitter />
              </i>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
