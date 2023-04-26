import styles from "./messageBody.module.css";
import ProfilePic from "./profilePhoto";
import { BsChatLeft, BsChatLeftFill, BsChatRightFill } from "react-icons/bs";
import MessageBoxLeft from "./messageBoxLeft";
import MessageBoxRight from "./messageBoxRight";
import { useMemo } from "react";

function MessageBody({ messages }) {
  //Get the current user's ID.
  //TODO: a better solution may be to get the  user ID from context
  const currentUserId = useMemo(() => {
    return localStorage.getItem("online-couturier-user");
  }, []);

  return (
    <div className={styles.messageBody}>
      {messages &&
        messages.map((m) => (
          <div>
            <div className={styles.userPic}>
              <ProfilePic />
            </div>
            {m.sender === currentUserId ? (
              <div className={styles.iconleft}>
                <MessageBoxLeft text={m.text} />
              </div>
            ) : (
              <div className={styles.iconright}>
                <MessageBoxRight text={m.text} />
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default MessageBody;
