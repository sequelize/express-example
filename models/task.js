"use strict";

module.exports = function(sequelize, DataTypes) {
  /**
   * Use Upper Camel Case to name model
   * for it to work as Task.belongsTo() or models.Task.find()
   */
  var Task = sequelize.define("Task", {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        Task.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Task;
};
