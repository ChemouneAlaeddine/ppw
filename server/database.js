var mongo = require('mongodb');

// Création de la BDD
var ourData2 = "mongodb://localhost:27017/ourData";

mongo.connect(ourData2 , function(error , db){
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
					/*dbase.createCollection(file , function(err){*/
						//if(err) throw err;

						//================== json files =====================
						var folderCollection = './data/'+file;
						var folderName = ""+file;
						if(folderName == 'campus.json'){
							var collectionName = folderName.split('.')[0];
                            dbase.createCollection(collectionName , function(err){
                                if(err) throw err;
                                var jsonFile = require('./data/'+folderName);
                                dbase.collection(collectionName).insert(jsonFile, function(err) {
                                    if (err) throw err;
                                });
                            });
						}else{
                            fs.readdir(folderCollection, function(err, files){
								dbase.createCollection(folderName , function(err){
									if (err) throw err;
								});
								files.forEach(function(file){
									var str = ""+file;
									var collectionName = folderName+"_"+str.split('.')[0];
                                    dbase.createCollection(collectionName , function(err){
                                        if (err) throw err;
                                        var jsonFile = require('./data/'+folderName+'/'+file);
                                        dbase.collection(collectionName).insert(jsonFile, function(err) {
                                            if (err) throw err;
										});
										dbase.collection(folderName).insert(jsonFile, function(err) {
                                            if (err) throw err;
                                        });
                                    });
                                });
                            });
						}
						//===================================================
					/*});*/
				});
			});
			console.log("DB created successfully");
		}else{
			console.log("DB already exists");
		}
	});
});