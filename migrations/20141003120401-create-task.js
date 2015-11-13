"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable('Tasks', {
        title: Sequelize.STRING
      });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface
      .dropTable('Tasks');
  }
};
