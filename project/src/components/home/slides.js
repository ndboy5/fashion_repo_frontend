import { useState } from "react";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import styles from "./slides.module.css";

/**
 *
 * @param {*} props Receives the slide image url from the Home component.
 * This slide is for the Trend Styles component
 * TODO: Review image adjustment styling on the slide class
 * @returns
 */
function Slides(props) {
  const [pos, setPosition] = useState([0, 1, 2, 3]);
  // 4 element array used to show four pics. This must be changed if the number of showing pics changes
  const [currIndex, setCurrIndex] = useState(0);

  const slides = props.slides;

  //This method is activated when the user clicks the next button on the slider
  const gotoNext = () => {
    let newPos = [];
    let index = currIndex + 1;
    let numOfPics = slides.length;

    //load the next set of 4 pics (see pos useState)
    for (let i = 0; i < pos.length; i++) {
      if (index < numOfPics) {
        newPos.push(index++);
      } else {
        index = 0;
        newPos.push(index);
        index++;
      }
    }
    // console.log(newPos);
    // console.log("current index is " + currIndex);

    // change the current index position for next click
    currIndex < numOfPics - 1 ? setCurrIndex(currIndex + 1) : setCurrIndex(0);
    setPosition(newPos);
  };

  //This method is activated when the user clicks the back button on the slider
  const goToPrevious = () => {
    let newPos = [];
    let numOfPics = slides.length;
    let index = currIndex - 1;

    if (currIndex === 0) {
      index = numOfPics - 1;
    }
    setCurrIndex(index);

    for (let i = 0; i < pos.length; i++) {
      if (index < numOfPics) {
        newPos.push(index++);
      } else {
        index = 0;
        newPos.push(index);
        index++;
      }
    }
    // console.log(newPos);
    // console.log("current index is " + currIndex);

    setPosition(newPos);
  };

  return (
    <div className={styles.slides}>
      {/* TODO: Style this tag */}
      <h4>TRENDING STYLES SLIDES</h4>

      <div className={styles.container}>
        <button className={styles.btn} onClick={goToPrevious}>
          <i className={styles.i}>
            <FaRegArrowAltCircleLeft />
          </i>
        </button>
        <div
          style={{ backgroundImage: `url(${slides[pos[0]].url})` }}
          className={styles.slide}
        >
          {" "}
        </div>
        <div
          style={{ backgroundImage: `url(${slides[pos[1]].url})` }}
          className={styles.slide}
        >
          {" "}
        </div>
        <div
          style={{ backgroundImage: `url(${slides[pos[2]].url})` }}
          className={styles.slide}
        >
          {" "}
        </div>
        <div
          style={{ backgroundImage: `url(${slides[pos[3]].url})` }}
          className={styles.slide}
        >
          {" "}
        </div>
        <button className={styles.btn} onClick={gotoNext}>
          <i className={styles.i}>
            <FaRegArrowAltCircleRight />
          </i>
        </button>
      </div>
    </div>
  );
}
export default Slides;
