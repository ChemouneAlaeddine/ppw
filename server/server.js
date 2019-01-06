var express = require('express');
var app = express();
var mongo = require('mongodb');
var path = require('path');


// Fichiers json
var campus = require('./data/campus.json');

var ega1 = require('./data/bastide/ega1.json');
var iae = require('./data/bastide/iae.json');
var iut = require('./data/bastide/iut.json');

var sm = require('./data/carreire/sm.json');
var sp = require('./data/carreire/sp.json');
var spe = require('./data/carreire/spe.json');
var sv = require('./data/carreire/sv.json');

var dsp = require('./data/pessac/dsp.json');
var ega2 = require('./data/pessac/ega2.json');
var it = require('./data/pessac/it.json');
var staps = require('./data/pessac/staps.json');

var bio = require('./data/talence/bio.json');
var chimie = require('./data/talence/chimie.json');
var info = require('./data/talence/info.json');
var math = require('./data/talence/math.json');
var phy = require('./data/talence/phy.json');
var si = require('./data/talence/si.json');
var ste = require('./data/talence/ste.json');

var as = require('./data/victoire/as.json');
var odon = require('./data/victoire/odon.json');
var psych = require('./data/victoire/psych.json');
var se = require('./data/victoire/se.json');
var socio = require('./data/victoire/socio.json');
var speg = require('./data/victoire/speg.json');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Page serveur
app.get('/', function(req, res) {res.sendFile(path.join(__dirname + '/index.html'));});

// Pages json
app.get('/campus', function(req, res) {res.send(campus);});

app.get('/5/0', function(req, res) {res.send(iae);});
app.get('/5/1', function(req, res) {res.send(ega1);});
app.get('/5/2', function(req, res) {res.send(iut);});

app.get('/3/0', function(req, res) {res.send(sm);});
app.get('/3/1', function(req, res) {res.send(sp);});
app.get('/3/2', function(req, res) {res.send(sv);});
app.get('/3/3', function(req, res) {res.send(spe);});

app.get('/4/0', function(req, res) {res.send(dsp);});
app.get('/4/1', function(req, res) {res.send(ega2);});
app.get('/4/2', function(req, res) {res.send(it);});
app.get('/4/3', function(req, res) {res.send(staps);});

app.get('/1/0', function(req, res) {res.send(bio);});
app.get('/1/1', function(req, res) {res.send(chimie);});
app.get('/1/2', function(req, res) {res.send(info);});
app.get('/1/3', function(req, res) {res.send(math);});
app.get('/1/4', function(req, res) {res.send(phy);});
app.get('/1/5', function(req, res) {res.send(si);});
app.get('/1/6', function(req, res) {res.send(ste);});

app.get('/2/0', function(req, res) {res.send(as);});
app.get('/2/1', function(req, res) {res.send(psych);});
app.get('/2/2', function(req, res) {res.send(se);});
app.get('/2/3', function(req, res) {res.send(socio);});
app.get('/2/4', function(req, res) {res.send(odon);});
app.get('/2/5', function(req, res) {res.send(speg);});

/*app.post('http://localhost:3000/addit', function (req, res) {
	  var users={
		"name":req.body.name,
		"surname":req.body.surname,
		"email":req.body.email,
		"password":req.body.password
	  }
})*/

// Création de la BDD
var ourData = "mongodb://localhost:27017/ourData";

mongo.connect(ourData , function(error , db){
	if (error){throw error;}
	
	var dbase = db.db("ourData");

	dbase.listCollections().toArray(function(err, items){
		if (err) throw err;

		if (items.length == 0){
			console.log("No collections in database");
			var testFolder = './data';
			var fs = require('fs');

			fs.readdir(testFolder, function(err, files){
				if(err) throw err;
				files.forEach(function(file){
					dbase.createCollection(file , function(err){
						if(err) throw err;

						//================== json files =====================
						var testCollection = './data/'+file;
						var folderName = ""+file;
						
						fs.readdir(testCollection, function(err, files){
							files.forEach(function(file){
								var jsonFile = require('./data/'+folderName+'/'+file);
								dbase.collection(folderName).insertOne(jsonFile, function(err) {
									if (err) throw err;
								});
							});
						});
						//===================================================
					});
				});
			});
			console.log("DB created successfully");
		}else{
			console.log("DB already exists");
		}
	});
});

app.use(function(req, res){
  res.status(404).send('Page introuvable !');
});

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});