const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Data fetched successfully",
  });
});

app.post("/", (req, res) => {
  const { name } = req.body;
  res.status(201).json({ created: true, name });
});

module.exports = app;
