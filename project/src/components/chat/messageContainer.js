import ChatMessage from "./chatMessage";
import MessageBody from "./messageBody";
import MessageHeader from "./messageHeader";
import styles from "./messageContainer.module.css";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../utils/userContext";
/**
 * This functional component is used for contacting either a vendor or another user. It handles one-on-one messaging between users;
 * typically customer to vendor relationships.
 * @returns
 */

function MessageContainer({ vendorID }) {
  vendorID = "5fa6a907b66f7a1403ac547e"; //TODO: Work on receiving the vendor'd ID as useParam from any component routing to the message container
  const { user, setUser } = useContext(UserContext);
  const [chat, setChat] = useState({});

  useEffect(() => {
    console.log(user.chatRooms);
    //check the user data from context to continue previous conversation with vendor or create new chat
    if (user) setChat(user.chatRooms.filter((cr) => cr.chatWith === vendorID));

    //Check to see that the previous chat was obtained from the user's details
    if (chat) {
      console.log("I was here too");
      console.log(chat);
      axios
        .get("http://localhost:5000/api/v1/chat/" + chat.chatRoomId)
        .then((response) => {
          const { success, data } = response.data;
          if (success) {
            // load chat details received from server
            setChat(data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // Create a new chat room and start new chat
      axios
        .post("http://localhost:5000/api/v1/chat", {
          from: user.id,
          to: vendorID,
        })
        .then((response) => {
          const { success, data } = response.data;

          if (success) {
            setChat({
              ...data,
              messages: [],
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  /**
   *
   * @param {*} message : The variable is the typed text entry on the chatMessage component.
   * This function handles submission to the server
   */
  const handleSubmitMessage = (message) => {
    //setup config for http header to server
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          "online-couturier-user-tk"
        )}`,
      },
    };

    console.log(chat.chatRoomId);
    //send the chat message to the server
    axios
      .post(
        "http://localhost:5000/api/v1/chat/message",
        {
          text: message,
          sender: localStorage.getItem("online-couturier-user"),
          chatRoom: chat.chatRoomId,
        },
        config
      )
      .then((response) => {
        const { success, data } = response.data;

        if (success) {
          //TODO: update the messages in message body component here
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.messages}>
      <MessageHeader />
      <MessageBody messages={chat.messages} />
      <ChatMessage onMessageChange={handleSubmitMessage} />
    </div>
  );
}

export default MessageContainer;
