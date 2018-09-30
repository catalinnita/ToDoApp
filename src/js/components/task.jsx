import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './common/button.jsx';

class Task extends Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
    this.markAsDone = this.markAsDone.bind(this);
  }

  markAsDone() {
    const { updateTasksList } = this.props;
    const { task } = this.props;
    task.Status = 'Done';
    updateTasksList(task, 'update');
  }

  remove() {
    const { updateTasksList } = this.props;
    const { task } = this.props;

    updateTasksList(task, 'remove');
  }

  render() {
    const { task } = this.props;
    return (
      <div>
        <div>{task.Status}</div>
        <div>{task.Text}</div>
        <Button clickCallback={this.markAsDone} buttonText="Done" />
        <Button clickCallback={this.remove} buttonText="Remove" />
      </div>
    );
  }
}

Task.defaultProps = {
  task: {
    Status: 'active',
  },
};

Task.propTypes = {
  task: PropTypes.shape({
    ID: PropTypes.number.isRequired,
    Text: PropTypes.string.isRequired,
    Status: PropTypes.string,
  }),
  updateTasksList: PropTypes.func.isRequired,
};

export default Task;
