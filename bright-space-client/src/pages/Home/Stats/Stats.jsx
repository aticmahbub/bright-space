// import { div } from "framer-motion/client";

const Stats = () => {
  return (
    <div className="py-48">
      <div className="bg-[#ebf8fe] px-4 md:px-[100px] py-10 md:py-[90px] w-full">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <img
              src="https://egrad.wpengine.com/wp-content/uploads/2022/12/home-2-image-1.webp"
              alt="Achievement"
              className="w-[250px] md:w-[400px] h-auto md:-mt-48 rounded-lg"
            />
          </div>

          {/* Text and Stats Section */}
          <div className="w-full px-4 md:px-6 space-y-4">
            <h2 className="text-red-500 font-semibold text-lg md:text-xl text-[#eb3455]">
              Why Ours
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold">
              Our Best Achievements
            </h1>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Commodo sed egestas egestas fringilla phasellus faucibus
              scelerisque eleifend. Mauris a diam maecenas sed egestas sed sed
              risus pretium quam vulputate. Massa tincidunt nunc pulvinar sapien
              et.
            </p>

            {/* Stats Section */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-center text-lg md:text-xl font-bold pt-6 md:pt-12">
              <div className="border-b md:border-b-0 md:border-r-2 md:pr-8 pb-6 md:py-6">
                <h2 className="text-5xl md:text-7xl font-bold hover:text-[#eb3455] cursor-default">55k</h2>
                <p className="text-gray-500 text-sm md:text-base">
                  University Scholars
                </p>
              </div>
              <div className="border-b md:border-b-0 md:border-r-2 md:pr-8 pb-6 md:py-6">
                <h2 className="text-5xl md:text-7xl font-bold hover:text-[#eb3455] cursor-default">17k</h2>
                <p className="text-gray-500 text-sm md:text-base">
                  Professional Educators
                </p>
              </div>
              <div className="py-6">
                <h2 className="text-5xl md:text-7xl font-bold hover:text-[#eb3455] cursor-default">2k+</h2>
                <p className="text-gray-500 text-sm md:text-base">
                  Worldwide Branches
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;