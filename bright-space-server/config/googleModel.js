const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();

const configuration = new GoogleGenerativeAI(process.env.API_KEY);

const modelId = "gemini-1.5-flash";
const model = configuration.getGenerativeModel({ model: modelId });

module.exports = model;
