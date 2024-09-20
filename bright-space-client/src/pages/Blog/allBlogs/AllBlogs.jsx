import { useEffect, useState } from "react";

const AllBlogs = () => {
  const [AllBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    fetch("/allBlogs.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => setAllBlogs(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(AllBlogs);

  return (
    <div>
       <h6 className="font-bold text-3xl my-5">All Blog Posts</h6>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* cards */}
        {AllBlogs.map((blog) => (
          <div
            key={blog?.id}         
            className="flex flex-col lg:flex-row items-center gap-5 rounded-md shadow-md p-4 lg:p-0"
          >
            <div className="w-full lg:w-64 h-36 overflow-hidden flex-shrink-0">
              <img
                className="object-cover w-full h-full rounded-md"
                src={blog.image}
                alt={blog.Title}
              />
            </div>

            {/* text section */}
            <div className="flex flex-col gap-8">
              <p className="font-bold text-base lg:text-lg">{blog.Title}</p>
              <div className="flex justify-between lg:justify-normal items-center gap-5">
                <p className="text-gray-600">
                  By <span>{blog.authorName}</span>
                </p>
                <p className="text-gray-400 ">{blog.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-10">
      <button className="text-green-500 font-bold px-12 py-4 rounded-3xl border border-green-400 hover:bg-green-400 hover:text-white">View More Posts</button>
      </div>
    </div>
  );
};

export default AllBlogs;
