import styles from "./signin.module.css";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../utils/userContext";

function SignIn() {
  const { user, setUser } = useContext(UserContext);
  // TODO: Setup toast options
  // https://www.youtube.com/watch?v=otaQKODEUFs&t=4009s

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  //allow user to automatically navigate to home if already signed in
  useEffect(() => {
    if (localStorage.getItem("online-couturier-user")) {
      navigate("/myhome");
    }
  }, []); //empty dependency array to make it run only once

  // handle input change
  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/auth/login", {
        //TODO: encrypt the submission
        email: credentials.email,
        password: credentials.password,
      })
      .then((response) => {
        const { success, id, token, name } = response.data;

        if (success) {
          //Save token and user id to local storage in case the browser is refreshed
          localStorage.setItem("online-couturier-user-tk", token); //TODO: Encrypt the token for security reasons
          localStorage.setItem("online-couturier-user", id);
          localStorage.setItem("online-couturier-user-nm", name);

          //make the user details available to other routes by updating the user context
          setUser(response.data);

          //After login, navigate to the myHome page
          navigate("/myhome");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form className={styles.container} onSubmit={handleLogin}>
      <h3>LOGIN</h3>
      <div className={styles.signin}>
        <div className={styles.email}>Email</div>
        <input
          type="email"
          name="email"
          id="email"
          value={credentials.email}
          onChange={handleInputChange}
        ></input>
        <div className={styles.password}>Password</div>
        <input
          type="password"
          name="password"
          id="password"
          value={credentials.password}
          onChange={handleInputChange}
        ></input>
      </div>

      <div className={styles.checkbox}>
        <input type="checkbox"></input>
        <p>Remember me ?</p>
      </div>

      <button type="submit" className={styles.btn}>
        LOGIN
      </button>

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
