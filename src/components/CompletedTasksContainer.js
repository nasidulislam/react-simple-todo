import React from 'react';
import '../stylesheets/CompletedTasksContainer.css';

// other component imports
import CustomAccordion from './CustomAccordion';
import Button from './blocks/Button';

class CompletedTasksContainer extends React.Component {
  render() {
    return (
      <div className="completed-tasks-container">
        <div className="actions-container">
          <Button
            handleClick={this.props.clearAll}
            buttonText="Clear All"
            buttonClass="clear-all-button button button-as-link button-right-aligned"
             />
        </div>
        <CustomAccordion
          title="Completed"
          completedTasks={this.props.completedTasks}
        />
      </div>
    )
  }
}

export default CompletedTasksContainer;
