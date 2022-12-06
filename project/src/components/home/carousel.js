import styles from "./carousel.module.css";
// import images from "/sketches.jpg";

// console.log(images);
function Carousel() {
  return (
    <div className={styles.carousel}>
      <div className={styles.container}>
        <img src="/images/carousel/sew.jpg"></img>
        <div className={styles.btns}>
          <button className={styles.btn}></button>
          <button className={styles.btn}></button>
          <button className={styles.btn}></button>
        </div>
      </div>
    </div>
  );
}
export default Carousel;
