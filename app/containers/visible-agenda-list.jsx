import { connect } from 'react-redux'
import { toggleAgenda } from '../actions/agendas.js'
import AgendaList from '../components/agenda-list.jsx'

const getVisibleAgendas = (agendas, filter) => {
  return agendas
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    agendas: getVisibleAgendas(state.agendas, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgendaClick: (id) => {
      dispatch(toggleAgenda(id))
    }
  }
}

const VisibleAgendaList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AgendaList)

export default VisibleAgendaList
