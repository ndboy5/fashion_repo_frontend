import styles from "./measureInputField.module.css";
import { FaEdit } from "react-icons/fa";
import { redirect } from "react-router-dom";
import { useState } from "react";

function MeasureInputField(props) {
  const name = props.name;
  const value = props.value;
  const styleClass = props.styleClass;

  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <div className={styles.main}>
      {isEditMode ? (
        <div>
          <input
            type="number"
            value={value}
            onChange={(e) => {
              props.handleOnChangeMeasures(e);
            }}
          />
        </div>
      ) : (
        <div>
          <span className={styleClass ? styleClass : styles.dark}>
            {" "}
            {name}:{" "}
          </span>{" "}
          <span className={styleClass ? styleClass : styles.light}>
            {" "}
            {value}{" "}
          </span>
          <i>
            <FaEdit
              style={{ color: "#E2D1F9" }}
              size={15}
              onClick={(e) => {
                setIsEditMode(true);
              }}
            />
          </i>
        </div>
      )}
    </div>
  );
}

export default MeasureInputField;
