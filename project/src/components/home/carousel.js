import styles from "./carousel.module.css";
// import images from "/sketches.jpg";

// console.log(images);
function Carousel() {
  return (
    <div className={styles.carousel}>
      <div className={styles.btns}>
        <button className={styles.btn}></button>
        <button className={styles.btn}></button>
        <button className={styles.btn}></button>
      </div>
    </div>
  );
}
export default Carousel;
