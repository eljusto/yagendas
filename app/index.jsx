import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import App from './views/app.jsx'
import TaskList from './views/task-list.jsx'
import TaskDetails from './views/task-details.jsx'
import AgendaList from './views/agenda-list.jsx'


import { addTask, addAgenda, completeAgenda } from './actions/actions.js'
import { createStore } from 'redux'
import todoApp from './reducers/app.js'

let store = createStore(todoApp)

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(addAgenda('Learn about actions'))
store.dispatch(addAgenda('Learn about reducers'))
store.dispatch(addAgenda('Learn about store'))
store.dispatch(addTask(1, 'Learn about store'))
store.dispatch(completeAgenda(0))
store.dispatch(completeAgenda(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()



ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="/agendas" component={AgendaList} />
    <Route path="/agenda/:agendaId" component={TaskList} / >
    <Route path="/task-details/:taskId" component={TaskDetails}/>
  </Router>
), document.getElementById('app'))
