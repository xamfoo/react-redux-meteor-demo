
export const subscribe = () => {
  return (dispatch, getState, { Meteor, Tracker, Collections }) => {
    let subs = Meteor.subscribe('allTodos');
    Tracker.autorun(() => {
      if (subs.ready()) {
        dispatch({
          type: "UPDATE_TASK",
          tasks: Collections.Todos.find().fetch(),
        })
      }
    })
  }
}

export const addTask = (task) => {
  return (dispatch, getState, { Meteor }) => {
    Meteor.call("addTask", task, (err, res) => {
      if (err) return console.error(err)
    });
  }
}

export const removeTask = (taskId) => {
  return (dispatch, getState, { Meteor }) => {
    Meteor.call("removeTask", taskId, (err, res) => {
      if (err) return console.error(err)
    });
  }
}
