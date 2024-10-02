import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import useAuth from "../../hooks/useAuth";

const AiAssistant = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const {user} =useAuth()

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;
    setIsTyping(true);
    if (headerShow) {
      setHeaderShow(false);
    }

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
    setIsTyping(false); // Set typing indicator back to false
  };

  console.log(headerShow);

  return (
    <div className=" p-5">
      <div className="max-w-4xl mx-auto p-2 lg:p-10 min-h-[300px] md:min-h-[500px] lg:min-h-[800px] rounded-lg flex flex-col  bg-[url('https://www.shutterstock.com/shutterstock/photos/362377472/display_1500/stock-photo-mobile-apps-pattern-362377472.jpg')]"
     
      >
        {/* Header */}
        <div className="text-center">
          <p className="bg-[#f1e3a3] inline-block p-2 rounded-full border">
            Using unlimited free plan
          </p>
          <p className="text-xl lg:text-5xl my-5 text-[#95844c]">Welcome, {user?.displayName}</p>
        </div>

          {/* Chat messages */}
          <div className="flex-1 p-5 rounded-lg overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)', scrollbarWidth: 'revert-layer', scrollbarColor: '#FFCB80 #FFECD6' }} ref={(el) => { if (el) { el.scrollTop = el.scrollHeight; } }}>
            <div className="flex flex-col space-y-4">
              {messages.map((message, index) => (
                <>

                  <ReactMarkdown
                    key={index}
                    className={`py-4 px-6 text-lg font-medium ${message.sender === "user"
                      ? "text-l bg-primary-400 rounded-l-3xl rounded-t-3xl self-end mr-10 text-white"
                      : "bg-primary-50 text-left rounded-r-3xl rounded-t-3xl self-start w-11/12 ml-10 text-horizontal_line_color"
                      }`}
                  >
                    {message.text}
                  </ReactMarkdown>
                  {message.sender === "user" ? <FaUser size={35} className="text-primary-300 self-end" /> : <FaRobot size={40} className="text-primary-300" />}
                </>
              ))}
            </div>
            <div>{isTyping ?
              <div className="mt-4">
                <p className="py-4 px-6 bg-primary-50 text-left rounded-r-3xl rounded-t-3xl self-start w-11/12 ml-10 text-horizontal_line_color">AI is typing...</p>
                <FaRobot size={40} className="text-primary-300" />
              </div> : ""}
            </div>
          </div>

          {/* Input field at the bottom */}
          <div className="border-2 border-primary-400 bg-[#ffff] flex items-center gap-5 rounded-2xl p-0 md:p-1 mt-5">
            <input
              type="text"
              placeholder="Ask Ai a question or report..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
              className="bg-[#ffff] p-3 rounded-2xl w-full h-12 focus:outline-none"
            />
            <button
              onClick={handleSendMessage}
              onContextMenu={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="send-button p-2 rounded-lg mr-2 hover:bg-[#dddada]"
            >
              <i className="fa-regular fa-paper-plane text-lg lg:text-2xl text-primary-400"></i>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AiAssistant;