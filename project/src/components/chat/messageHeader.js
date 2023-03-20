import styles from "./messageHeader.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import BuyNowModal from "../market/buyNowModal";
import ProfilePic from "./profilePhoto";
function MessageHeader() {
  const [showBuynowModal, setShowBuynowModal] = useState(false);
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
          <h3>Name of Vendor</h3>
        </div>
      </div>
      <BuyNowModal
        setShowBuynowModal={setShowBuynowModal}
        onClose={() => setShowBuynowModal(false)}
        show={showBuynowModal}
      />
    </div>
  );
}

export default MessageHeader;
