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
