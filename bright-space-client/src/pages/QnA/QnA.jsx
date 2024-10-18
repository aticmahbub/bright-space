import { useEffect, useState } from "react";
import PostQ from "./postQuestions/PostQ";
import QnABanner from "./qnaBanner/QnABanner";

import QuestionCard from "./questionCard/QuestionCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const QnA = () => {
  const axiosPublic = useAxiosPublic();

  const [questions, setQuestions] = useState([]);


  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axiosPublic.get("/questions");
        setQuestions(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestions();
  }, [axiosPublic]);

  return (
    <div>
      <QnABanner></QnABanner>
      <div className="max-w-7xl mx-auto flex items-start gap-5">
        <div
          className="w-[70%] flex flex-col gap-8 overflow-y-auto"
          style={{ height: "calc(100vh - 100px)", overflowY: "scroll" }}
        >
          {questions.map((question) => (
            <QuestionCard
              key={question._id}
              question={question}
              setQuestions={setQuestions}
            ></QuestionCard>
          ))}
        </div>

        <div className="w-[30%]">
          <PostQ></PostQ>

          {/* Stats Cards */}
          <div className="bg-white shadow-md rounded-lg mt-4 p-4">
            <div className="text-sm border py-2 flex items-center">
              <div className="h-16 w-[2px] bg-[#2D6FF7]"></div>

              <div className="px-10 text-center w-full">
                <h2 className="text-[#2D6FF7]">Questions</h2>
                <p className="font-bold text-xl">{questions.length}</p>
              </div>
            </div>

            <div className="text-sm  border py-2 flex flex-row-reverse items-center">
              <div className="h-16 w-[2px] bg-[#F05555]"></div>

              <div className="px-10 text-center w-full">
                <h2 className="text-[#F05555]">Answers</h2>
                <p className="font-bold text-xl">71</p>
              </div>
            </div>

            <div className="text-sm border py-2 flex items-center">
              <div className="h-16 w-[2px] bg-[#1FAE5B]"></div>

              <div className="px-10 text-center w-full">
                <h2 className="text-[#1FAE5B]">Users</h2>
                <p className="font-bold text-xl">121</p>
              </div>
            </div>
          </div>

          {/* top answers */}

          <div className="border-b my-5 p-4 bg-white">
            <h3 className=" inline-block font-medium">Top Answer</h3>
            <div className="border-2 w-24 border-b-text_color_1"></div>
            <div className="flex flex-col gap-8">
              {/* cards */}
              <div className="flex items-start  gap-5 border-b py-5">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="user-avatar"
                  className="w-6 h-6 rounded-full"
                />
                <div>
                  <h4 className="font-medium">How do native speakers tell?</h4>
                  <div className="flex items-center gap-2  py-2 rounded-md opacity-50">
                    <svg
                      className="h-3 w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3 5.4 2.7 11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
                    </svg>
                    <span className="hover:cursor-pointer hover:underline">
                      2 Answers
                    </span>
                  </div>
                </div>
              </div>
              {/* cards */}
              <div className="flex items-start  gap-5 border-b py-5">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="user-avatar"
                  className="w-6 h-6 rounded-full"
                />
                <div>
                  <h4 className="font-medium">
                    How do native speakers tell I’m foreign based on my English
                    alone?
                  </h4>
                  <div className="flex items-center gap-2  py-2 rounded-md opacity-50">
                    <svg
                      className="h-3 w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3 5.4 2.7 11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
                    </svg>
                    <span className="hover:cursor-pointer hover:underline">
                      2 Answers
                    </span>
                  </div>
                </div>
              </div>
              {/* cards */}
              <div className="flex items-start gap-5 border-b py-5">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="user-avatar"
                  className="w-6 h-6 rounded-full"
                />
                <div>
                  <h4 className="font-medium">How do native speakers tell?</h4>
                  <div className="flex items-center gap-2  py-2 rounded-md opacity-50">
                    <svg
                      className="h-3 w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3 5.4 2.7 11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
                    </svg>
                    <span className="hover:cursor-pointer hover:underline">
                      2 Answers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnA;
