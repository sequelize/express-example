"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface
      .createTable('Tasks', {
        title: Sequelize.STRING
      });
  },

  down: function(queryInterface, Sequelize) {
    queryInterface
      .dropTable('Tasks');
  }
};
