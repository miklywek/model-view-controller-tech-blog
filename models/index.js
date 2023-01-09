const User = require("./User");
const Post = require("./User");

User.hasMany(Post, {
  foreignKey: user_id,
});

Post.bolongsTo(User, {
  foreignKey: user_id,
});

module.exports = { User, Post };
