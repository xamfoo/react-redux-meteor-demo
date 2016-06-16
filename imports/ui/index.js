import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import {
  Button,
  ButtonToolbar,
  FormGroup,
  InputGroup,
  FormControl
} from 'react-bootstrap';


import Task from './task.js';
import { subscribe, addTask } from  '../actions';


// dummy
class App extends Component {
  componentDidMount() {
    this.computation = this.props.subscribe();
  }
  componentWillUnmount() {
    this.computation.stop()
  }
  handleAddTask(e) {
    e.preventDefault();
    // Have to use findDOMNode with react-bootstrap
    const node = findDOMNode(this.refs.taskInput);
    const task = {text: node.value};
    this.props.addTask(task);
    node.value = null;
  }
  renderTasks() {
    return (this.props.tasks||[]).map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List ({(this.props.tasks ||[] ).length})</h1>
        </header>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" ref="taskInput"/>
            <InputGroup.Button>
              <Button bsStyle="info" onClick={this.handleAddTask.bind(this)}> Add Task </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

// container
const mapState = ({tasks, count}) => {
  return {
    tasks, count
  }
}
const mapDispatch = (dispatch, getState) => {
  return {
    subscribe: () => dispatch(subscribe()),
    addTask: (task) => dispatch(addTask(task)),
  }
}
export default connect(mapState, mapDispatch)(App)
