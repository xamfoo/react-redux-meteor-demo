import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Button,
} from 'react-bootstrap';
import { removeTask } from  '../actions';

// dummy
class Task extends Component {
  handleRemoveTask(taskId, e) {
    e.preventDefault();
    this.props.removeTask(taskId);
  }
  render() {
    const {text, _id} = this.props.task;
    return (
      <li>{text} <Button bsStyle="danger" style={{float: "right"}}
                         onClick={this.handleRemoveTask.bind(this, _id)}> Remove Task </Button></li>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

// Container
const mapState = () => ({});
const mapDispatch = (dispatch, getState) => {
  return {
    removeTask: (taskId) => dispatch(removeTask(taskId))
  }
};

export default connect(
  mapState, mapDispatch
) (Task)
