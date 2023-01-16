import styles from "./measureInputField.module.css";
import { FaEdit } from "react-icons/fa";

function MeasureInputField(props) {
  const name = props.name;
  const value = props.value;
  const detail_content = props.detail_section;

  return (
    <div className={styles.main}>
      <span className={detail_content ? styles.dark : styles.light}>
        {" "}
        {name}:{" "}
      </span>{" "}
      <span className={detail_content ? styles.light : styles.dark}>
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
