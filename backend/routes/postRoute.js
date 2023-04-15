const express = require("express");
const { setPost } = require("../controllers/postController");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Récuperation des dinnées !" });
});

router.post("/", setPost);

router.put("/:id", (req, res) => {
  res.json({
    messageId: req.params.id,
    nessage: req.body.newMessage,
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    message: "Post id : " + req.params.id + " supprimé",
  });
});

router.patch("/postLike/:id", (req, res) => {
  res.json({
    message: "Post id : " + req.params.id + " liké",
  });
});

router.patch("/postDislike/:id", (req, res) => {
  res.json({
    message: "Post id : " + req.params.id + " disliké",
  });
});

module.exports = router;
