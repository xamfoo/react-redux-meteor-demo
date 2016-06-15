import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { render } from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { reducer } from '../imports/reducer';
import App from '../imports/ui/index.js';
import Collections from '../imports/lib/collection';

const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument({ Meteor, Tracker, Collections }))
)

Meteor.startup(() => {
  render((
    <Provider store={store}>
      <App />
    </Provider>
  ), document.getElementById('render-target'));
});
