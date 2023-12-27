
import React, { Component } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

const URL = 'ws://localhost:5000'; // Update with your WebSocket server URL

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Ichlas',
      messages: [],
      ws: new WebSocket(URL),
    };
  }

  componentDidMount() {
    const { ws } = this.state;

    ws.onopen = () => {
      console.log('connected');
    };

    ws.onmessage = (evt) => {
      if (typeof evt.data === 'string') {
        const message = JSON.parse(evt.data);
        this.addMessage(message);
      }
    };

    ws.onclose = () => {
      console.log('disconnected');
      this.setState({
        ws: new WebSocket(URL),
      });
    };
  }

  addMessage = (message) =>
    this.setState((state) => ({ messages: [message, ...state.messages] }));

  submitMessage = (messageString) => {
    const { ws, name } = this.state;
    const message = { name, message: messageString };
    ws.send(JSON.stringify(message));
    this.addMessage(message);
  };

  render() {
    return (
        <div>
        <div class="fixed-chat">
          <div class="panel-chat">
            <div class="header-chat">
              <label htmlFor="name">
                Name:&nbsp;
                <input
                  type="text"
                  id={'name'}
                  placeholder={'Enter your name...'}
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </label>
            </div>
            <div class="body-chat">
              {this.state.messages.map((message, index) =>
                <ChatMessage
                  key={index}
                  message={message.message}
                  name={message.name}
                />,
              )}
            </div>
            <div class="message-chat">
              <ChatInput
                ws={this.ws}
                onSubmitMessage={messageString => this.submitMessage(messageString)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
