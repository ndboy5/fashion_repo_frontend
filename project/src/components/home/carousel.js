import styles from "./carousel.module.css";
import { useState } from "react";

function Carousel() {
  const imageUrl = [
    "/images/carousel/sketches2.jpg",
    "/images/carousel/tailors.jpg",
    "/images/carousel/sketches.jpg",
  ];

  const [imageNo, setImageNo] = useState(0);
  let image = imageUrl[imageNo];

  function onButtonClickHandler(imageNumber) {
    setImageNo(imageNumber);
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.container}>
        <img src={image}></img>
        <div className={styles.btns}>
          <button
            className={styles.btn}
            onClick={() => onButtonClickHandler(0)}
          ></button>
          <button
            className={styles.btn}
            onClick={() => onButtonClickHandler(1)}
          ></button>
          <button
            className={styles.btn}
            onClick={() => onButtonClickHandler(2)}
          ></button>
        </div>
      </div>
    </div>
  );
}
export default Carousel;
