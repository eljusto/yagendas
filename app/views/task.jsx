import React from 'react'
import TasksModel from '../models/tasks.js'
 
export default class Task extends React.Component {
  render() {
    const tasks = new TasksModel
    const taskId = this.props.params.taskId 
    const task = tasks.getTask(taskId)
    return <div alt={task.title}>
      {task.title}
      </div>
  }
}
