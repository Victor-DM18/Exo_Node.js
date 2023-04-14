const express = require("express");
const port = 5008;

const app = express();

app.use("/post", require("./routes/postRoute"));

app.listen(port, () =>
  console.log("Connecté au serveur sur le port : " + port)
);
