import {
  modelReducer,
  formReducer
} from 'react-redux-form';
import { combineReducers } from 'redux';
import { MEDIUM, PRIORITIES } from '../constants/priorities';

const initialTaskState = {
  text: '',
  priority: PRIORITIES.indexOf(MEDIUM),
};

export default combineReducers({
  task: modelReducer('Tasks.task', initialTaskState),
  form: formReducer('Tasks.task', initialTaskState),
  tasks: (state = [], action) => {
    switch (action.type) {
      case 'UPDATE_TASKS': return action.tasks;
      default: return state;
    }
  }
});
