const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Récuperation des dinnées !" });
});

module.exports = router;
