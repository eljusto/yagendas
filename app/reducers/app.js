import { combineReducers } from 'redux'
import { tasks, tasksByAgenda } from './tasks.js'
import { agendas } from './agendas.js'
// import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/'
// const { SHOW_ALL } = VisibilityFilters

// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter
//     default:
//       return state
//   }
// }



const todoApp = combineReducers({
  agendas,
  tasks,
  tasksByAgenda
})

export default todoApp
