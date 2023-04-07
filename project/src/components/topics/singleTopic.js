import { useParams } from "react-router-dom"
import ChatMessage from "../chat/chatMessage"
import MessageHeader from "../chat/messageHeader"
import styles from "./singleTopic.module.css"
import { useState, useEffect } from "react";
import axios from "axios";



function SingleTopic(){
    const {id} = useParams();
    console.log(`the id is ${id}`)
    const [topic, setTopic] = useState({})

    useEffect(() => {
        //setup config for http header to server
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "online-couturier-user"
            )}`,
          }, 
        };
        //Get trending topics from the server
        //TODO: filter on server side to receive only the top 50 trending topics
        axios
          .get("http://localhost:5000/api/v1/topics/"+id)
          .then((response) => {
           // const { success, data } = response.data;
   console.log(response.data) 
            if (success) {
              // load topics received from server
              setTopic(data);
              console.log(topic)
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }, [id]);
    
    return (
        <div>
        <MessageHeader />

        <ChatMessage />
        </div>
    )
}

export default SingleTopic;