'use strict';

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('todos', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT
    }
  });

  return Todo;
};
