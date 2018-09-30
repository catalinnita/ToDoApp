import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './common/button.jsx';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
  }

  addTask() {
    const { updateTasksList } = this.props;
    const task = {};
    const taskText = document.getElementById('newTask').value;
    task.Text = taskText;
    updateTasksList(task, 'add');
  }

  render() {
    return (
      <div>
        <input id="newTask" type="text" name="new-task" placeholder="Add new task" />
        <Button clickCallback={this.addTask} buttonText="Add" />
      </div>
    );
  }
}

AddTask.propTypes = {
  updateTasksList: PropTypes.func.isRequired,
};


export default AddTask;
