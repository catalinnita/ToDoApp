import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './task.jsx';

class TasksList extends Component {
  renderTask(task, updateTasksList) {
    return <Task key={task.ID} task={task} updateTasksList={updateTasksList} />;
  }

  render() {
    const { tasksList, updateTasksList } = this.props;
    return (
      tasksList.map(task => (this.renderTask(task, updateTasksList)))
    );
  }
}

TasksList.propTypes = {
  tasksList: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.number,
    Text: PropTypes.string,
    Status: PropTypes.string,
  })).isRequired,
  updateTasksList: PropTypes.func.isRequired,
};

export default TasksList;
