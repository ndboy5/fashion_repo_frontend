import {BsFillPersonFill} from 'react-icons/bs';
import styles from './profileButton.module.css';
import { Link } from 'react-router-dom';
function ProfileButton(){
    return(
        <div className={StyleSheet.button}>
            <Link to="/userProfile">
                <button className={styles.button}>
                    <i>
                        <BsFillPersonFill/>
                    </i>
                </button>
            </Link>
        </div>
    );
}
export default ProfileButton;