var express = require('express');

var app = module.exports = express();

app.get('/', function(user, req, res) {
  res.json(user);
});
