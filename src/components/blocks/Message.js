import React from 'react';
import '../../stylesheets/blocks/Message.css';

class Message extends React.Component {
  render() {
    return (
      <div className="message-container">
        <span className={this.props.messageClass}>{this.props.message}</span>
      </div>
    )
  }
}

export default Message;
