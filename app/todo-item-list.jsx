import React from 'react';
import TodoItem from './todo-item.jsx';

export default class TodoItemList extends React.Component {
  render() {
    let todoItemNodes = this.props.data.map(function (todoItem) {
      return (
        <TodoItem title={todoItem.title} key={todoItem.id}>
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
      </div>
    );
  }
}
