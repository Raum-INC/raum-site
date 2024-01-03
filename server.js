// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/v1/newsletter", (req, res) => {
  const formData = req.body;
  console.log("Received form data:", formData);
  // Add logic to save the form data to a database or perform any other action
  res.send("Form data received successfully!");
});

app.get("/privacy-policy", async (req, res) => {
  try {
    const response = await fetch(
      "https://cp.raumhq.co/store/content-block/privacy-policy"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.get("/terms-and-conditions", async (req, res) => {
  try {
    const response = await fetch(
      "https://cp.raumhq.co/store/content-block/terms-and-conditions"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on https://api.raumhq.co:${PORT}`);
});
