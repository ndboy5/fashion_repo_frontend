import Header from "../layouts/header";
import styles from "./gallery.module.css";
function Gallery() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Header />
        <div className={styles.box1}>
          <img src="/images/trend_style/pic_a.jpg"></img>
        </div>
        <div className={styles.box2}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
      </div>
    </div>
  );
}
export default Gallery;
