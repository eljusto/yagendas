import React, { PropTypes } from 'react'
import { Router, Link } from 'react-router'
import AgendaRow from './agenda-row.jsx'

const AgendaList = ({ agendas, onAgendaClick }) => (
      <div className="todo-ItemList">
        <div className="todo-ItemList-Elements">
          {agendas.map(agenda =>
            <AgendaRow 
              key={agenda.id}
              {...agenda} 
              onClick={() => onAgendaClick(agenda.id)}
            />
          )}
        </div>
        <Link to="/">Home</Link>
      </div>
    )


    AgendaList.propTypes = {
      agendas: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isCompleted: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
      }).isRequired).isRequired,
  onAgendaClick: PropTypes.func.isRequired
}
export default AgendaList
