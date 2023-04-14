const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Récuperation des dinnées !" });
});

router.post("/", (req, res) => {
  res.json({ message: req.body.message });
});

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

module.exports = router;
