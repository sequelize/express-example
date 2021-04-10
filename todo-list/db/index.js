'use strict';

const Sequelize = require('sequelize');
const TodoModel = require('./models/todo.js');
const UserModel = require('./models/user.js');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  store: ':memory'
});

const Todo = TodoModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

Todo.belongsTo(User, {
  as: 'author'
});

User.hasMany(Todo, {
  foreignKey: 'authorId'
});

module.exports = {
  sequelize,
  Sequelize,
  Todo,
  User
}
