var express = require('express');
var app = express();
var path = require('path');
const morgan = require('morgan');
var mongodb = require('mongodb');

//Morgan
app.use(morgan('combined'));

//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Page serveur
app.get('/', function(req, res) {res.sendFile(path.join(__dirname + '/index.html'));});

//======================================= Data JSON files =============================================
app.get('/data/:id', function(req, res) {
	// Get a Mongo client to work with the Mongo server
	var MongoClient = mongodb.MongoClient;

	// Define where the MongoDB server is
	var url = 'mongodb://localhost:27017/ourData';

	// Connect to the server
	MongoClient.connect(url, function (err, db) {
		if (err) {
			console.log('Unable to connect to the Server', err);
		} else {
			// We are connected
			console.log('Connection established to', url);

			// Get the documents collection
			var collection = db.collection(req.params.id);

			// Find all students
			collection.find({}).toArray(function (err, result) {
				if (err) {
					res.send(err);
				} else if (result.length) {
					res.send(result);
				} else {
					res.send('No documents found');
				}
				//Close connection
				//db.close();
			});
		}
	});
});
//======================================================================================================


/*app.get('/5/0', function(req, res) {res.json(require('./data/bastide/iae.json'));});
app.get('/5/1', function(req, res) {res.json(require('./data/bastide/ega1.json'));});
app.get('/5/2', function(req, res) {res.json(require('./data/bastide/iut.json'));});

app.get('/3/0', function(req, res) {res.json(require('./data/carreire/sm.json'));});
app.get('/3/1', function(req, res) {res.json(require('./data/carreire/sp.json'));});
app.get('/3/2', function(req, res) {res.json(require('./data/carreire/sv.json'));});
app.get('/3/3', function(req, res) {res.json(require('./data/carreire/spe.json'));});

app.get('/4/0', function(req, res) {res.json(require('./data/pessac/dsp.json'));});
app.get('/4/1', function(req, res) {res.json(require('./data/pessac/ega2.json'));});
app.get('/4/2', function(req, res) {res.json(require('./data/pessac/it.json'));});
app.get('/4/3', function(req, res) {res.json(require('./data/pessac/staps.json'));});

app.get('/1/0', function(req, res) {res.json(require('./data/talence/bio.json'));});
app.get('/1/1', function(req, res) {res.json(require('./data/talence/chimie.json'));});
app.get('/1/2', function(req, res) {res.json(require('./data/talence/info.json'));});
app.get('/1/3', function(req, res) {res.json(require('./data/talence/math.json'));});
app.get('/1/4', function(req, res) {res.json(require('./data/talence/phy.json'));});
app.get('/1/5', function(req, res) {res.json(require('./data/talence/si.json'));});
app.get('/1/6', function(req, res) {res.json(require('./data/talence/ste.json'));});

app.get('/2/0', function(req, res) {res.json(require('./data/victoire/as.json'));});
app.get('/2/1', function(req, res) {res.json(require('./data/victoire/psych.json'));});
app.get('/2/2', function(req, res) {res.json(require('./data/victoire/se.json'));});
app.get('/2/3', function(req, res) {res.json(require('./data/victoire/socio.json'));});
app.get('/2/4', function(req, res) {res.json(require('./data/victoire/odon.json'));});
app.get('/2/5', function(req, res) {res.json(require('./data/victoire/speg.json'));});*/

app.use(function(req, res){
  res.status(404).send('Page introuvable !');
});

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});