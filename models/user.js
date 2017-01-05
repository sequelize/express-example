"use strict";

module.exports = function(sequelize, DataTypes) {
    /**
   * Use Upper Camel Case to name model
   * for it to work as User.hasMany() or models.User.find()
   */
  var User = sequelize.define("User", {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Task)
      }
    }
  });

  return User;
};
