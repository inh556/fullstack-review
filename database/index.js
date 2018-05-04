const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true});
var db = mongoose.connection;	
//db.on('error,', console.error.bind(console, 'connection error:'));
let repoSchema = mongoose.Schema({
  name: String,
  description: String,
  folks: Number,
  link: String  
});
let Repo = mongoose.model('Repo', repoSchema);
let save = function(data) {
	let repos = [];
	for(var i = 0; i < data.length; i++) {
  	var repo = new Repo ({
  		"name": data[i].name,
  		"description": data[i].description,
  		"folks": data[i].folks,
  		"link": data[i].html_url
  	})
		repos.push(repo);
	}
	db.insertMany(repos);
	// connect db and insert 

};
module.exports.save = save;