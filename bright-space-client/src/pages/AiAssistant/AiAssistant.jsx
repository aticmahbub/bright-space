import { faComments } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "@fortawesome/fontawesome-free/css/all.css";

const AiAssistant = () => {
  return (
    <div className="max-w-4xl mx-auto bg-[#EDEBDF] p-10">
      <div className="text-center">
        <p className="bg-[#f1e3a3] inline-block p-2 rounded-full border">
          Using unlimited free plan.
        </p>
        <p className="text-5xl my-5">Welcome, Saidul</p>
      </div>

      <div className="border bg-[#dfd7b2] p-3 rounded-lg my-10">
        <p>Get started with an example below</p>
        <div className="flex justify-between gap-5 p-3">
          <p className="p-2 border h-16 w-64 bg-[#EDEBDF] rounded-xl font-medium flex justify-start items-center hover:bg-[#E5EEF7] hover:border-[#4c93d5]">
            How Ai chat work
          </p>
          <p className="p-2 border h-16 w-64 bg-[#EDEBDF] rounded-xl font-medium flex justify-start items-center hover:bg-[#E5EEF7] hover:border-[#4c93d5]">
            How Ai chat work
          </p>
          <p className="p-2 border h-16 w-64 bg-[#EDEBDF] rounded-xl font-medium flex justify-start items-center hover:bg-[#E5EEF7] hover:border-[#4c93d5]">
            How Ai chat work
          </p>
        </div>
      </div>

      <h5 className="my-5">
        <FontAwesomeIcon className="mr-2 text-[#12c4f0]" icon={faComments} />
        <span className="opacity-70 font-medium ">Your recent chats</span>
      </h5>
      <div className="grid grid-cols-3 gap-5 ">
        <div className="border border-[#c4c2b5] p-3 space-y-3 rounded-lg bg-[#f9f8f2] hover:bg-[#f5f5f5]">
          <i className="fa-regular fa-comments text-lg"></i>
          <p className="opacity-80">Clarifying unclear message please</p>
          <p className="text-sm opacity-70">7 hours ago</p>
        </div>
        <div className="border border-[#c4c2b5] p-3 space-y-3 rounded-lg bg-[#f9f8f2] hover:bg-[#f5f5f5]">
          <i className="fa-regular fa-comments text-lg"></i>
          <p className="opacity-80">Clarifying unclear message please</p>
          <p className="text-sm opacity-70">7 hours ago</p>
        </div>
        <div className="border border-[#c4c2b5] p-3 space-y-3 rounded-lg bg-[#f9f8f2] hover:bg-[#f5f5f5]">
          <i className="fa-regular fa-comments text-lg"></i>
          <p className="opacity-80">Clarifying unclear message please</p>
          <p className="text-sm opacity-70">7 hours ago</p>
        </div>
        <div className="border border-[#c4c2b5] p-3 space-y-3 rounded-lg bg-[#f9f8f2] hover:bg-[#f5f5f5]">
          <i className="fa-regular fa-comments text-lg"></i>
          <p className="opacity-80">Clarifying unclear message please</p>
          <p className="text-sm opacity-70">7 hours ago</p>
        </div>
        <div className="border border-[#c4c2b5] p-3 space-y-3 rounded-lg bg-[#f9f8f2] hover:bg-[#f5f5f5]">
          <i className="fa-regular fa-comments text-lg"></i>
          <p className="opacity-80">Clarifying unclear message please</p>
          <p className="text-sm opacity-70">7 hours ago</p>
        </div>
        <div className="border border-[#c4c2b5] p-3 space-y-3 rounded-lg bg-[#f9f8f2] hover:bg-[#f5f5f5]">
          <i className="fa-regular fa-comments text-lg"></i>
          <p className="opacity-80">Clarifying unclear message please</p>
          <p className="text-sm opacity-70">7 hours ago</p>
        </div>
      </div>
      <div className=" border-2 bg-[#ffff]  mt-10 flex items-center gap-5 rounded-2xl">
      
        <input type="text" placeholder="Ask Ai a question or report..." className="bg-[#ffff] p-3 rounded-2xl w-full h-20 focus:outline-none" />
        <button className="p-2 rounded-lg hover:bg-[#dddada]"><i className="fa-solid fa-fill-drip text-2xl"></i></button>
        <button className="p-2 rounded-lg mr-2 hover:bg-[#dddada]"><i className="fa-regular fa-paper-plane text-2xl"></i></button>

      </div>
    </div>
  );
};

export default AiAssistant;
