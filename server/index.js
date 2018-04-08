const express = require('express');
const bodyparser = require('body-parser');
var database = require('../database/index');

const github = require('../helpers/github');

let port = 1128;
let app = express();
app.use(bodyparser.json());

app.use(express.static(__dirname + '/../client/dist'));


//test
app.post('/repos', function (req, res) {
	let name = req.body;
  github.getReposByUsername('inh556', (err, data) => {
  	if(err) {
  		console.log(err);
  	} else {
  		
  		database.save(data);
  		console.log('passed data to database!!')
  		res.send(data);
  	}
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // should find 
  res.send('GET is working!')
});


app.listen(port, function() {
  console.log(`Github Fetcher is now live at http://localhost:${port}`);
});

