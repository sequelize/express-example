const bcrypt = require('bcrypt')

'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.TEXT
  })

  User.associate = function(models) {
    User.hasMany(models.Post); // PostId
  }

  User.addHook('beforeCreate', async function(user) {
    const salt = await bcrypt.genSalt(10); //whatever number you want
    console.log(user);
    user.password = await bcrypt.hash(user.password, salt);
  })

  User.prototype.validPassword = async function(password) {
      return await bcrypt.compare(password, this.password);
  }

  return User;
};
