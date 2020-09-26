require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");


app.use(express.json());

console.log("starting...");

app.get("/posts", (req, res) => {
  res.send("hello World");
});

app.post("/login", (req, res) => {
    console.log('req 👉 ', req.body)
  // Athenticate User
  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

  res.json({ accessToken: accessToken });
});

app.listen(3005);
