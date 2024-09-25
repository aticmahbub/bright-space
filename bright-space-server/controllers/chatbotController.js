const model = require("../config/googleModel");

let conversationContext = [];
let currentMessages = [];

const generateResponse = async (req, res) => {
  try {
    const { prompt } = req.body;

    // Conversation history
    conversationContext.forEach(([inputText, responseText]) => {
      currentMessages.push({ role: "user", parts: inputText });
      currentMessages.push({ role: "model", parts: responseText });
    });

    // Chat and send prompt
    const chat = model.startChat({
      history: currentMessages,
      generationConfig: {
        maxOutputTokens: 100,
      },
    });

    // Send message and await response
    const result = await chat.sendMessage(prompt);

    if (
      result &&
      result.response &&
      result.response.candidates &&
      result.response.candidates.length > 0
    ) {
      const firstCandidate = result.response.candidates[0];

      const responseParts = firstCandidate.content.parts;

      let responseText = "";
      if (Array.isArray(responseParts) && responseParts.length > 0) {
        responseText = responseParts.map((part) => part.text).join(" ");
      }

      if (responseText) {
        conversationContext.push([prompt, responseText]);

        // Send response back
        return res.json({ response: responseText });
      } else {
        return res
          .status(500)
          .json({ message: "No response text received from the API" });
      }
    } else {
      return res
        .status(500)
        .json({ message: "Invalid API response format: no candidates found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { generateResponse };
