const express = require("express");
const app = express();
const port = 4000;
const people = require("./routes/index");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/people", people);

app.get("/login", (req, res) => {
  res.send("welcome");
});

app.listen(port, console.log(`we are listening on the port ${port}`));
