import { useState } from "react";
import styles from "./editDetails.module.css";

function EditDetails({context, handleEdit, show}){
    const[detail, detailChanged] = useState();
    function changeDetails(event){
        detailChanged(event.target.value)
    }
    if(show == false){
        return null
    }
    return(
        <section className={styles.edit}>
            <div className={styles.label}>
                {context}
            </div>
            <div>
                <input type={context == "Email" ? "email": "text"} onChange={changeDetails}/>
            </div>
            <div className={styles.changeButton}>
                <button onClick={()=> handleEdit(context, detail)}>Change</button>
            </div>
            
        </section>
    );
}
export default EditDetails;