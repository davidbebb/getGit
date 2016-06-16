require('dotenv').config();
fs = require('fs-extra');
req = require('request');

var token = process.env.GH_KEY;
// /orgs/:org/repos
var root_path = 'https://api.github.com/orgs/healthera/repos?access_token='+token;
var headers = {headers:{'User-Agent': process.env.GH_USER}};
var data = {}
req.get(root_path, headers , function (err, res, body) {
  data = JSON.parse(body);
  
  fs.outputJson('./repos-fullname.json', data, function (err) {});

})
