import { FaPersonBooth } from "react-icons/fa";
import { BsCart, BsHeart, BsPerson, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./market.module.css";
import { useState } from "react";
import CartModal from "./cartModal";
import BuyNowModal from "./buyNowModal";

function Market() {
  let url = null;
  // This useState is declared for the modal
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
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

          <button onClick={() => setOpen(true)} className={styles.btn}>
            <div className={styles.addCart}>
              <h6>View More</h6>
            </div>
          </button>
        </div>
      </div>

      <CartModal onClose={() => setShow(false)} show={show} />
      {/* <BuyNowModal onClose={() => setOpen(false)} open={open} /> */}
      <BuyNowModal onClose={() => setOpen(false)} open={open} />
    </section>
  );
}

export default Market;
