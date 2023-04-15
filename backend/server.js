const express = require("express");
const connectDb = require("./config /db");
const dotenv = require("dotenv").config();
const port = 5008;

connectDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/postRoute"));

app.listen(port, () =>
  console.log("Connecté au serveur sur le port : " + port)
);
