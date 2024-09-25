const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { generateResponse } = require("./controllers/chatbotController");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//middlewires
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hi! Welcome to the BrightSpace server!");
});

app.post("/generate", generateResponse);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
