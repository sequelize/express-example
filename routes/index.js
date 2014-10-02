var db = require('../models')

exports.index = function(req, res){
  db.User.findAll({
    include: [ {model: db.Task, as: 'tasks'} ]
  }).success(function(users) {
    res.render('index', {
      title: 'Express',
      users: users
    })
  })
}
