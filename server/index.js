var express = require('express');
var app = express();

const LISTS = require('./lists.json');
const ITEMS = require('./items.json');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/agendas', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  var agendas = LISTS.map((l) => 
                     ({ 
                       id: l.list_id, 
                       title: l.title,
                       isCompleted: l.is_complete 
                     }));
  res.send({ agendas });
});

app.get('/todo-items/:listId', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  const items = ITEMS.filter((item) => item.list_id == req.params.listId);
  res.send(items);
});

app.get('/todo-item/:itemId', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  const item = ITEMS.find((item) => item.id == req.params.itemId);
  res.send(item);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
