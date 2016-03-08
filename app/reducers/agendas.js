export function agendas(state = [], action) {
  switch (action.type) {
    case 'ADD_AGENDA':
      return [
        ...state,
        {
          title: action.title,
          is_completed: false
        }
      ]
    case 'COMPLETE_AGENDA':
      return state.map((agenda, index) => {
        if (index === action.index) {
          return Object.assign({}, agenda, {
            is_completed: true
          })
        }
        return agenda
      })
    default:
      return state
  }
}
