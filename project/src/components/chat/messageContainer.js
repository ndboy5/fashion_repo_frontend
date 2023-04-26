import ChatMessage from "./chatMessage";
import MessageBody from "./messageBody";
import MessageHeader from "./messageHeader";
import styles from "./messageContainer.module.css";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../utils/userContext";
import { useNavigate } from "react-router-dom";
/**
 * This functional component is used for contacting either a vendor or another user. It handles one-on-one messaging between users;
 * typically customer to vendor relationships.
 * @returns
 */

function MessageContainer({ vendorID }) {
  vendorID = "5fa6a907b66f7a1403ac547e"; //TODO: Work on receiving the vendor'd ID as useParam from any component routing to the message container
  const { user, setUser } = useContext(UserContext);
  const [chat, setChat] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    //check the user data from context to continue previous conversation with vendor or create new chat
    if (user) {
      //Find details of the chat room with the vendor/user
      let existingChat = user.chatRooms.find((cr) => cr.chatWith === vendorID);
      setChat(existingChat);
      //Check to see that the previous chat was obtained from the user's details
      if (chat.chatRoomId) {
        let id = chat.chatRoomId;
        axios
          .get("http://localhost:5000/api/v1/chat/" + id)
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
        // Create a new chat room and start chat with vendor in new room
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
    } else {
      console.log("You need to login first to send messages to vendor");
      //TODO: communicate to the user the need to login first
      navigate("/signin");
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
    console.log(chat);

    console.log("The chat room ID is " + chat._id);
    //send the chat message to the server
    axios
      .post(
        "http://localhost:5000/api/v1/chat/message",
        {
          text: message,
          sender: localStorage.getItem("online-couturier-user"),
          receiver: vendorID,
          chatRoom: chat._id ? chat._id : chat.chatRoomId,
        },
        config
      )
      .then((response) => {
        const { success, data } = response.data;

        if (success) {
          //TODO: update the messages in message body component here

          setChat(() => {
            return { ...chat, messages: chat.messages.push(data) };
          });
          console.log(chat);
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
