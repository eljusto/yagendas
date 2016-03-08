import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import App from './components/app.jsx'
import TaskList from './components/task-list.jsx'
import TaskDetails from './components/task-details.jsx'
import VisibleAgendaList from './containers/visible-agenda-list.jsx'

import { addAgenda } from './actions/agendas'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers/app.js'

const store = createStore(todoApp)
store.dispatch(addAgenda('Learn about actions'))
store.dispatch(addAgenda('Learn about reducers'))
store.dispatch(addAgenda('Learn about store'))

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
