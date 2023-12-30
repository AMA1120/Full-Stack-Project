import React, { Component } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import "./Chat.css";
import Navbar from "../Navbar/Navbar";

const URL = "ws://localhost:4000";

class Chat extends Component {
  state = {
    username: "",
    messages: [],
    usernameSubmitted: false,
  };

  ws = new WebSocket(URL);

  componentDidMount() {
    this.ws.onopen = () => {
      console.log("connected");
    };

    // onmessage handler
    this.ws.onmessage = (evt) => {
      const messageString = evt.data;

      if (messageString.trim() !== "") {
        try {
          const message = JSON.parse(messageString);
          const currentTime = new Date();
          message.timestamp = currentTime.toLocaleTimeString();
          console.log("Received message:", message);
          this.addMessage(message);
        } catch (error) {
          console.error("Error parsing message:", error);
          console.log("Raw message:", messageString);
        }
      } else {
        console.log("Received an empty message.");
      }
    };
  }

  addMessage = (message) =>
    this.setState((state) => ({ messages: [...state.messages, message] }));




  submitUsername = (e) => {
    e.preventDefault();
    const { username } = this.state;
    if (username.trim() !== "") {
      this.setState({ usernameSubmitted: true });
    }
  };


  submitMessage = (messageString) => {
    const currentTime = new Date();
    const message = {
      name: this.state.username,
      message: messageString,
      timestamp: currentTime.toLocaleTimeString(),
    };
    this.ws.send(JSON.stringify(message));
    this.addMessage(message);
  };
  

  render() {
    if (!this.state.usernameSubmitted) {
      return (
        <div className="username-form">
          <form onSubmit={this.submitUsername}>
            <label htmlFor="username">
              Enter your username:&nbsp;
              <input
                type="text"
                id="username"
                placeholder="Enter your username..."
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }

    return (
      <div>
        <Navbar />
        <div className="fixed-chat">
          <div className="panel-chat">
            <div className="header-chat" style={{ backgroundColor: "#4caf50" }}>
              <div>
                <strong>Username:</strong> {this.state.username}
              </div>
            </div>
            <div className="body-chat">
              {this.state.messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  message={message.message}
                  name={message.name}
                  currentUser={this.state.username}
                  timestamp={message.timestamp}
                />
              ))}
            </div>
            <div className="message-chat">
              <div className="input-container">
                <ChatInput
                  ws={this.ws}
                  onSubmitMessage={(messageString) =>
                    this.submitMessage(messageString)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
