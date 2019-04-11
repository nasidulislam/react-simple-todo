import React from 'react';
import '../stylesheets/FrontDoor.css';

class FrontDoor extends React.Component {
  goToTaskList = (event) => {
    event.preventDefault();
    const userName = this.userNameInput.current.value;
		this.props.history.push(`/user/${userName}`);
  }

  userNameInput = React.createRef();

  render() {
    return (
      <form className="front-door" onSubmit={this.goToTaskList}>
        <div className="front-door__header-container">
          <h1>Welcome !</h1>
          <h3 className="frontdoor-header-subtext">Please enter a username</h3>
        </div>

        <div className="front-door__input-container">
          <input
            required
            className="username-input"
            type="text"
            name="username"
            ref={this.userNameInput}
            placeholder="Username"
          />

          <button
            className="username-submit-button button primary-button"
            type="submit">
              Submit
          </button>
        </div>

      </form>
    )
  }
}

export default FrontDoor;
