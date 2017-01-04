"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .createTable('Tasks', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        title: Sequelize.STRING,
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: Sequelize.DATE,
        UserId: {
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          allowNull: false,
          references: {
            model: 'Users',
            key: 'id'
          }
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .dropTable('Tasks');
  }
};
