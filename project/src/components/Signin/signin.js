import styles from "./signin.module.css";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
function SignIn() {
  return (
    <form className={styles.container}>
      <h3>LOGIN</h3>
      <div className={styles.signin}>
        <div className={styles.email}>Email</div>
        <input type="text" name="name" id="name"></input>
        <div className={styles.password}>Password</div>
        <input type="text" name="name" id="name"></input>
      </div>

      <div className={styles.checkbox}>
        <input type="checkbox"></input>
        <p>Remember me ?</p>
      </div>

      <button className={styles.btn}>LOGIN</button>

      <div className={styles.fp}>
        <a href="">
          <p>Forgot Password ?</p>
        </a>
      </div>

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
        <p>Need an account ?</p>
        <Link to="/signup">
          <a>SIGN UP</a>
        </Link>
      </div>
    </form>
  );
}
export default SignIn;
