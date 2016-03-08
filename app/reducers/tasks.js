export function tasks(state = [], action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          agendaIndex: action.agendaIndex,
          title: action.title,
          is_completed: false
        }
      ]
    case 'COMPLETE_TASK':
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
