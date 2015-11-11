"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface
      .createTable('Users', {
        username: Sequelize.STRING
      });
  },

  down: function(queryInterface, Sequelize) {
    queryInterface
      .dropTable('Users');
  }
};
