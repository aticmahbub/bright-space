
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const AllBlogs = ({blogs}) => {
  return (
    <div>
      <h6 className="font-bold text-3xl my-5">All Blog Posts</h6>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* cards */}
        {blogs?.slice(0).map((blog) => (
          <div
            key={blog?._id}
            className="flex flex-col lg:flex-row  gap-5 rounded-md shadow-md p-4 lg:p-0"
          >
            <div className="w-full lg:w-64 h-36 overflow-hidden flex-shrink-0">
              <img
                className="object-cover w-full h-full rounded-md"
                src={blog.image}
                alt={blog.title}
              />
            </div>

            {/* text section */}
            <div className="flex flex-col justify-between p-1">
              <p className="font-bold text-base lg:text-lg">{blog.title.split(" ").slice(0, 7).join(" ")}</p>
              <div className="flex justify-between items-center px-2">
                <p className="text-gray-600">
                  By <span>{blog.authorName.split(" ").slice(0, -1).join(" ")}</span>
                </p>
                <p className="text-gray-400 ">{blog.time}</p>
                <Link to={`/blogDetails/${blog._id}`}>
                  <button
                    className="py-2 
                  "
                  >
                    <FiArrowUpRight className="text-2xl text-[#FF9500] hover:text-[#f9a735] hover:rotate-45 duration-500" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <button
          className="
          text-green-500 
           px-8 py-2 
         text-[#f7ab3f] 
          hover:text-white 
           border border-[#f7ab3f] 
           font-medium 
           rounded-md 
          hover:bg-[#f1ae50]"
        >
          View More Posts
        </button>
      </div>
    </div>
  );
};

export default AllBlogs;
