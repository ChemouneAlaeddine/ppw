const express = require('express');
const app = express();
const mongo = require('mongodb');
const path = require('path');

// Fichiers json
var data = require('./test.json');
var campus = require('./campus.json');

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

// Page serveur
app.get('/', function(req, res) {res.sendFile(path.join(__dirname + '/index.html'));});

// Pages json
app.get('/data_s', function(req, res) {res.send(data);});
app.get('/data_f', function(req, res) {res.send(campus);});

app.get('/ega1', function(req, res) {res.send(ega1);});
app.get('/iae', function(req, res) {res.send(iae);});
app.get('/iut', function(req, res) {res.send(iut);});

app.get('/sm', function(req, res) {res.send(sm);});
app.get('/sp', function(req, res) {res.send(sp);});
app.get('/spe', function(req, res) {res.send(spe);});
app.get('/sv', function(req, res) {res.send(sv);});

app.get('/dsp', function(req, res) {res.send(dsp);});
app.get('/ega2', function(req, res) {res.send(ega2);});
app.get('/it', function(req, res) {res.send(it);});
app.get('/staps', function(req, res) {res.send(staps);});

app.get('/bio', function(req, res) {res.send(bio);});
app.get('/chimie', function(req, res) {res.send(chimie);});
app.get('/info', function(req, res) {res.send(info);});
app.get('/math', function(req, res) {res.send(math);});
app.get('/phy', function(req, res) {res.send(phy);});
app.get('/si', function(req, res) {res.send(si);});
app.get('/ste', function(req, res) {res.send(ste);});

app.get('/as', function(req, res) {res.send(as);});
app.get('/odon', function(req, res) {res.send(odon);});
app.get('/psych', function(req, res) {res.send(psych);});
app.get('/se', function(req, res) {res.send(se);});
app.get('/socio', function(req, res) {res.send(socio);});
app.get('/speg', function(req, res) {res.send(speg);});


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
			    	dbase.createCollection(file , function(err , collection){
						if(err) throw err;

						//================== json files =====================
						var testCollection = './data/'+file;
						var folderName = ""+file;
						
						fs.readdir(testCollection, function(err, files){
					  		files.forEach(function(file){
					  			var str = file.split('.');
								var jsonFile = require('./data/'+folderName+'/'+file);
								dbase.collection(folderName).insertOne(jsonFile, function(err, res) {
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

app.use(function(req, res, next){
  res.status(404).send('Page introuvable !');
});

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});