import React from 'react'
import { Router, Link } from 'react-router'
import { connect } from 'react-redux'

import TodoItemRow from './task-row.jsx'

const mapStateToProps = (state) => {

  return {
    //@FIXME
    tasks: state.tasksByAgenda[5]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const tList = ({ tasks }) => {
    let todoItemNodes = tasks.items.map(function (todoItem) {
      return (
        <TodoItemRow task={todoItem} key={todoItem.id}>
          {todoItem.text}
        </TodoItemRow>
      );
    })
    return (
      <div className="todo-ItemList">
        <h3 className="todo-ItemList-Title">
        </h3>
        <div className="todo-ItemList-Elements">
          {todoItemNodes}
        </div>
        <Link to="/">Home</Link>
      </div>
    )
}

const TaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(tList)

export default TaskList
