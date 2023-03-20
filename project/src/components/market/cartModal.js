import styles from "./cartModal.module.css";
import { TfiClose } from "react-icons/tfi";
import { FaArrowLeft, FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function CartModal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div
      className={styles.modal}
      //  modal closes on clicking anywhere on the modal.
      onClick={props.onClose}
    >
      <div className={styles.modal.body}>
        <div className={styles.cart}>
          <button onClick={props.onClose} className={styles.btn}>
            <i className={styles.i}>
              <TfiClose />
            </i>
          </button>
          <h1>Your Cart</h1>
          <div className={styles.title}>
            <div>
              <h3>PRODUCT</h3>
            </div>
            <div>
              <h3>TOTAL</h3>
            </div>
          </div>
          <hr />
          <div className={styles.info}>
            <div className={styles.pics}>
              <img src="images/style-2.jpg" alt="dress"></img>
            </div>
            <div className={styles.detail}>
              <div className={styles.detailName}>
                <h5>Ankara Ready to wear Dress</h5>
              </div>
              <div className={styles.detailName}>
                <h5>#12,000</h5>
              </div>
            </div>
            <div className={styles.amount}>
              <h5>#12,000</h5>
            </div>
          </div>
          <div className={styles.counter}>
            <div className={styles.count}>
              <div className={styles.minus}>
                <i>
                  <FaMinus />
                </i>
              </div>
              <div className={styles.num}>1</div>
              <div className={styles.plus}>
                {" "}
                <i>
                  <FaPlus />
                </i>
              </div>
            </div>
            <i>
              <FaTrashAlt />
            </i>
          </div>
          <div className={styles.sub}></div>
          <div className={styles.subTotal}>
            <div>
              <h3>Subtotal</h3>
            </div>
            <div>
              <h3>Amount</h3>
            </div>
          </div>
          <div className={styles.checkout}>
            <Link to="/order">
              <button className={styles.button}>
                <h3>Checkout</h3>
              </button>
            </Link>
          </div>

          <Link to="/market">
            <button className={styles.cartBackBtn}>
              <p>Continue shoping</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CartModal;
