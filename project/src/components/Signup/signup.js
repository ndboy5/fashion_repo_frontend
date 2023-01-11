import styles from "./signup.module.css";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <form className={styles.container}>
      <h3>SIGN UP</h3>
      <div className={styles.signup}>
        <div className={styles.email}>Email</div>
        <input type="text" name="name" id="name"></input>
        <div className={styles.password}>Password</div>
        <input type="text" name="name" id="name"></input>
      </div>

      <button className={styles.btn}>SIGN UP</button>
      <div className={styles.linecontainer}>
        <div className={styles.line}></div>
        <div className={styles.square}>
          <h5>OR</h5>
        </div>
      </div>
      <div className={styles.icons}>
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
            <FaTwitter />
          </i>
        </a>
      </div>

      <div className={styles.reminder}>
        <p>Already a user ?</p>
        <Link to="/signin">
          <a>LOGIN</a>
        </Link>
      </div>
    </form>
  );
}
export default SignUp;
