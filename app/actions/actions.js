/*
 * action types
 */

export const ADD_AGENDA = 'ADD_AGENDA'
export const EDIT_AGENDA = 'EDIT_AGENDA'
export const COMPLETE_AGENDA = 'COMPLETE_AGENDA'
export const REMOVE_AGENDA = 'REMOVE_AGENDA'

export const ADD_TASK = 'ADD_TASK'
export const EDIT_TASK = 'EDIT_TASK'
export const COMPLETE_TASK = 'COMPLETE_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'

// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

/*
 * action creators
 */

export function addAgenda(title) {
  return { type: ADD_AGENDA, title }
}

export function editAgenda(index, title) {
  return { type: EDIT_AGENDA, index, title }
}

export function completeAgenda(index) {
  return { type: COMPLETE_AGENDA, index }
}

export function removeAgenda(index) {
  return { type: REMOVE_AGENDA, index }
}

export function addTask(agendaIndex, text, expDate, expTime) {
  return { type: ADD_TASK, agendaIndex, text, expDate, expTime }
}

export function editTask(text, expDate, expTime) {
  return { type: EDIT_TASK, index, agendaIndex, text, expDate, expTime }
}

export function completeTask(index, agendaIndex) {
  return { type: COMPLETE_TASK, index, agendaIndex }
}

export function removeTask(index, agendaIndex) {
  return { type: REMOVE_TASK, index, agendaIndex }
}
