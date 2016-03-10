import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import App from './components/app.jsx'
import TaskList from './components/task-list.jsx'
import TaskDetails from './components/task-details.jsx'
import VisibleAgendaList from './containers/visible-agenda-list.jsx'

import { addAgenda } from './actions/agendas'
import { fetchTasks } from './actions/tasks'
import { requestAgendas } from './actions/agendas'

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers/app.js'

const loggerMiddleware = createLogger()

const store = createStore(
  todoApp, 
  applyMiddleware(
    thunkMiddleware, 
    loggerMiddleware
  )
)
store.dispatch(requestAgendas())

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
      </Route>
      <Route path="/agendas" component={VisibleAgendaList} />
      <Route path="/agenda/:agendaId" component={TaskList} / >
      <Route path="/task-details/:taskId" component={TaskDetails}/>
    </Router>
  </Provider>
), document.getElementById('app'))
