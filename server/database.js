var mongo = require('mongodb');

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
						if(folderName == 'campus.json'){
							var jsonFile = require('./data/'+folderName);
							dbase.collection(folderName).insertOne(jsonFile, function(err) {
								if (err) throw err;
							});
						}else{
							fs.readdir(testCollection, function(err, files){
								files.forEach(function(file){
									var jsonFile = require('./data/'+folderName+'/'+file);
									dbase.collection(folderName).insertOne(jsonFile, function(err) {
										if (err) throw err;
									});
								});
							});
						}
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