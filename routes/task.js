var db = require('../models')

exports.create = function(req, res) {
  db.User.find({ where: { id: req.param('user_id') } }).success(function(user) {
    db.Task.create({ title: req.param('title') }).success(function(title) {
      title.setUser(user).success(function() {
        res.redirect('/')
      })
    })
  })
}

exports.destroy = function(req, res) {
  db.User.find({ where: { id: req.param('user_id') } }).success(function(user) {
    db.Task.find({ where: { id: req.param('task_id') } }).success(function(task) {
      task.setUser(null).success(function() {
        task.destroy().success(function() {
          res.redirect('/')
        })
      })
    })
  })
}
