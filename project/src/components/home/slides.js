import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import styles from "./slides.module.css";
function Slides() {
  return (
    <div className={styles.slides}>
      <h4>TRENDING STYLES SLIDES</h4>
      <div className={styles.container}>
        <button className={styles.btn}>
          <i className={styles.i}>
            <FaRegArrowAltCircleLeft />
          </i>
        </button>
        <div className={styles.slide}> </div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <button className={styles.btn}>
          <i className={styles.i}>
            <FaRegArrowAltCircleRight />
          </i>
        </button>
      </div>
    </div>
  );
}
export default Slides;
