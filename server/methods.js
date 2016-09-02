import { Meteor } from 'meteor/meteor';
import { Todos } from '../imports/lib/collection';

export default function () {
  Meteor.methods({
    'addTask': (task) => {
      Todos.insert({ ...task, created_at: new Date() })
    }
  })
  Meteor.methods({
    'removeTask': (taskId) => {
      Todos.remove({_id: taskId})
    }
  })
}
