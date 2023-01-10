import styles from "./gallery.module.css";
import { HiArrowsExpand } from "react-icons/hi";
import { BiExpand } from "react-icons/bi";

function Gallery() {
  return (
    <section className={styles.container}>
      <section className={styles.headerTop}>
        <div className={styles.logo}>
          <img src="" alt="" />
          <h2>LOGO</h2>
        </div>
      </section>
      {/* <h2 class="heading-text">Responsive <span>image gallery</span></h2> */}
      <ul className={styles.imageGallery}>
        <li>
          <img src="/images/carousel/designer.jpg" alt="" />
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
          <img src="/images/trend_style/pic_e.jpg" alt="" />
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
          <img src="/images/carousel/designer.jpg" alt="" />
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
        </li>
      </ul>
    </section>
  );
}
export default Gallery;
