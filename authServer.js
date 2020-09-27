require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json())

app.post("/login", (req, res) => {
  // Athenticate User
  const username = req.body.username;
  const user = { name: username };
  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFREASH_TOKEN_SECRET);

  res.json({ accessToken: accessToken, refreshToken: refreshToken });
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
}

app.listen(4005);
