import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class MessageList extends Component {
  // componentWillUpdate() {
  //       const node = ReactDOM.findDOMNode(this);
  //       this.shouldScrollToBottom = node.scrollTop + node.clientHeight >= node.scrollHeight;
  //   }

  //   componentDidUpdate() {
  //       if(this.shouldScrollToBottom) {
  //           const node = ReactDOM.findDOMNode(this);
  //           node.scrollTop = node.scrollHeight;
  //       }
  //   }

  render() {
    return (
      <div className="message-list">
        <ul>
          {this.props.messages.map((message, index) => (
            <li key={index}>
              <div className="message">
                <div className="message-username">{message.senderId}</div>
                <div className="message-text">{message.text}</div>
              </div>  
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MessageList;
