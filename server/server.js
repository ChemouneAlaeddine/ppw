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
  res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // intercept OPTIONS method
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
});

// Page serveur
app.get('/', function(req, res) {res.sendFile(path.join(__dirname + '/index.html'));});

// Get a Mongo client to work with the Mongo server
var MongoClient = mongodb.MongoClient;

var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Define where the MongoDB server is
var url = 'mongodb://localhost:27017/ourData2';

//======================================= Data JSON files =============================================
app.get('/data/:id', function(req, res) {
	// Connect to the server
	MongoClient.connect(url, function (err, db) {
		if (err) {
			console.log('Unable to connect to the Server', err);
		} else {
			// We are connected
			console.log('Connection established to', url);

			// Get the documents collection
      var collection = db.collection(req.params.id);

      //var result;
      //var result;
      
      /*db.listCollections().toArray(function(err, collInfos) {
        if (err) throw err;
        //var result = JSON.stringify(collInfos);
        collInfos.forEach(function(coll){
          if(coll.name.split('_')[0] == req.params.id && coll.name.split('_')[1]){
            console.log(coll.name);
            //db.collection(req.params.id).find({});
            db.collection(coll.name).find({}).toArray(function(err, collArray){
              Array.prototype.push.apply(result,collArray); 
              console.log(result);
            });
          }
        });
      });*/

			// Find all students
			collection.find({}).toArray(function (err, result) {
				if (err) {
					res.send(err);
				} else if (result.length) {
					res.json(result);
				} else {
					res.send('No documents found');
				}
			});
		}
	});
});
//======================================================================================================
//============================================ Post ====================================================
//const ticketRoutes = express.Router();
app.post('/add', function(req, res){
    // Connect to the server
    MongoClient.connect('mongodb://localhost:27017/ourData2', function(err, db){
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
        // Get the documents collection
        var collection = db.collection(req.body.campus+'_'+req.body.uf);

        collection.find({}).toArray(function(err, collArray) {
          if (err) throw err;
          var index = collArray.length + 1;
          var student1 = {
            "index": index,
            "name": req.body.name,
            "surname": req.body.surname,
            "email": req.body.email,
            "fullname": req.body.fullname,
            "float": req.body.float
          };
          collection.insert([student1]);
        });
      }
    });
  });
//======================================================================================================

app.use(function(req, res){
  res.status(404).send('Page introuvable !');
});

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});