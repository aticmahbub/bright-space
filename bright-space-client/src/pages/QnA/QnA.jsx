import { useState } from "react";

const QnA = () => {
  const [upvotes, setUpvotes] = useState(0);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    if (upvotes > 0) setUpvotes(upvotes - 1);
  };

  return (
    <div className="max-w-7xl mx-auto flex items-start gap-5">
      <div className="w-[70%] flex flex-col gap-8">
        <div className="bg-white border rounded-lg shadow-md p-6 ">
          {/* User Info */}
          <div className="flex items-center space-x-4 mb-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="user-avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-blue-600">Ahmed Hassan</h3>
                <span className="bg-yellow-400 text-white px-2 py-1 text-xs rounded-md">
                  Enlightened
                </span>
                <span className="text-gray-500 text-xs">
                  Asked: April 19, 2023
                </span>
                <span className="text-blue-500 text-xs">In: Language</span>
              </div>
            </div>
          </div>

          {/* Question and Description */}
          <h2 className="text-xl font-semibold mb-2">
            How do native speakers tell I’m foreign based on my English alone?
          </h2>
          <p className="text-gray-700 mb-4">
            I’m a 19-year-old student from Malaysia. I’ve been introduced to the
            language at a very young age and I’m capable of conducting any type
            of conversation. However, some of my English-speaking friends on the
            internet didn’t take too...
          </p>

          {/* Upvote/Downvote System */}
          <div className="flex items-center justify-between bg-[#ebe9e9] rounded-md">
            {/* Upvote Buttons */}
            <div className="flex items-center space-x-4 ml-5  bg-white px-3 py-2 rounded-md">
              <button
                onClick={handleUpvote}
                className="text-gray-500 hover:text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              <span className="text-xl font-bold">{upvotes}</span>
              <button
                onClick={handleDownvote}
                className="text-gray-500 hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3 5.4 2.7 11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
                </svg>
                <span className="hover:cursor-pointer hover:underline">
                  2 Answers
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4 142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-7.1 0-13.9-1.2-20.3-3.3-5.5-1.8-11.9 1.6-11.7 7.4.3 6.9 1.3 13.8 3.2 20.7 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1-5.8-.2-9.2 6.1-7.4 11.7 2.1 6.4 3.3 13.2 3.3 20.3z" />
                </svg>

                <span className="hover:cursor-pointer hover:underline">
                  3k Views
                </span>
              </div>
            </div>
          </div>

          {/* input field  */}

          <form className="my-5 flex items-center gap-5 bg-[#f7f5f5]">
            <input
              type="text"
              className="w-full  py-3 px-2 text-[#000] rounded-md bg-[#f7f5f5] outline-none"
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
        <div className="bg-white border rounded-lg shadow-md p-6 ">
          {/* User Info */}
          <div className="flex items-center space-x-4 mb-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="user-avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-blue-600">Ahmed Hassan</h3>
                <span className="bg-yellow-400 text-white px-2 py-1 text-xs rounded-md">
                  Enlightened
                </span>
                <span className="text-gray-500 text-xs">
                  Asked: April 19, 2023
                </span>
                <span className="text-blue-500 text-xs">In: Language</span>
              </div>
            </div>
          </div>

          {/* Question and Description */}
          <h2 className="text-xl font-semibold mb-2">
            How do native speakers tell I’m foreign based on my English alone?
          </h2>
          <p className="text-gray-700 mb-4">
            I’m a 19-year-old student from Malaysia. I’ve been introduced to the
            language at a very young age and I’m capable of conducting any type
            of conversation. However, some of my English-speaking friends on the
            internet didn’t take too...
          </p>

          {/* Upvote/Downvote System */}
          <div className="flex items-center justify-between bg-[#ebe9e9] rounded-md">
            {/* Upvote Buttons */}
            <div className="flex items-center space-x-4 ml-5  bg-white px-3 py-2 rounded-md">
              <button
                onClick={handleUpvote}
                className="text-gray-500 hover:text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              <span className="text-xl font-bold">{upvotes}</span>
              <button
                onClick={handleDownvote}
                className="text-gray-500 hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3 5.4 2.7 11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
                </svg>
                <span className="hover:cursor-pointer hover:underline">
                  2 Answers
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4 142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-7.1 0-13.9-1.2-20.3-3.3-5.5-1.8-11.9 1.6-11.7 7.4.3 6.9 1.3 13.8 3.2 20.7 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1-5.8-.2-9.2 6.1-7.4 11.7 2.1 6.4 3.3 13.2 3.3 20.3z" />
                </svg>

                <span className="hover:cursor-pointer hover:underline">
                  3k Views
                </span>
              </div>
            </div>
          </div>

          {/* input field  */}

          <form className="my-5 flex items-center gap-5 bg-[#f7f5f5]">
            <input
              type="text"
              className="w-full  py-3 px-2 text-[#000] rounded-md bg-[#f7f5f5] outline-none"
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
        <div className="bg-white border rounded-lg shadow-md p-6 ">
          {/* User Info */}
          <div className="flex items-center space-x-4 mb-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="user-avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-blue-600">Ahmed Hassan</h3>
                <span className="bg-yellow-400 text-white px-2 py-1 text-xs rounded-md">
                  Enlightened
                </span>
                <span className="text-gray-500 text-xs">
                  Asked: April 19, 2023
                </span>
                <span className="text-blue-500 text-xs">In: Language</span>
              </div>
            </div>
          </div>

          {/* Question and Description */}
          <h2 className="text-xl font-semibold mb-2">
            How do native speakers tell I’m foreign based on my English alone?
          </h2>
          <p className="text-gray-700 mb-4">
            I’m a 19-year-old student from Malaysia. I’ve been introduced to the
            language at a very young age and I’m capable of conducting any type
            of conversation. However, some of my English-speaking friends on the
            internet didn’t take too...
          </p>

          {/* Upvote/Downvote System */}
          <div className="flex items-center justify-between bg-[#ebe9e9] rounded-md">
            {/* Upvote Buttons */}
            <div className="flex items-center space-x-4 ml-5  bg-white px-3 py-2 rounded-md">
              <button
                onClick={handleUpvote}
                className="text-gray-500 hover:text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              <span className="text-xl font-bold">{upvotes}</span>
              <button
                onClick={handleDownvote}
                className="text-gray-500 hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3 5.4 2.7 11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
                </svg>
                <span className="hover:cursor-pointer hover:underline">
                  2 Answers
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4 142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-7.1 0-13.9-1.2-20.3-3.3-5.5-1.8-11.9 1.6-11.7 7.4.3 6.9 1.3 13.8 3.2 20.7 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1-5.8-.2-9.2 6.1-7.4 11.7 2.1 6.4 3.3 13.2 3.3 20.3z" />
                </svg>

                <span className="hover:cursor-pointer hover:underline">
                  3k Views
                </span>
              </div>
            </div>
          </div>

          {/* input field  */}

          <form className="my-5 flex items-center gap-5 bg-[#f7f5f5]">
            <input
              type="text"
              className="w-full  py-3 px-2 text-[#000] rounded-md bg-[#f7f5f5] outline-none"
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
      </div>
      <div className="w-[30%]">
        <button className="w-full bg-[#f7ab3f] text-white font-medium py-2 rounded-md hover:bg-[#FF9500]">
          Ask A Question
        </button>

        {/* Stats Cards */}
        <div className="bg-white shadow-md rounded-lg mt-4 p-4">
          <div className="text-sm border py-2 flex items-center">
            <div className="h-16 w-[2px] bg-[#2D6FF7]"></div>

            <div className="px-10 text-center w-full">
              <h2 className="text-[#2D6FF7]">Questions</h2>
              <p className="font-bold text-xl">21</p>
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
              <h2 className="text-[#1FAE5B]">Best Answers</h2>
              <p className="font-bold text-xl">12</p>
            </div>
          </div>

          <div className="text-sm  border py-2 flex flex-row-reverse items-center">
            <div className="h-16 w-[2px] bg-[#FF9500]"></div>

            <div className="px-10 text-center w-full">
              <h2 className="text-[#FF9500]">Users</h2>
              <p className="font-bold text-xl">120</p>
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
                <h4  className="font-medium">How do native speakers tell?</h4>
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
                <h4 className="font-medium">How do native speakers tell I’m foreign based on my English alone?</h4>
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
  );
};

export default QnA;
