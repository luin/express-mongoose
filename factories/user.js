module.exports = function(req, res, next) {
  next(null, { name: 'Bob' });
};
