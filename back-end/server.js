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
var url = 'mongodb://localhost:27017/ourData';

//======================================= Data JSON files =============================================
app.get('/data/:id', function(req, res) {
	// Connect to the server
	MongoClient.connect(url, async function (err, db) {
		if (err) {
			console.log('Unable to connect to the Server', err);
		} else {
			// We are connected
			console.log('Connection established to', url);

			// Get the documents collection
      let collection = db.collection(req.params.id);

			// Find all students
			await collection.find({}).toArray(function (err, result) {
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
    MongoClient.connect(url, function(err, db){
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
//=========================================== Delete ===================================================
app.delete('/delete/:camp?/:uf?/:record?/', function(req, res){
  MongoClient.connect(url, function(err, db){
    if (err) {
      console.log('Unable to connect to the Server:', err);
    } else {
      console.log('Connected to Server');
      // Get the documents collection
      var collection = db.collection(req.param("camp")+'_'+req.param("uf"));
      collection.find({}).toArray(function(err, collArray) {
        if (err) throw err;
        collection.remove(collArray[req.param("record")]);
      });
    }
  });
});
//======================================================================================================
//=========================================== Put ===================================================
app.put('/put/:camp?/:uf?/:record?/', function(req, res){
  MongoClient.connect(url, function(err, db){
    if (err) {
      console.log('Unable to connect to the Server:', err);
    } else {
      console.log('Connected to Server');
      // Get the documents collection
      var collection = db.collection(req.param("camp")+'_'+req.param("uf"));
      collection.find({}).toArray(function(err, collArray) {
        if (err) throw err;
        collection.remove(collArray[req.param("record")]);
        let student1 = {
          "index": req.param("record"),
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
//========================================= Login/Logout ===============================================
//const ticketRoutes = express.Router();
var auth = {
  authenticated: false,
                mockAccount: {
                    username: "admin",
                    password: "admin"
                  }
                };
app.get('/login', function(req, res){
  // Connect to the server
  res.send(""+auth.authenticated);
});
app.post('/login', function(req, res){
  // Connect to the server
  console.log(req.body);
  if(req.body == auth.mockAccount)
    auth.authentified = true;
});
app.post('/logout', function(){
  auth.authentified = false;
});
//======================================================================================================

app.use(function(req, res){
  res.status(404).send('Page introuvable !');
});

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});