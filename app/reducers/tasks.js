import * as actions from '../actions/action-types.js'

export function tasks(state = [], action) {
  switch (action.type) {
    case actions.ADD_TASK:
      return [
        ...state,
        {
          agendaIndex: action.agendaIndex,
          title: action.title,
          is_completed: false
        }
      ]

    case actions.TOGGLE_TASK:
      return state.map((agenda, index) => {
        if (index === action.index) {
          return Object.assign({}, agenda, {
            isCompleted: !agenda.isCompleted
          })
        }
        return agenda
      })
    case actions.COMPLETE_TASK:
      return state.map((task, index) => {
        if (index === action.index) {
          return Object.assign({}, task, {
            is_completed: true
          })
        }
        return task
      })
    default:
      return state
  }
}



function tasksIO(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case actions.INVALIDATE_AGENDA:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case actions.REQUEST_TASKS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case actions.RECEIVE_TASKS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.tasks,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function tasksByAgenda(state = {}, action) {
  switch (action.type) {
    case actions.INVALIDATE_AGENDA:
    case actions.RECEIVE_TASKS:
    case actions.REQUEST_TASKS:
      return Object.assign({}, state, {
        [action.agendaIndex]: tasksIO(state[action.agendaIndex], action)
      })
    default:
      return state
  }
}
