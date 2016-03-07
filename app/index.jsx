import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import App from './views/app.jsx'
import TaskList from './views/task-list.jsx'
import TaskDetails from './views/task-details.jsx'
import AgendaList from './views/agenda-list.jsx'


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="/agendas" component={AgendaList} />
    <Route path="/agenda/:agendaId" component={TaskList} / >
    <Route path="/task-details/:taskId" component={TaskDetails}/>
  </Router>
), document.getElementById('app'))
