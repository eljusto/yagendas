import React from 'react'
import { Router, Link } from 'react-router'

import TodoItem from './todo-item.jsx'
import TodosModel from '../models/todos.js'

export default class TodoItemList extends React.Component {
  render() {
    const todos = new TodosModel
    const tasks = todos.getAll()
    let todoItemNodes = tasks.map(function (todoItem) {
      return (
        <TodoItem task={todoItem} key={todoItem.id}>
          {todoItem.text}
        </TodoItem>
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
