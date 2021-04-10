'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    UserId: DataTypes.INTEGER
  })

  Post.associate = function (models) {
    Post.belongsTo(models.User);
    Post.hasMany(models.Comment);

    // Publication.belongsToMany(models.Post, { through: 'Publication_Post' });
    // Post.belongsToMany(models.Publication, { through: 'Publication_Post' });
  };

  return Post;
};
