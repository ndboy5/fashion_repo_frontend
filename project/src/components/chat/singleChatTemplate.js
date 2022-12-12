import {AiTwotoneDislike, AiTwotoneLike} from 'react-icons/ai'
import { FaCopy, FaReply } from 'react-icons/fa';
import {MdDelete} from 'react-icons/md'
import styles from './singleChatTemplate.module.css';

function SingleChatTemplate(props){
    return(
        <div className={styles.container}>
            <div className={styles.message}>
                {props.singleMessage}
            </div>
            <div className={styles.icons}>
                <button>
                    <i><AiTwotoneLike/></i>
                </button>
                <button>
                    <i><AiTwotoneDislike/></i>
                </button>
                <button>
                    <i><FaReply/></i>
                </button>
                <button>
                    <i><FaCopy/></i>
                </button>
                <button>
                    <i><MdDelete/></i>
                </button>
            </div>
        </div>
    );
}
export default SingleChatTemplate;