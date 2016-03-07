import React from 'react'
import { Router, Link } from 'react-router'
 
export default class AgendaRow extends React.Component {
  render() {
    return <div alt={this.props.agenda.title}>
      <Link to={ "/agenda/" + this.props.agenda.id} >
          {this.props.agenda.title}
        </Link>
      </div>
  }
}
