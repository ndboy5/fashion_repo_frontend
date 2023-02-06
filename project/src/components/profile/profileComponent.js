import { useState } from "react";
import EditDetails from "./editDetails";
import styles from './profileComponent.module.css';

function ProfileComponent(){
    let url = null;
    const [userName, changeName] = useState("Jack John");
    const [userEmail, changeEmail] = useState("jackjohn@example.com");
    const [editContext, setContext] = useState("");
    const [showValue, changeShow] = useState(false);

    function changeDetails(context, newDetail){
        switch(context){
            case "Email": {changeEmail(newDetail)}
            break;
            case "Name": {changeName(newDetail)}
        }
        changeShow(false);
    }

    function emailChange(){
        setContext("Email");
        changeShow(true);
    }

    function nameChange(){
        setContext("Name");
        changeShow(true)
    }

    
    return(
        <section className={styles.container}>
            <div className={styles.subContainer}>
                <h3 className={styles.label}>Profile Photo</h3>
                <div className={styles.profileImage}>
                    <div className={styles.userImage}>
                        U
                    </div>
                    <div className={styles.buttons}>
                        <button>
                            Change photo
                        </button>
                        <button>
                            Remove Photo
                        </button>
                    </div>
                </div>
                <h3 className={styles.label}>Name</h3>
                <div className={styles.profileName}>
                    
                    <div className={styles.userDetails}>
                        <div className={styles.input}>
                            {userName}
                        </div>

                        <div className={styles.buttons}>
                        <button onClick={nameChange}>
                            Edit
                        </button>
                    </div>
                    </div>
                    
                </div>
                <h3 className={styles.label}>Email</h3>
                <div className={styles.profileEmail}>
                    
                    <div className={styles.userDetails}>
                        <div className={styles.input}>
                            {userEmail}
                        </div>

                        <div className={styles.buttons}>
                            <button onClick={emailChange}>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
                <EditDetails context={editContext} handleEdit = {changeDetails} show={showValue}/>
            </div>
            
        </section>
    );
}

export default ProfileComponent;