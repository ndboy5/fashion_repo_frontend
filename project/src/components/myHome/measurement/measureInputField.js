import styles from "./measureInputField.module.css";
import { FaEdit } from "react-icons/fa";
import { redirect } from "react-router-dom";
import { useState } from "react";

function MeasureInputField(props) {
  const name = props.name;
  const value = props.value;
  const action_type = props.action_type;
  const isText = props.isText;
  const styleClass = props.styleClass;

  const [isEditMode, setIsEditMode] = useState(false);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsEditMode(false);
  };

  return (
    <div className={styles.main}>
      {isEditMode ? (
        <form onSubmit={handleOnSubmit}>
          <input
            className={styles.input}
            type={isText ? "text" : "number"}
            value={value}
            name={name}
            onChange={(e) => {
              props.handleChange(e, action_type);
            }}
          />
        </form>
      ) : (
        <div>
          <span className={styles.name}>{`${name}:`}</span>
          <span className={styles.value}> {value} </span>
          <i style={{ cursor: "pointer" }}>
            <FaEdit
              style={{ color: "#666666" }}
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
