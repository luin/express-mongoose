var models = require('node-require-directory')(__dirname);
var mongoose = require('mongoose');
var config = require('config');

mongoose.connect('mongodb://' + config.mongodb.host + '/' + config.mongodb.database);

Object.keys(models).forEach(function(key) {
  if (key === 'index') return;
  var modelName = capitaliseFirstLetter(key);
  global[modelName] = mongoose.model(modelName, models[key]);
});

global.mongoose = mongoose;

function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
