import styles from "./footer.module.css";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
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
      </footer>
      <hr />
    </div>
  );
}

export default Footer;
