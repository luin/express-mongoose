var factories = require('node-require-directory')(__dirname);

module.exports = function(app) {
  Object.keys(factories).forEach(function(key) {
    if (key === 'index') return;
    app.factory(key, factories[key]);
  });
};
