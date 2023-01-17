import styles from "./measureInputField.module.css";
import { FaEdit } from "react-icons/fa";

function MeasureInputField(props) {
  const name = props.name;
  const value = props.value;
  const styleClass = props.styleClass;

  return (
    <div className={styles.main}>
      <span className={styleClass === "dark" ? styles.dark : styleClass}>
        {" "}
        {name}:{" "}
      </span>{" "}
      <span className={styleClass === "dark" ? styles.light : styleClass}>
        {" "}
        {value}{" "}
      </span>
      <i>
        <FaEdit />
      </i>
    </div>
  );
}

export default MeasureInputField;
