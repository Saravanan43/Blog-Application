const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("Runnin");
});

app.listen("3001", () => console.log("Server Running"));
