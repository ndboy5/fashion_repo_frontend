import styles from "./modal.module.css";
import { BiX } from "react-icons/bi";

function Modal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div
      className={styles.modal}
      //  modal closes on clicking anywhere on the modal.
      onClick={props.onClose}
    >
      <div className={styles.modal.body}>
        {" "}
        <img src="/images/style-1.jpg" alt="" />
      </div>
      <button onClick={props.onClose} className={styles.btn}>
        <i className={styles.i}>
          <BiX />
        </i>
      </button>
    </div>
  );
}
export default Modal;
