import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import {
  Button,
  ButtonToolbar,
  FormGroup,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import Task from '../containers/task';

const App = class extends Component {
  render() {
    const { tasks, addTask } = this.props
    const handleAddTask = (e) => {
      e.preventDefault();
      // Have to use findDOMNode with react-bootstrap
      const node = findDOMNode(this.refs.taskInput);
      const task = {text: node.value};
      addTask(task);
      node.value = null;
    }
    const renderTasks = () => {
      return (tasks||[]).map((task) => (
        <Task key={task._id} task={task} />
      ));
    }

    return (
      <div className="container">
        <header>
          <h1>Todo List ({(tasks ||[] ).length})</h1>
        </header>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" ref="taskInput"/>
            <InputGroup.Button>
              <Button bsStyle="info" onClick={handleAddTask.bind(this)}> Add Task </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        <ul>
          {renderTasks()}
        </ul>
      </div>
    );
  }
}

export default App
