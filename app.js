const express = require("express");
const app = express();
const port = 4000;
const newArray = require("./data");

app.get("/fetchData", (req, res) => {
  res.json(newArray);
});

app.listen(port, console.log(`we are listening on the port ${port}`));
