import { useEffect, useState } from "react";
import FeaturedBlogger from "./Featured blogger/FeaturedBlogger";
import AllBlogs from "./allBlogs/AllBlogs";
import SideBlog from "./sideBlog/SideBlog";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);

  return (
    <div className="min-h-[550px] max-w-6xl mx-auto">
      <SideBlog></SideBlog>
      <h6 className="font-bold text-3xl my-5 p-3 lg:p-0">Featured Bloggers</h6>

      <FeaturedBlogger></FeaturedBlogger>

      <h6 className="font-bold text-3xl my-5 p-3 lg:p-0">Recent Posts</h6>
      {/* recent post  card container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-3 lg:p-0">
        {/* card */}

        {blogs.map((blog) => (
          <Link key={blog.id} to={`/viewBlog/${blog.id}`}>
            <div
              className=" rounded-md shadow-md bg-[#F7F8FA] text-gray-100"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt=""
                  className="w-full rounded-t-md h-64 bg-gray-500 transform transition-transform duration-300 hover:scale-125"
                />
              </div>
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-black hover:text-blue-600">
                    {blog.title}
                  </h2>
                  <p className="text-gray-700">{blog.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <AllBlogs></AllBlogs>
      {/* <CreateBlog></CreateBlog> */}



    </div>
  );
};

export default Blog;
