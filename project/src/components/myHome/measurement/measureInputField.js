import styles from "./measureInputField.module.css";
import { FaEdit } from "react-icons/fa";
import { redirect } from "react-router-dom";

function MeasureInputField(props) {
  const name = props.name;
  const value = props.value;
  const styleClass = props.styleClass;

  return (
    <div className={styles.main}>
      <span className={styleClass ? styleClass : styles.dark}> {name}: </span>{" "}
      <span className={styleClass ? styleClass : styles.light}> {value} </span>
      <i>
        <FaEdit style={{ color: "#E2D1F9" }} size={15} />
      </i>
    </div>
  );
}

export default MeasureInputField;
