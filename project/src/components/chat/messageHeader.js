import styles from "./messageHeader.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import BuyNowModal from "../market/buyNowModal";
import ProfilePic from "./profilePhoto";
import CartModal from "../market/cartModal";
function MessageHeader({ username }) {
  const [showBuynowModal, setShowBuynowModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  return (
    <div className={styles.messageHeader}>
      <div className={styles.mesgTitle}>
        <button className={styles.btn} onClick={() => setShowBuynowModal(true)}>
          <i>
            <IoIosArrowBack />
          </i>
        </button>
        <div className={styles.sellerPhoto}>
          <ProfilePic />
          <h3>{username && username}</h3>
        </div>
        <div className={styles.messageChatLog}>
          <Link to="/chatContainer">
            <button>
              <p>Chat Log</p>
            </button>
          </Link>
        </div>
      </div>
      <BuyNowModal
        onClose={() => setShowBuynowModal(false)}
        show={showBuynowModal}
        setShowCartModal={setShowCartModal}
      />
      <CartModal onClose={() => setShowCartModal(false)} show={showCartModal} />
    </div>
  );
}

export default MessageHeader;
