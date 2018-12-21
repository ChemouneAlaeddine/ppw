const express = require('express');

const app = express();

var path = require('path');

var data = require('./test.json');
var facs = require('./facs.json');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/home', function(req, res) {
  res.send('Home page server');
});

app.get('/data_s', function(req, res) {
  res.send(data);
});

app.get('/data_f', function(req, res) {
  res.send(facs);
});

app.use(function(req, res, next){
  res.status(404).send('Page introuvable !');
});

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});