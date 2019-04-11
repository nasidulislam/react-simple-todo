import React from 'react';
import '../stylesheets/App.css';

// component imports
import Header from './Header';
import EditItem from './EditItem';
import AddItem from './AddItem';
import CompletedTasksContainer from './CompletedTasksContainer';

// other imports
import { isEmptyObject } from '../util/helpers';
import base from '../util/firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: {},
      newTask: {},
      completedTasks: {}
    };
  }

  // component lifecycle methods
  componentDidMount() {
    const { params } = this.props.match
    // first re-instate local storage
    const localStorageData = localStorage.getItem(params.username);

    if(localStorageData) {
      this.setState({
        tasks: JSON.parse(localStorageData)
      });
    }

    this.ref = base.syncState(`${params.username}/tasks`, {
			context: this,
			state: 'tasks'
		});

    this.ref = base.syncState(`${params.username}/completedTasks`, {
			context: this,
			state: 'completedTasks'
		});
  }

  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.username, JSON.stringify(this.state.tasks));
  }

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

  storeNewTask = (newlyAddedTask) => {
    const newTask = { ...this.state.newTask }
    const newInput = newlyAddedTask[0];
    const newValue = newlyAddedTask[1];

    newTask[newInput] = newValue;
    this.setState({ newTask });
  }

  updateTask = (key, updatedTask) => {
    const tasks = { ...this.state.tasks };

    tasks[key] = updatedTask;
    this.setState({ tasks });
  }

  addTask = (event) => {
    event.preventDefault();
    event.currentTarget.reset();

    const newTask = { ...this.state.newTask };
    const key = "task" + Math.round(Math.random() * (1000 - 9999) + 10000);

    // only update task if object is not empty
    if(!isEmptyObject(newTask)) {
      this.updateTask(key, newTask);
    }

    return;
  }

  removeTask = key => {
    const tasks = { ...this.state.tasks };

    // delete tasks[key];
    tasks[key] = null;
    this.setState({ tasks });
  }

  completeTask = (key, completedTask) => {
    const completedTasks = { ...this.state.completedTasks };

    completedTasks[key] = completedTask;

    this.setState({ completedTasks });
  }

  clearAll = () => {
    this.setState({ completedTasks: null });
  }

  render() {
    return (
      <div className="app-container">
        <Header username={this.props.match.params.username} log={console.log(this.props)} />
        <div className="forms-container">

          <EditItem
            tasks={this.state.tasks}
            updateTask={this.updateTask}
            removeTask={this.removeTask}
            completeTask={this.completeTask}
          />

          <AddItem addTask={this.addTask} storeNewTask={this.storeNewTask} />

          <CompletedTasksContainer
            completedTasks={this.state.completedTasks}
            clearAll={this.clearAll}
          />

        </div>
      </div>
    );
  }
}

export default App;
