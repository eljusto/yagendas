import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import App from './views/app.jsx'
import TodoItemList from './views/todo-item-list.jsx'
import TodoItem from './views/todo-item.jsx'
import Task from './views/task.jsx'


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="/todos" component={TodoItemList}>
    </Route>
      <Route path="/todos/task/:taskId" component={Task}/>
  </Router>
), document.getElementById('app'))
