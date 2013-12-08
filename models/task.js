module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    title: DataTypes.STRING
  }, {
    associate: function(models) {
      Task.belongsTo(models.User)
    }
  })

  return Task
}
