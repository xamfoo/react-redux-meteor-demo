import React, { Component } from 'react';
import { PRIORITIES } from '../constants/priorities';

import Task from '../containers/task';
import TaskForm from '../containers/task-form';

const App = ({ tasks }) => (
  <div className="tasks-container">
    <header>
      <h1>Todo List ({ tasks.length })</h1>
    </header>
    <TaskForm/>
    <ul>
      { tasks.map((task) => <Task key={ task._id } task={ task } />) }
    </ul>
  </div>
);

export default App;
