import React from 'react';
import ReactDOM from 'react-dom';

import TodoItemList from './todo-item-list.jsx';

var data = [
  {id: 1, title: "Keep calm"},
  {id: 2, title: "and code react"}
];

ReactDOM.render(<TodoItemList data={data} />, document.getElementById('app'));
