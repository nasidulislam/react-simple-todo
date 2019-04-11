import React from 'react';
import '../stylesheets/TaskItem.css'

// component imports
import Button from './blocks/Button';

class TaskItem extends React.Component {
  removeTaskBuffer = () => {
    const props = this.props;
    props.removeTask(props.index);
  }

  completeTaskBuffer = () => {
    const props = this.props;

    this.removeTaskBuffer();
    props.completeTask(props.index, props.task);
  }

  render() {
    return(
      <div className="list-item-container">
        <div className="list-item">
          <span className="list-item-name">
            {this.props.task.name}
          </span>
          <span className="list-item-deadline">
            Complete By: {this.props.task.completeBy}
          </span>
        </div>
        <div className="cta-container">
          <Button
                handleClick={this.completeTaskBuffer}
                buttonText="Done"
                buttonClass="done-task-button button secondary-button"
              />
          <Button
              handleClick={this.removeTaskBuffer}
              buttonText="Remove"
              buttonClass="remove-task-button button remove-button"
            />
        </div>
      </div>
    )
  }
}

export default TaskItem;
