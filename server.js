const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("The website is working");
});
app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(port, () => `Server running on port ${port} 🔥`);
