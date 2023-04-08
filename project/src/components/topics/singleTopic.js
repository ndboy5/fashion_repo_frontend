import { useParams } from "react-router-dom";
import ChatMessage from "../chat/chatMessage";
import MessageHeader from "../chat/messageHeader";
import styles from "./singleTopic.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import PostColumn from "./postsColumn";

function SingleTopic() {
  const { id } = useParams();
  const [topic, setTopic] = useState({});

  useEffect(() => {
    //Get details from a single topic
    //TODO: optimise this get call to allow for smooth pagination. This would help for long topic threads
    axios
      .get("http://localhost:5000/api/v1/topics/" + id)
      .then((response) => {
        const { success, data } = response.data;
        if (success) {
          // load topic received from server
          setTopic(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmitPost = (message) => {
    console.log("It ran successfully " + message);

    //setup config for http header to server
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          "online-couturier-user-tk"
        )}`,
      },
    };
    //send the chat message to the server
    axios
      .post(
        "http://localhost:5000/api/v1/topics/post",
        {
          text: message,
          account: localStorage.getItem("online-couturier-user"),
          topic: topic._id,
          likes: 0,
          dislikes: 0,
        },
        config
      )
      .then((response) => {
        const { success, data } = response.data;

        if (success) {
          //update the posts on the post Column
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <MessageHeader
        username={localStorage.getItem("online-couturier-user-nm")}
      />

      <PostColumn posts={topic.posts} />
      <ChatMessage onMessageChange={handleSubmitPost} />
    </div>
  );
}

export default SingleTopic;
