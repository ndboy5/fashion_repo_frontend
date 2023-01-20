import styles from "./carousel.module.css";
import { useEffect, useState } from "react";
import images from "../../data/caorusel_image_url_data.js";

function Carousel() {
  const imageUrl = images;

  const [imageNo, setImageNo] = useState(0);
  let image = imageUrl[imageNo];

  function onButtonClickHandler(imageNumber) {
    setImageNo(imageNumber);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setImageNo((imageNo) => {
        if (imageNo < 2) {
          return imageNo + 1;
        }
        return 0;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [imageNo]);

  return (
    <div className={styles.carousel}>
      <div className={styles.container}>
        <img src={image} alt="Fashion designers"></img>
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
