import React from 'react';
import '../stylesheets/AddItem.css';

// component imports
import AddItemForm from './AddItemForm';

class AddItem extends React.Component {
  render() {
    return (
      <div className="add-item-container">
        <h3 className="forms-header">
            <span>Add a Task</span>
        </h3>

        <AddItemForm addTask={this.props.addTask} storeNewTask={this.props.storeNewTask} />
      </div>
    )
  }
}

export default AddItem;
