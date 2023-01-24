import styles from "./gallery.module.css";
// import { HiArrowsExpand } from "react-icons/hi";
import { BiExpand } from "react-icons/bi";
import Modal from "../modal";
import { useState } from "react";

function Gallery() {
  const [show, setShow] = useState(false);
  return (
    <section className={styles.container}>
      <ul className={styles.imageGallery}>
        <li>
          <img src="/images/style-1.jpg" alt="" />
          <div className={styles.overlay}>
            <span>Image title</span>
            <button onClick={() => setShow(true)} className={styles.btn}>
              <i className={styles.i}>
                <BiExpand />
              </i>
            </button>
          </div>
        </li>
        <Modal onClose={() => setShow(false)} show={show} />

        {/* <li>
          <img src="/images/trend_style/pic_f.jpg" alt="" />
          <div className={styles.overlay}>
            <span>Image title</span>
            <button className={styles.btn}>
              <i className={styles.i}>
                <BiExpand />
              </i>
            </button>
          </div>
        </li>
        <li>
          <img src="/images/trend_style/pic_d.jpg" alt="" />
          <div className={styles.overlay}>
            <span>Image title</span>
            <button className={styles.btn}>
              <i className={styles.i}>
                <BiExpand />
              </i>
            </button>
          </div>
        </li>
        <li>
          <img src="/images/trend_style/pic_a.jpg" alt="" />
          <div className={styles.overlay}>
            <span>Image title</span>
            <button className={styles.btn}>
              <i className={styles.i}>
                <BiExpand />
              </i>
            </button>
          </div>
        </li>
        <li>
          <img src="/images/trend_style/pic_b.jpg" alt="" />
          <div className={styles.overlay}>
            <span>Image title</span>
            <button className={styles.btn}>
              <i className={styles.i}>
                <BiExpand />
              </i>
            </button>
          </div>
        </li>
        <li>
          <img src="/images/trend_style/pic_d.jpg" alt="" />
          <div className={styles.overlay}>
            <span>Image title</span>
            <button className={styles.btn}>
              <i className={styles.i}>
                <BiExpand />
              </i>
            </button>
          </div>
        </li>
        <li>
          <img src="/images/trend_style/pic_c.jpg" alt="" />
          <div className={styles.overlay}>
            <span>Image title</span>
            <button className={styles.btn}>
              <i className={styles.i}>
                <BiExpand />
              </i>
            </button>
          </div>
        </li>
        <li>
          <img src="/images/trend_style/pic_g.jpg" alt="" />
          <div className={styles.overlay}>
            <span>Image title</span>
            <button className={styles.btn}>
              <i className={styles.i}>
                <BiExpand />
              </i>
            </button>
          </div>
        </li>
        <li>
          <img src="/images/trend_style/pic_h.jpg" alt="" />
          <div className={styles.overlay}>
            <span>Image title</span>
            <button className={styles.btn}>
              <i className={styles.i}>
                <BiExpand />
              </i>
            </button>
          </div>
        </li>
        <li>
          <img src="/images/trend_style/pic_k.jpg" alt="" />
          <div className={styles.overlay}>
            <span>Image title</span>
            <button className={styles.btn}>
              <i className={styles.i}>
                <BiExpand />
              </i>
            </button>
          </div>
        </li>
        <li>
          <img src="/images/style-1.jpg" alt="" />
          <div className={styles.overlay}>
            <span>Image title</span>
            <button className={styles.btn}>
              <i className={styles.i}>
                <BiExpand />
              </i>
            </button>
          </div>
        </li>
        <li>
          <img src="/images/style-2.jpg" alt="" />
          <div className={styles.overlay}>
            <span>Image title</span>
            <button className={styles.btn}>
              <i className={styles.i}>
                <BiExpand />
              </i>
            </button>
          </div>
        </li>

        <li>
          <img src="/images/trend_style/pic_i.jpg" alt="" />
          <div className={styles.overlay}>
            <span>Image title</span>
            <button className={styles.btn}>
              <i className={styles.i}>
                <BiExpand />
              </i>
            </button>
          </div>
        </li> */}
      </ul>
    </section>
  );
}
export default Gallery;
