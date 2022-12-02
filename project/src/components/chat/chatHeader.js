import styles from './chatHeader.module.css';
import {IoIosAdd, IoIosSearch} from 'react-icons/io';
import { FaChevronDown, FaInfo } from 'react-icons/fa';
function ChatHeader(){
    return(
        <div className={styles.container}>
            <button className={styles.btn}>
                <i>
                    <IoIosAdd/>
                </i>
            </button>

            <div className={styles.title}>
                <h3>Sample chat forum</h3>
                <button>
                    <i><FaChevronDown/></i>
                </button>
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