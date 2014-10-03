"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration
      .createTable('Tasks', {
        title: DataTypes.STRING
      })
      .complete(done)
  },

  down: function(migration, DataTypes, done) {
    migration
      .dropTable('Tasks')
      .complete(done)
  }
};
