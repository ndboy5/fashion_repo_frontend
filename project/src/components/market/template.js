import { FaPersonBooth } from "react-icons/fa";
import {
  BsCart,
  BsFillPersonXFill,
  BsHeart,
  BsPerson,
  BsSearch,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./template.module.css";
import { useState } from "react";
import CartModal from "../cartModal";

function Market() {
  // This useTate is declared for the modal
  const [show, setShow] = useState(false);
  return (
    <section className={styles.container}>
      <section className={styles.headerBar}>
        <div className={styles.barLeft}>
          <a href="#" className={styles.a}>
            <i className={styles.i}>
              <BsPerson />
            </i>
          </a>

          <div className={styles.sideline}></div>
          <a href="#" className={styles.a}>
            <i className={styles.i}>
              <BsHeart />
            </i>
          </a>
          <div className={styles.sideline}></div>
        </div>

        <div className={styles.barRight}>
          <div className={styles.sideline}></div>
          <a href="#" className={styles.a}>
            <i className={styles.i}>
              <BsSearch />
            </i>
          </a>
          <div className={styles.sideline}></div>
          <a href="#" onClick={() => setShow(true)} className={styles.a}>
            <i className={styles.i}>
              <BsCart />
            </i>
          </a>
        </div>
      </section>

      <div className={styles.products}>
        <div className={styles.product}>
          <h3>IMAGE</h3>
        </div>

        <div className={styles.pricetag}>
          <div className={styles.name}>Name of item</div>
          <div className={styles.price}>Price</div>

          <Link to="/">
            <button className={styles.btn}>
              <div className={styles.addCart}>
                <h6>View More</h6>
              </div>
            </button>
          </Link>
        </div>
      </div>

      <CartModal onClose={() => setShow(false)} show={show} />
    </section>
  );
}

export default Market;
