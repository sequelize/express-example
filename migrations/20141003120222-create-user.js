"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable('Users', {
        username: Sequelize.STRING
      });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface
      .dropTable('Users');
  }
};
