import { useContext, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../providers/AuthProvider";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Box,
  Flex,
  Text,
  Avatar,
} from "@chakra-ui/react";

const QuestionCard = ({ question, setQuestions }) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const [answer, setAnswer] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(null);

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
      alert(error.response.data.message);
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
         setQuestions((prevQuestions) =>
        prevQuestions.map((question) =>
          question._id === questionId
            ? {
                ...question,
                answers: [...question.answers, newAnswer], // Add the new answer to the existing answers
              }
            : question
        )
      );

      setAnswer("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenModal = (question) => {
    setSelectedQuestion(question);
    onOpen();
  };

  return (
    <div className="bg-white border rounded-lg shadow-md p-6">
      {/* User Info */}
      <div className="flex items-center space-x-4 mb-3">
        <img
          src={
            user.photoURL
              ? user.photoURL
              : "https://static.thenounproject.com/png/561365-200.png"
          }
          className="w-8 h-8 rounded-full"
        />
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-bold text-blue-600">{question.name}</h3>
            <span className="bg-yellow-400 text-white px-2 py-1 text-xs rounded-md">
              Enlightened
            </span>

            <span className="text-blue-500 text-xs">In: English</span>
          </div>
        </div>
      </div>

      {/* Question and Description */}
      <h2 className="text-xl font-semibold mb-2">{question.question}</h2>
      <div className="text-gray-700 mb-4">
        {question?.answers?.length > 0 && (
          <p className="opacity-90 font-medium">
           Answer: <span className=" opacity-70"> {question.answers[0].answer}</span>
          </p>
        )}
      </div>

      {/* Upvote/Downvote System */}
      <div className="flex items-center justify-between  rounded-md">
        {/* Upvote Buttons */}
        <div className="flex items-center space-x-4 ml-5 bg-[#e5eaf0] px-3 py-2 rounded-md">
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
          <div className="flex items-center gap-2  px-3 py-2 rounded-md">
            {/* Trigger the modal */}
            <Button onClick={() => handleOpenModal(question)}>
              <div className="flex items-center gap-2  px-3 py-2 rounded-md opacity-70">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3 5.4 2.7 11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
                </svg>
                <span className="hover:cursor-pointer hover:underline">
                  More Answers {question?.answers?.length}
                </span>
              </div>
            </Button>
            <>
              <Modal onClose={onClose} size={"6xl"} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader textAlign={"center"}>
                    <span className="opacity-60">
                      {selectedQuestion?.question}
                    </span>
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {selectedQuestion?.answers?.length ? (
                      selectedQuestion.answers.map((answer, index) => (
                        <Box
                          key={index}
                          border="1px"
                          borderColor="gray.200"
                          p={5}
                          borderRadius="md"
                          shadow="md"
                          bg="white"
                          maxW="700px"
                          mx="auto"
                          mb={6}
                        >
                          <Flex alignItems="center" mb={2}>
                            <Avatar size="sm" name={answer.userName} mr={3} />
                            <Box className="flex justify-between w-full">
                              <Text fontWeight="semibold">
                                {answer.userName}
                              </Text>

                              <Text fontSize="sm" color="gray.500">
                                {new Date(answer.date).toLocaleString()}
                              </Text>
                            </Box>
                          </Flex>

                          <Text
                            className="opacity-50"
                            fontSize="md"
                            fontWeight="medium"
                            mb={2}
                          >
                            {answer?.answer}
                          </Text>
                        </Box>
                      ))
                    ) : (
                      <p className="text-center">
                        No answer for this question.
                      </p>
                    )}
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
          </div>
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
