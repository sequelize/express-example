'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'dob', { type: Sequelize.DATE });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'dob');
  }
};
