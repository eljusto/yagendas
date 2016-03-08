import * as actions from './action-types'

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
