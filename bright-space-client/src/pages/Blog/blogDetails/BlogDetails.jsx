import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axiosPublic.get(`/blogDetails/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto min-h-[350px] my-8">
      <div className="">
        <h1 className="text-start text-4xl font-medium">{blog.title}</h1>
        <div className="p-5 flex items-center gap-5 my-5">
          <img
            alt="Blogger"
            className="w-12 h-12 rounded-full ring-4 object-cover"
            src={blog.authorProfile}
          />
          <div>
            <p className="text-black font-semibold opacity-80">{blog.authorName}</p>
            <p className="opacity-70">{blog.time}</p>
          </div>
        </div>
        <div>
          <img className="h-[500px] w-full object-cover rounded-lg shadow-md" src={blog.image} alt="blog image" />

          <h2 className="my-10 text-xl  opacity-70">
            {blog.metaDescription}
          </h2>

          <h2 className="mb-10 text-xl  opacity-70">
            {blog.description}
          </h2>
          
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
