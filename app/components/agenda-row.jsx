import React, { PropTypes } from 'react'
import { Router, Link } from 'react-router'
 
const AgendaRow = ({ onClick, isCompleted, title, agendaId }) => (
  <div 
    alt={title}
    style={{
      textDecoration: isCompleted ? 'line-through' : 'none'
    }}
  >
    <span
      onClick={onClick}
      >
      [check]
    </span>
    <Link to={ "/agenda/" + agendaId}>
      {title}
    </Link>
  </div>
)

AgendaRow.propTypes = {
  onClick: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  agendaId: PropTypes.string.isRequired
}

export default AgendaRow
