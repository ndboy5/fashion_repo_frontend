import styles from "./signup.module.css";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword:"",
    phone: "",
    role: "customer",
  });

  const handleValidation = () => {
    const { password, cpassword, firstname, lastname, email, phone } = values;
    if (password !== cpassword) {
      // toast.error(
      //   "Password and confirm password should be same.",
      //   toastOptions
      // );
      return false;
    } else if (firstname.length < 3 || lastname.length < 3) {
      // toast.error(
      //   "Username should be greater than 3 characters.",
      //   toastOptions
      // );
      return false;
    } else if (password.length < 8) {
      // toast.error(
      //   "Password should be equal or greater than 8 characters.",
      //   toastOptions
      // );
      return false;
    } else if (email === "") {
      // toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    
//Validate form entries before posting to server
if(handleValidation()){

    axios
      .post("http://localhost:5000/api/v1/auth/register", {
        ...credentials,
      })
      .then((response) => {
        //TODO: Determine where to store token recieved from server securely
        const { success, id, role, token, name } = response.data;

        if (success) {
          console.log(
            `welcome ${name}! Glad to have you here :). Your have an ${role} role and and your ID is ${id}`
          );
          //After login, navigate to the myHome page
          navigate("/myhome");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };

  return (
    <form onSubmit={handleSignUp} className={styles.container}>
      <h3>SIGN UP</h3>
      <div className={styles.signup}>
        <div>Firstname</div>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={credentials.firstname}
          onChange={handleInputChange}
        ></input>
        <div>Surname</div>
        <input
          type="text"
          name="surname"
          id="surname"
          value={credentials.surname}
          onChange={handleInputChange}
        ></input>
        <div>Phone</div>
        <input
          type="phone"
          name="phone"
          id="phone"
          value={credentials.phone}
          onChange={handleInputChange}
        ></input>
        <div className={styles.email}>Email</div>
        <input
          type="text"
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

          <div className={styles.password}>Confirm Password</div>
        <input
          type="password"
          name="cpassword"
          id="cpassword"
          value={credentials.cpassword}
          onChange={handleInputChange}
        ></input>
      </div>

      <button type="submit" className={styles.btn}>
        SIGN UP
      </button>
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
