const request = require('request');
const config = require('../config.js');

let getReposByUsername = (user) => {
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
    console.log("github is working")
    if (!error && response.statusCode === 200) {
      var info = JSON.parse(body);
      console.log(info[0].id);
      console.log(info[0].name);
      console.log(info[0].html_url);
    }
  };
  request(options, callback);
}

module.exports.getReposByUsername = getReposByUsername;