import styles from "./slides.module.css";
function Slides() {
  return (
    <div className={styles.slides}>
      <h4>SLIDES</h4>
      <div className={styles.container}>
        <div className={styles.slide}> </div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
      </div>
    </div>
  );
}
export default Slides;
