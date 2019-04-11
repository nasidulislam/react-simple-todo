import React from 'react';
import '../stylesheets/CompletedTask.css';

class CompletedTask extends React.Component {
  render() {
    return(
      <li className="completed-task-item">
        <div>Task: {this.props.taskName.name}</div>
        <div>Completed by: {this.props.taskName.completeBy}</div>
      </li>
    )
  }
}

export default CompletedTask;
