import styles from "./carousel.module.css";
// import images from "/sketches.jpg";
// console.log(images);
function Carousel() {
  return (
    <div className={styles.carousel}>
      <div className={styles.pics}>
        {/* return <img src={images} alt="sketches.jpg" />; */}
      </div>
      <div className={styles.pics}>
        <button className={styles.btn}>
          <p> Trending Topics Shows on</p>
          <h1>CLICK</h1>
        </button>
      </div>
      <div className={styles.pics}></div>
    </div>
  );
}
export default Carousel;
