import React, { Component } from 'react';
import AddTask from './components/add-task.jsx';
import TasksList from './components/tasks-list.jsx';

class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.updateTasksList = this.updateTasksList.bind(this);

    this.state = {
      tasksList: [],
    };
  }

  componentWillMount() {
    this.getSavedList();
  }

  getSavedList() {
    const myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'http://localhost:8080/data/tasks.json', true);
    myRequest.onreadystatechange = () => {
      if (myRequest.readyState === 4) {
        const SavedData = JSON.parse(myRequest.responseText);
        this.setState({
          tasksList: SavedData,
        });
      }
    };
    myRequest.send();
  }

  addNewTask(task, tasksList) {
    const newTasksList = tasksList;
    const { Text, ID, Status } = task;
    const newTask = {};

    newTask.Text = Text || 'You forgot to add some text';
    newTask.ID = ID || tasksList.length + 1;
    newTask.Status = Status || 'Active';
    newTasksList.push(newTask);

    return newTasksList;
  }

  removeTask(task, tasksList) {
    const { ID } = task;

    const newTasksList = tasksList.filter(currentTask => (ID !== currentTask.ID));

    return newTasksList;
  }

  updateTask(task, tasksList) {
    const newTasksList = tasksList;
    const { ID, Status } = task;

    tasksList.forEach((currentTask) => {
      if (currentTask.ID === ID) {
        newTasksList.status = Status;
      }
    });

    return newTasksList;
  }

  updateTasksList(task, action) {
    const { tasksList } = this.state;
    let newTasksList = tasksList;

    if (action === 'add') {
      newTasksList = this.addNewTask(task, newTasksList);
    }

    if (action === 'update') {
      newTasksList = this.updateTask(task, newTasksList);
    }

    if (action === 'remove') {
      newTasksList = this.removeTask(task, newTasksList);
    }

    this.setState({
      tasksList: newTasksList,
    });
  }

  render() {
    const { tasksList } = this.state;
    return (
      <div>
        <AddTask updateTasksList={this.updateTasksList} />
        <TasksList tasksList={tasksList} updateTasksList={this.updateTasksList} />
      </div>
    );
  }
}

export default ToDoApp;
