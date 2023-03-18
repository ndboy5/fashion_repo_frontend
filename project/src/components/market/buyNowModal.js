import styles from "./buyNowModal.module.css";
import { TfiClose } from "react-icons/tfi";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
function BuyNowModal(props) {
  if (!props.open) {
    return null;
  }
  return (
    <div
      className={styles.modal}
      //  modal closes on clicking anywhere on the modal
      // onClick={props.onClose}
    >
      <div className={styles.modal.body}>
        <div className={styles.buy}>
          <i onClick={props.onClose} className={styles.i}>
            <TfiClose />
          </i>
          <div className={styles.pic}>
            <img src="images/style-2.jpg" alt="dress"></img>
          </div>
          <div className={styles.item}>
            <h1>Ankara Ready to wear dress</h1>
            <h3>£12</h3>
            <h5>Quantity</h5>
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
            <div className={styles.mesBuyer}>
              <Link to="/messageContainer">
                <h3>Message Buyer</h3>
              </Link>
            </div>
          </div>

          <Link to="/cartModal">
            <button className={styles.buyNow}>
              <h3>Buy Now</h3>
            </button>
          </Link>
          <button className={styles.addCart}>
            <h3>Add to cart</h3>
          </button>
        </div>
      </div>
    </div>
  );
}
export default BuyNowModal;
