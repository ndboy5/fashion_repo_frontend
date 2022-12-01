import { useState } from "react";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import styles from "./slides.module.css";

function Slides(props) {

  const [pos, setPosition] = useState([0,1,2,3])
  const [currIndex, setCurrIndex] = useState(0);

  const slides = props.slides;

  

  const gotoNext = ()=>{
    let newPos = [];
    let index = currIndex+1;
    let numOfPics = slides.length;

    for(let i=0; i< pos.length; i++){
      if(index < numOfPics) {newPos.push(index++);}
      else {index = 0; newPos.push(index); index++}
    }
      console.log(newPos);
      console.log("current index is " + currIndex)
      
      currIndex < numOfPics -1 ? setCurrIndex(currIndex+1) : setCurrIndex(0);
      setPosition(newPos);
  }

  const goToPrevious =()=>{
    let newPos = [];
    let numOfPics = slides.length;
    let index = currIndex-1;

    if(currIndex===0){
      index = numOfPics - 1;
    }
      setCurrIndex(index);

    for(let i=0; i< pos.length; i++){
      if(index <numOfPics) {newPos.push(index++);}
      else {index = 0; newPos.push(index); index++}
    }
      console.log(newPos);
      console.log("current index is " + currIndex)
      
      setPosition(newPos);
  }


  return (
    <div className={styles.slides}>
      <h4>TRENDING STYLES SLIDES</h4>
      
      <div className={styles.container}>
        <button className={styles.btn} onClick={goToPrevious}>
          <i className={styles.i}>
            <FaRegArrowAltCircleLeft />
          </i>
        </button>
        <div style={{backgroundImage: `url(${slides[pos[0]].url})`}} className={styles.slide}> </div>
        <div style={{backgroundImage: `url(${slides[pos[1]].url})`}} className={styles.slide}> </div>
        <div style={{backgroundImage: `url(${slides[pos[2]].url})`}} className={styles.slide}> </div>
        <div style={{backgroundImage: `url(${slides[pos[3]].url})`}} className={styles.slide}> </div>
        <button className={styles.btn} onClick={gotoNext} >
          <i className={styles.i}>
            <FaRegArrowAltCircleRight />
          </i>
        </button>
      </div>
    </div>
  );
}
export default Slides;
