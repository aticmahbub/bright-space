import { useState } from 'react';
import axios from 'axios';

const QuizForm = () => {
  const [questionText, setQuestionText] = useState("");
  const [answerOptions, setAnswerOptions] = useState([
    { answerText: "", isCorrect: false },
    { answerText: "", isCorrect: false },
    { answerText: "", isCorrect: false },
    { answerText: "", isCorrect: false },
  ]);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const handleOptionChange = (index, value) => {
    const newOptions = [...answerOptions];
    newOptions[index].answerText = value;
    setAnswerOptions(newOptions);
  };

  const handleCorrectAnswer = (index) => {
    const newOptions = answerOptions.map((option, idx) => ({
      ...option,
      isCorrect: idx === index,
    }));
    setAnswerOptions(newOptions);
    setCorrectAnswer(index);
  };

  const handleSubmit = async () => {
    if (!questionText || answerOptions.some(option => option.answerText === "") || correctAnswer === null) {
      alert("Please fill out all fields.");
      return;
    }

    const newQuestion = {
      questionText,
      answerOptions
    };

    try {
      // Send data to backend using Axios
      await axios.post("https://bright-space-server.vercel.app/quiz", newQuestion);

      // Success: Reset the form
      alert("Quiz question added successfully!");
      setQuestionText("");
      setAnswerOptions([
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: false },
      ]);
      setCorrectAnswer(null);
    } catch (error) {
      // Handle any errors
      console.error("Error adding quiz question", error);
      alert("Failed to add quiz question. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Create a New Quiz Question</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Question</label>
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9500]"
          placeholder="Enter the question"
        />
      </div>

      <div className="mb-4">
        {answerOptions.map((option, index) => (
          <div key={index} className="mb-2">
            <label className="block text-gray-700 font-medium mb-1">
              Option {index + 1}
            </label>
            <input
              type="text"
              value={option.answerText}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9500]"
              placeholder={`Enter option ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => handleCorrectAnswer(index)}
              className={`mt-1 px-4 py-2 rounded-lg ${
                correctAnswer === index ? "bg-[#FF9500] text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {correctAnswer === index ? "Correct Answer" : "Mark as Correct"}
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 w-full px-4 py-2 bg-[#FF9500] text-white font-bold rounded-lg hover:bg-[#ff7a00] transition-colors duration-300"
      >
        Submit Question
      </button>
    </div>
  );
};

export default QuizForm;
