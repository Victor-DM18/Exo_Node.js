import express from "express";

const port = 5008;

const app = express();

app.get("/post", (req, res) => {
  res.json({ message: "Reception des données !" });
});

app.listen(port, () =>
  console.log("Connecté au serveur sur le port : " + port)
);
