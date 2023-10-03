// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/waitlist", (req, res) => {
  const formData = req.body;
  console.log("Received form data:", formData);
  // Add logic to save the form data to a database or perform any other action
  res.send("Form data received successfully!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on https://api.raumhq.co:${PORT}`);
});
