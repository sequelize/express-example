var db = require('../models')

exports.create = function(req, res) {
  db.User.create({ username: req.param('username') }).success(function() {
    res.redirect('/')
  })
}
