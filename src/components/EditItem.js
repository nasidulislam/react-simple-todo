import React from 'react';
import '../stylesheets/EditItem.css'

// component imports
import TaskItem from './TaskItem';
import { isEmptyObject } from '../util/helpers';
import Message from './blocks/Message';

class EditItem extends React.Component {
  renderTodoBody = (obj) => {
    // if todo task object is not empty, then render list of tasks
    if(!isEmptyObject(obj)) {
      return (
        Object.keys(obj).map(key => (
          <TaskItem
            key={key}
            index={key}
            task={this.props.tasks[key]}
            updateTask={this.props.updateTask}
            removeTask={this.props.removeTask}
            completeTask={this.props.completeTask}
          />
      )))
    } else {
      // if task object is empty, render message
      return <Message
                messageClass="todo-unavailable-message"
                message="There are no tasks left for you to do !!"
              />
    }
  }
  render() {
    return (
      <div className="edit-item-container">
        <h3 className="forms-header">
          <span>Things to do</span>
        </h3>
        {this.renderTodoBody(this.props.tasks)}
      </div>
    )
  }
}

export default EditItem;
