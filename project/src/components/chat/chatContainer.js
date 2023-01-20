import React from "react";
import styles from "./chatContainer.module.css";
import ChatBody from "./chatBody";
import ChatHeader from "./chatHeader";
import ChatMessage from "./chatMessage";

class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
    };
    this.changeMessage = this.changeMessage.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  changeMessage(message) {
    // event.preventDefault();

    this.setState({
      message: [...this.state.message, message],
      // message: "Test",
    });
  }

  onButtonClick(event) {
    event.preventDefault();
    console.log("Button clicked...");
    //TODO: @Chima I beleive your intent is to do something with the message, you can do that here
  }

  render() {
    return (
      <div className={styles.container}>
        <ChatHeader />
        <ChatBody message={this.state.message} />
        <ChatMessage
          onMessageChange={this.changeMessage}
          onButtonClick={this.onButtonClick}
        />
      </div>
    );
  }
}
export default ChatContainer;
