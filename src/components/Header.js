import React from 'react';
import '../stylesheets/Header.css';

class Header extends React.Component {
  render() {
    return(
      <div className="app-header-container">
        <div className="header-and-username">
          <img src="https://i.imgur.com/uKsmaHI.png" alt="logo" className="app-logo" />

          <span className="username-message">Welcome {(this.props.username).toUpperCase()}</span>
        </div>
      </div>
    )
  }
}

export default Header;
