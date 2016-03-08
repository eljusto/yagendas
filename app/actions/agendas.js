import * as actions from './action-types'

let nextAgendaId = 0

export function addAgenda(title) {
  return { type: actions.ADD_AGENDA, id: nextAgendaId++, title }
}

export function editAgenda(index, title) {
  return { type: actions.EDIT_AGENDA, index, title }
}

export function toggleAgenda(index) {
  return { type: actions.TOGGLE_AGENDA, index }
}

export function completeAgenda(index) {
  return { type: actions.COMPLETE_AGENDA, index }
}

export function removeAgenda(index) {
  return { type: actions.REMOVE_AGENDA, index }
}
