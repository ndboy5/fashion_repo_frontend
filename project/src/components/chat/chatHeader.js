import styles from './chatHeader.module.css';
import {IoIosAdd, IoIosArrowBack, IoIosSearch} from 'react-icons/io';
import { FaChevronDown, FaInfo } from 'react-icons/fa';
function ChatHeader(){
    return(
        <div className={styles.container}>
            <button className={styles.btn}>
                <i>
                    <IoIosArrowBack/>
                </i>
            </button>

            <div className={styles.title}>
                <h3>
                    Sample chat forum
                    <button className={styles.headerIcon}>
                    <i><FaChevronDown/></i>
                </button>
                </h3>
                
            </div>

            <button className={styles.btn}>
                <i>
                    <IoIosSearch/>
                </i>
            </button>
        </div>
    );
}
export default ChatHeader;