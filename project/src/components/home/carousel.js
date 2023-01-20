import styles from "./carousel.module.css";
import { useEffect, useState } from "react";

function Carousel() {
  const imageUrl = [
    "/images/carousel/designer3.jpg",
    "/images/carousel/tailors.jpg",
    "/images/carousel/designer5.jpg",
  ];

  const [counter, setCounter] = useState(0);

  const [imageNo, setImageNo] = useState(0);
  let image = imageUrl[imageNo];

  function onButtonClickHandler(imageNumber) {
    setImageNo(imageNumber);
  }

  useEffect((t) => {
    setInterval((t) => setCounter(counter + 1), 3000);
  }, []);

  return (
    <div className={styles.carousel}>
      <span>{`Counter: `}</span>
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
