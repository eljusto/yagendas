import * as actions from '../actions/action-types.js'

export function agendas(state = [], action) {
  switch (action.type) {
    case actions.ADD_AGENDA:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          isCompleted: false
        }
      ]
      
    case actions.TOGGLE_AGENDA:
      return state.map((agenda, index) => {
        if (index === action.index) {
          return Object.assign({}, agenda, {
            isCompleted: !agenda.isCompleted
          })
        }
        return agenda
      })

    case actions.COMPLETE_AGENDA:
      return state.map((agenda, index) => {
        if (index === action.index) {
          return Object.assign({}, agenda, {
            isCompleted: true
          })
        }
        return agenda
      })
    default:
      return state
  }
}
