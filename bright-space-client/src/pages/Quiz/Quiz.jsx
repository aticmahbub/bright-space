import { useEffect, useState } from 'react';
import axios from 'axios';

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [showModal, setShowModal] = useState(false);

  // Fetch quiz data from the backend
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/quiz'); // API endpoint
        setQuizzes(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load quiz data');
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  // Handle option selection
  const handleOptionSelect = (questionIndex, optionIndex, isCorrect) => {
    if (!answeredQuestions[questionIndex]) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionIndex]: optionIndex,
      }));

      setAnsweredQuestions((prev) => ({
        ...prev,
        [questionIndex]: isCorrect, // Track if the answer is correct or not
      }));

      // Check if all questions have been answered and show modal
      if (Object.keys(answeredQuestions).length + 1 === quizzes.length) {
        setShowModal(true);
      }
    }
  };

  // Reset the quiz
  const resetQuiz = () => {
    setSelectedAnswers({});
    setAnsweredQuestions({});
    setShowModal(false);
  };

  // Calculate progress
  const calculateProgress = () => {
    const totalAnswered = Object.keys(answeredQuestions).length;
    return (totalAnswered / quizzes.length) * 100;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-[#FF9500] font-bold text-2xl">Loading quizzes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-600 font-bold text-2xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Interactive Quiz</h2>

      {/* Progress bar */}
      <div className="w-full bg-gray-300 rounded-full h-4 mb-6">
        <div
          className="bg-[#FF9500] h-4 rounded-full"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>

      {quizzes.map((quiz, questionIndex) => (
        <div key={questionIndex} className="mb-8">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              {questionIndex + 1}. {quiz.questionText}
            </h3>
          </div>

          <div className="space-y-2">
            {quiz.answerOptions.map((option, optionIndex) => {
              const isSelected = selectedAnswers[questionIndex] === optionIndex;
              const isCorrect = option.isCorrect;
              const hasBeenAnswered = answeredQuestions[questionIndex] !== undefined;

              return (
                <div
                  key={optionIndex}
                  onClick={() => handleOptionSelect(questionIndex, optionIndex, isCorrect)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 transform
                    ${isSelected ? (isCorrect ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500') : ''}
                    ${!hasBeenAnswered && !isSelected ? 'bg-gray-100 border-gray-300' : ''}
                    ${hasBeenAnswered ? 'cursor-not-allowed' : 'hover:bg-blue-50 hover:scale-105'}`}
                  style={hasBeenAnswered ? { pointerEvents: 'none' } : {}}
                >
                  {option.answerText}
                  {isSelected && (
                    <span className={`ml-4 font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                      {isCorrect ? 'Correct' : 'Wrong'}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className="mt-6">
        <button
          onClick={resetQuiz}
          className="w-full px-4 py-2 bg-[#FF9500] text-white font-bold rounded-lg hover:bg-[#ff7a00] transition-colors duration-300"
        >
          Reset Quiz
        </button>
      </div>

      {/* Completion Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Congratulations!</h2>
            <p className="text-lg text-gray-600 mb-6">You have completed the quiz.</p>
            <button
              onClick={resetQuiz}
              className="w-full px-4 py-2 bg-[#FF9500] text-white font-bold rounded-lg hover:bg-[#ff7a00] transition-colors duration-300"
            >
              Reset Quiz
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="w-full px-4 py-2 mt-4 bg-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-300 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
