const {sequelize} = require('../config/database');
const Post = require('./post');
const Comment = require('./comment');

Post.hasMany(Comment, {as: 'comments', foreignKey: 'postId'});
Comment.belongsTo(Post, {foreignKey: 'postId'});

module.exports = {sequelize, Post, Comment};
