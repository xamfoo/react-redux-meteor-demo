import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  ButtonToolbar,
  FormGroup,
  InputGroup,
  FormControl
} from 'react-bootstrap';


import Task from './task.js';
import { subscribe, addTask, removeTask } from  '../actions';


// dummy
class App extends Component {
  constructor(p) {
    super(p);
    this.state = {
      newTask: null
    }
  }
  componentDidMount() {
    this.computation = this.props.subscribe();
  }
  componentWillUnmount() {
    this.computation.stop()
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({newTask: e.target.value});
  }
  handleAddTask(e) {
    e.preventDefault();
    const task = { text: this.state.newTask };
    this.props.addTask(task);
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
            <FormControl type="text" onChange={this.handleChange.bind(this)}/>
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

