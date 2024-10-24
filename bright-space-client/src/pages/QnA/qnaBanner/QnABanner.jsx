const QnABanner = () => {
  return (
    <div className="relative w-full h-[450px] mb-10">
      {/* Background Image */}
      <img
        src="https://images.ctfassets.net/f1fikihmjtrp/3QykWtt2ygeMXyPYDIaDyM/4038f21fd250f093927bacea54469ef5/Q_A-Banner?q=80&h=250"
        alt="Banner Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Custom Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.1) 90%, rgba(0, 0, 0, 0.8) 100%)',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between gap-10 h-full px-8 text-white max-w-7xl mx-auto">
        {/* Text Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Share & grow the world{"'"}s knowledge!
          </h1>
          <p className="mb-6 opacity-80">
            We want to connect the people who have knowledge to the people who
            need it, to bring together people with different perspectives so
            they can understand each other better, and to empower everyone to
            share their knowledge.
          </p>
        </div>

        {/* Button Section */}
        <div className="w-full text-end mt-20">
        <button className="px-10 bg-[#3f54f7] text-white font-medium py-2 rounded-md hover:bg-[#45caf3]">
          Create a account
        </button>
        </div>
      </div>
    </div>
  );
};

export default QnABanner;
