import * as actions from './action-types'

import fetch from 'isomorphic-fetch'

let nextTaskId = 0

export function addTask(agendaIndex, text, expDate, expTime) {
  return { type: actions.ADD_TASK, id: nextTaskId++, agendaIndex, text, expDate, expTime }
}

export function editTask(text, expDate, expTime) {
  return { type: actions.EDIT_TASK, index, agendaIndex, text, expDate, expTime }
}

export function toggleTask(index, agendaIndex) {
  return { type: actions.TOGGLE_TASK, index, agendaIndex }
}

export function completeTask(index, agendaIndex) {
  return { type: actions.COMPLETE_TASK, index, agendaIndex }
}

export function removeTask(index, agendaIndex) {
  return { type: actions.REMOVE_TASK, index, agendaIndex }
}

export function requestTasks(agendaIndex) {
  return { type: actions.REQUEST_TASKS, agendaIndex }
}

export function receiveTasks(agendaIndex, json) {
  return {
    type: actions.RECEIVE_TASKS,
    agendaIndex,
    // tasks: json.data.children.map(child => child.data),
    tasks: json,
    receivedAt: Date.now()
  }
}


// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))

export function fetchTasks(agendaIndex) {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestTasks(agendaIndex))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`http://localhost:3000/todo-items/${agendaIndex}`)
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveTasks(agendaIndex, json))
      )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}
