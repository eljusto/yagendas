import React from 'react'
import { Router, Link } from 'react-router'

import TodoItemRow from './task-row.jsx'
import TasksModel from '../models/tasks.js'

export default class TaskList extends React.Component {
  render() {
    const todos = new TasksModel
    const tasks = todos.getAll()
    let todoItemNodes = tasks.map(function (todoItem) {
      return (
        <TodoItemRow task={todoItem} key={todoItem.id}>
          {todoItem.text}
        </TodoItemRow>
      );
    });
    return (
      <div className="todo-ItemList">
        <h3 className="todo-ItemList-Title">
          {this.props.title}
        </h3>
        <div className="todo-ItemList-Elements">
          {todoItemNodes}
        </div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
