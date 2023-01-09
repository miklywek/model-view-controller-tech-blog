const { User } = require("../../models");

const router = require("express").Router();
const { Post, User } = require("../../models");

router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    // Query configuration
    attributes: ["id", "title", "content", "created_at"],
    include: [
      {
        model: User,
        attributes: ["user_id"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
