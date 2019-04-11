import React from 'react';
import '../../stylesheets/blocks/InputField.css'

class InputField extends React.Component {
  render() {
    return (
      <input
        type={this.props.type}
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.handleChange}
        ref={this.ref}
      />
    )
  }
}

export default InputField;
