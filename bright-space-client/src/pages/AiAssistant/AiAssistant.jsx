import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const AiAssistant = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const userMessage = {
      text: inputValue,
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await fetch('https://bright-space-server-abid-hasan-rafis-projects.vercel.app/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: inputValue }),
      });

      const data = await response.json();
      const aiResponse = {
        text: data.response, // Use the response from the API
        sender: "ai",
      };

      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    } catch (error) {
      console.error('Error:', error);
      const errorResponse = {
        text: 'AI: Sorry, there was an error. Please try again.',
        sender: "ai",
      };
      setMessages((prevMessages) => [...prevMessages, errorResponse]);
    }

    setInputValue(""); // Clear input field
  };

  return (
    <div className=" p-5">
      <div className="max-w-4xl mx-auto p-2 lg:p-10 min-h-[300px] md:min-h-[500px] lg:min-h-[800px] rounded-lg flex flex-col  bg-[url('https://www.shutterstock.com/shutterstock/photos/362377472/display_1500/stock-photo-mobile-apps-pattern-362377472.jpg')]"
     
      >
        {/* Header */}
        <div className="text-center">
          <p className="bg-[#f1e3a3] inline-block p-2 rounded-full border">
            Using unlimited free plan
          </p>
          <p className="text-xl lg:text-5xl my-5 text-[#95844c]">Welcome, Saidul</p>
        </div>

        {/* Chat messages */}
        <div className="flex-1 p-5 rounded-lg border-t">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 my-2 rounded-md ${
                message.sender === "user"
                  ? "text-right bg-[#e5e7eb]"
                  : "bg-[#e5e7eb] text-left inline-block p-2"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        {/* Input field at the bottom */}
        <div className="border-2 bg-[#ffff] mt-5 flex items-center gap-5 rounded-2xl p-0 md:p-4">
          <input
            type="text"
            placeholder="Ask Ai a question or report..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="bg-[#ffff] p-3 rounded-2xl w-full h-12 focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="send-button p-2 rounded-lg mr-2 hover:bg-[#dddada]"
          >
            <i className="fa-regular fa-paper-plane text-lg lg:text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiAssistant;