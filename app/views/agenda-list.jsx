import React from 'react'
import { Router, Link } from 'react-router'

import AgendaRow from './agenda-row.jsx'
import AgendasModel from '../models/agendas.js'

export default class AgendaList extends React.Component {
  render() {
    const todos = new AgendasModel
    const agendaList = todos.getAll()
    let rowNodes = agendaList.map(function (agenda) {
      return (
        <AgendaRow agenda={agenda} key={agenda.id}>
          {agenda.title}
        </AgendaRow>
      );
    });
    return (
      <div className="todo-ItemList">
        <h3 className="todo-ItemList-Title">
          {this.props.title}
        </h3>
        <div className="todo-ItemList-Elements">
          {rowNodes}
        </div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
