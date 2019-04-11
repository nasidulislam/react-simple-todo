import React from 'react';
import '../stylesheets/AddItemForm.css';

// componenet imports
import TableRow from './blocks/TableRow';
import Button from './blocks/Button';

class AddItemForm extends React.Component {
  handleChange = (event) => {
    const currentTarget = event.currentTarget;
    const newTask = [currentTarget.name, currentTarget.value];

    this.props.storeNewTask(newTask);
  }

  render() {
    return (
      <div>
        <form className="add-item-form" onSubmit={this.props.addTask}>
          <table className="add-item-table">
            <tbody>
              <TableRow
                type="text"
                name="name"
                headerText="Task"
                handleChange={this.handleChange}
              />
              <TableRow
                type="date"
                name="completeBy"
                headerText="Complete by"
                handleChange={this.handleChange}
              />
            </tbody>
          </table>

          <Button
            buttonClass="add-task-button button primary-button"
            buttonText="Add"
            type="submit"
        />

        </form>
      </div>
    )
  }
}

export default AddItemForm;
