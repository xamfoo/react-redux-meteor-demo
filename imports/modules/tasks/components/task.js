import React, { Component, PropTypes } from 'react';
import {
  Button,
} from 'react-bootstrap';

const Task = (props) => {
  const { removeTask } = props
  const handleRemoveTask = (taskId, e) => {
    e.preventDefault();
    removeTask(taskId);
  }
  const {text, _id} = props.task;
  return (
    <li>{text} <Button bsStyle="danger" style={{float: "right"}}
                       onClick={handleRemoveTask.bind(this, _id)}> Remove Task </Button></li>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task
