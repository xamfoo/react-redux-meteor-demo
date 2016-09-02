import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { addTask } from  '../actions';

import TaskForm from '../components/task-form';

const mapState = ({ Tasks }) => {
  const { form, task } = Tasks;

  return { form, task };
};

const getModel = (fieldName) =>
  ['Tasks.task'].concat(fieldName).filter((x) => x).join('.');

const mapDispatch = (dispatch, getState) => ({
  addTask: (task) => dispatch(addTask(task)),

  change: (fieldName, validators) => (value) => {
    const model = getModel(fieldName);

    dispatch(actions.change(model, value));

    if (validators) {
      dispatch(actions.validate(model, validators));
    }
  },

  reset: () => dispatch(actions.reset(getModel())),
});

export default connect(mapState, mapDispatch)(TaskForm);
