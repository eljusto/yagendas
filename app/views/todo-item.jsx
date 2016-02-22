import React from 'react'
import { Router, Link } from 'react-router'
 
export default class TodoItem extends React.Component {
  render() {
    return <div alt={this.props.task.title}>
      <Link to={ "/todos/task/" + this.props.task.id} >
          {this.props.task.title}
        </Link>
      </div>
  }
}
