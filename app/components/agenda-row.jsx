import React, { PropTypes } from 'react'
import { Router, Link } from 'react-router'
 
const AgendaRow = ({ onClick, isCompleted, title, id }) => (
  <div 
    alt={title}
    style={{
      textDecoration: isCompleted ? 'line-through' : 'none'
    }}
  >
    {id}
    <span
      onClick={onClick}
      >
      [check]
    </span>
    <Link to={ "/agenda/" + id}>
      {title}
    </Link>
  </div>
)

AgendaRow.propTypes = {
  onClick: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default AgendaRow
