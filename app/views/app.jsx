import React from 'react'
import {Link, Router } from 'react-router'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul role="nav">
          <li><Link to="todos">Todos</Link></li>
        </ul>
        
        {this.props.children}
      </div>
    )
  }
}
