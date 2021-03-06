const request = require('request');
const config = require('../config.js');


let getReposByUsername = (user, cb) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  function callback(error, response, body) {
   
    if (!error && response.statusCode === 200) {
      console.log("ready to call save function")
      var info = JSON.parse(body);
      
      cb(null, info);
    }
  };
  request(options, callback);
};

module.exports.getReposByUsername = getReposByUsername;