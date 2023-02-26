import styles from "./galleryModal.module.css";
import { TfiClose } from "react-icons/tfi";

function GalleryModal(props) {
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
          <TfiClose />
        </i>
      </button>
    </div>
  );
}
export default GalleryModal;
