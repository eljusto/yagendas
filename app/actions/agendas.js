import * as actions from './action-types'

import fetch from 'isomorphic-fetch'
let nextAgendaId = 0

export function addAgenda(title) {
  return { type: actions.ADD_AGENDA, id: nextAgendaId++, title }
}

export function fetchAgendas() {
  return { type: actions.FETCH_AGENDAS }
}

export function selectAgenda(index) {
  return { type: actions.SELECT_AGENDA, index }
}

export function invalidateAgenda(index) {
  return { type: actions.INVALIDATE_AGENDA, index }
}

export function editAgenda(index, title) {
  return { type: actions.EDIT_AGENDA, index, title }
}

export function toggleAgenda(id) {
  return { type: actions.TOGGLE_AGENDA, id }
}

export function completeAgenda(index) {
  return { type: actions.COMPLETE_AGENDA, index }
}

export function removeAgenda(index) {
  return { type: actions.REMOVE_AGENDA, index }
}

export function requestAgendas() { 
  return function (dispatch) {
    return fetch(`http://localhost:3000/agendas`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveAgendas(json))
      )
  }
}

export function receiveAgendas(json) {
  return {
    type: actions.RECEIVE_AGENDAS,
    agendas: json.agendas
  }
}
