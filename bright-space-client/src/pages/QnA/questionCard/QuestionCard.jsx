import { useContext, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../providers/AuthProvider";

const QuestionCard = ({ question, setQuestions }) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const [answer, setAnswer] = useState("");
  const userId = user?.email;

  const handleVote = async (questionId, voteType) => {
    try {
      console.log("Sending vote request with:", { userId, voteType });
      const response = await axiosPublic.post(
        `/questions/${questionId}/vote`,
        {
          userId: userId,
          voteType: voteType,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // const updatedVotes = response.data.updatedQuestion.upVotes;

      if (response.data.modifiedCount) {
        setQuestions((prevQuestions) =>
          prevQuestions.map((question) =>
            question._id === questionId
              ? {
                  ...question,
                  upVotes:
                    voteType === "upvote"
                      ? (question.upVotes || 0) + 1
                      : (question.upVotes || 0) - 1,
                }
              : question
          )
        );
        console.log("successfully added vote");
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleAnswer = async (e, questionId) => {
    e.preventDefault();

    try {
      const newAnswer = {
        questionId: questionId,
        userEmail: userId,
        userName: user.displayName,
        answer: answer,
        date: new Date(),
      };

      const response = await axiosPublic.post(
        `/questions/${questionId}/answer`,
        newAnswer,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.modifiedCount) {
        console.log("successful");
        setAnswer("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white border rounded-lg shadow-md p-6">
      {/* User Info */}
      <div className="flex items-center space-x-4 mb-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="user-avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-bold text-blue-600">{question.name}</h3>
            <span className="bg-yellow-400 text-white px-2 py-1 text-xs rounded-md">
              Enlightened
            </span>
            <span className="text-gray-500 text-xs">Asked: April 19, 2023</span>
            <span className="text-blue-500 text-xs">In: Language</span>
          </div>
        </div>
      </div>

      {/* Question and Description */}
      <h2 className="text-xl font-semibold mb-2">{question.question}</h2>
      <p className="text-gray-700 mb-4">
        {question.answers ? "" : "No answer for this question"}
      </p>

      {/* Upvote/Downvote System */}
      <div className="flex items-center justify-between bg-[#ebe9e9] rounded-md">
        {/* Upvote Buttons */}
        <div className="flex items-center space-x-4 ml-5 bg-white px-3 py-2 rounded-md">
          <button onClick={() => handleVote(question._id, "upvote")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
          <span className="text-xl font-bold opacity-60">
            {question.upVotes}
          </span>
          <button onClick={() => handleVote(question._id, "downvote")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Answer and Views */}
        <div className="flex items-center space-x-4 px-5 py-2 rounded-xl">
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md">
            <svg
              className="h-5 w-5 opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3 5.4 2.7 11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
            </svg>
            <span className="hover:cursor-pointer hover:underline opacity-60">
              2 Answers
            </span>
          </div>
          {/* <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md">
            <svg
              className="h-5 w-5 opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4 142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-7.1 0-13.9-1.2-20.3-3.3-5.5-1.8-11.9 1.6-11.7 7.4.3 6.9 1.3 13.8 3.2 20.7 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1-5.8-.2-9.2 6.1-7.4 11.7 2.1 6.4 3.3 13.2 3.3 20.3z" />
            </svg>

            <span className="hover:cursor-pointer hover:underline opacity-60">
              3k Views
            </span>
          </div> */}
        </div>
      </div>

      {/* input field */}
      <form
        onSubmit={(e) => handleAnswer(e, question._id)}
        className="my-5 flex items-center gap-5 bg-[#f7f5f5]"
      >
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          type="text"
          className="w-full py-3 px-2 text-[#000] rounded-md bg-[#f7f5f5] outline-none"
          placeholder="Write your answer"
        />
        <button
          className="flex items-center gap-2 px-3 py-2 bg-[#ffff]"
          type="submit"
        >
          <span className="font-bold">Answer</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l176 0 0 176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default QuestionCard;
