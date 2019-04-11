import React from 'react';
import '../../stylesheets/blocks/Button.css';

class Button extends React.Component {
  render() {
    return(
      <button
        onClick={this.props.handleClick}
        className={this.props.buttonClass}
        type={this.props.type}
      >
        <span>{this.props.buttonText}</span>
      </button>
    )
  }
}

export default Button;
