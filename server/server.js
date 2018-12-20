const express = require('express');

const app = express();

var data = require('./test.json');

app.get('/', function(req, res) {
    res.send('Server page !');
});

app.get('/home', function(req, res) {
  res.send('Home page server');
});

app.get('/data', function(req, res) {
  res.send(data);
});

app.use(function(req, res, next){
  res.status(404).send('Page introuvable !');
});

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});