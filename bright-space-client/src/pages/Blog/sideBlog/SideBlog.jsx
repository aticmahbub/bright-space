import { FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const SideBlog = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
      {/* left side  */}
      {blogs.slice(0, 1).map((blog) => (
        <div key={blog._id} className="space-y-8 p-4 lg:p-0">
          <img
            className="object-cover w-full rounded-md"
            src={blog.image}
            alt=""
          />
          <div>
            <p className="font-semibold text-xl">{blog.title}</p>
            <div>
              <div className="py-4">
                <div className="flex gap-5">
                  <img
                    alt=""
                    className="w-16 h-16  object-cover rounded-lg bg-gray-400"
                    src={blog.authorProfile}
                    style={{
                      clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                    }}
                  />
                  <div className="flex items-center justify-between  w-full gap-2 lg:gap-10">
                    <p className="text-black font-semibold">
                      By {blog.authorName.split(" ").slice(0, -1).join(" ")}
                    </p>
                    <p className="text-gray-400">{blog.time}</p>
                    <Link to={`/blogDetails/${blog._id}`}>
                      <button className="border px-5 py-2 bg-[#E2E8F0]  rounded-md hover:bg-[#d2e0f2] hover:underline">
                        <FaArrowRight className="text-[#FF9500]" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* right side  */}
      <div className="grid grid-cols-1 gap-4">
        {blogs?.slice(1, 4).map((blog) => (
          <div
            key={blog._id}
            className="flex flex-col lg:flex-row items-start lg:items-stretch justify-between gap-5 rounded-md shadow-md p-4 lg:p-0"
          >
            {/* Image Section */}
            <div className="w-full lg:w-60 h-40 lg:h-full overflow-hidden flex-shrink-0">
              <img
                src={blog.image}
                alt="Blues must treat Qualifiers like playoffs, Allen says"
                className="object-cover w-full h-full rounded-md"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between h-full p-1">
              {/* Title */}
              <p className="font-bold text-lg mb-1">{blog.title}</p>

              {/* Meta Information */}
              <div className="flex items-center justify-between w-full text-sm text-gray-600">
                <p className="w-32">
                  By{" "}
                  <span className="font-medium">
                    {blog.authorName.split(" ").slice(0, -1).join(" ")}
                  </span>
                </p>
                <p className="text-gray-400">{blog.time}</p>
                <Link to={`/blogDetails/${blog._id}`}>
                  <button
                    className="py-2 
                  "
                  >
                    <FiArrowUpRight
                     className="text-2xl text-[#FF9500] hover:text-[#f9a735] hover:rotate-45 duration-500" />
                  </button>
                </Link>
                
              </div>
              {/* <div className="flex justify-end">
                <Link to={`/blogDetails/${blog._id}`}>
                  <button
                    className="px-5 py-2 
                  "
                  >
                    <FaArrowRight className="text-[#FF9500]" />
                  </button>
                </Link>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBlog;
