// first install mongoose  /* npm install mongoose */
const mongoose = require('mongoose');
// even this localtion is not exist, mongo will create one
mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true});

// test if connect correctly

var db = mongoose.connection;

db.on('error,', console.error.bind(console, 'connection error:'));



let repoSchema = mongoose.Schema({
  name: String,
  description: String,
  folks: Number,
  link: String  
});
let Repo = mongoose.model('Repo', repoSchema);

let save = function(data) {
	console.log('data received from server!, ready write into database!');
	for(var i = 0; i < data.length; i++) {
  	var repo = new Repo ({
  		"name": data[i].name,
  		"description": data[i].description,
  		"folks": data[i].folks,
  		"link": data[i].html_url
  	})

    db.collection(data[i].owner.login).update(
      { "name" : repo.name },
      { $set: repo },
      { upsert: true, multi: false }
    )
		// db.collection('repos').insert(repo);
	}
};
module.exports.save = save;