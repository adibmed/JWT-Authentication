const express = require("express");
const app = express();

console.log('starting...')

app.get("/", (req, res) => {
 res.send('hello World')
});

app.listen(3005);
