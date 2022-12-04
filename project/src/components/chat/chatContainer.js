import React from "react";
import ChatBody from "./chatBody";
import ChatHeader from "./chatHeader";
import ChatMessage from "./chatMessage";

class ChatContainer extends React.Component{
    message = "";

    constructor(props){
        super(props)
        this.state = {
            message: "",
        }
        this.changeMessage = this.changeMessage.bind(this)
    }
    changeMessage(newMessage){
        this.setState({
            message: newMessage
        });
    }
    render(){
        function showMessage(newMessage){
            return(
                <div>
                    {newMessage}
                </div>
            );
        }
        return(
            <div>
                <ChatHeader/>
                <ChatBody showMessage = {showMessage(this.state.message)}/>
                <ChatMessage onMessageChange = {this.changeMessage}/>
            </div>
        );
    }
}
export default ChatContainer;