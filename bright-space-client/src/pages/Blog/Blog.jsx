import { useEffect, useState } from "react";
import FeaturedBlogger from "./Featured blogger/FeaturedBlogger";
import AllBlogs from "./allBlogs/AllBlogs";
import SideBlog from "./sideBlog/SideBlog";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import CreateBlog from "./CreateBlog/CreateBlog";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure(); 
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);

  return (
    <div>
      <div className="min-h-[550px] max-w-6xl mx-auto">
        <SideBlog />
        <h6 className="font-bold text-3xl my-5 p-3 lg:p-0">
          Featured Bloggers
        </h6>
        <FeaturedBlogger />
        <h6 className="font-bold text-3xl my-5 p-3 lg:p-0">Recent Posts</h6>

        {/* Recent post card container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-3 lg:p-0">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-md shadow-md bg-[#F7F8FA] text-gray-100"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
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
          ))}
        </div>

        <AllBlogs />
      </div>

      <div className="relative h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#edf4fb47] via-[#ef8f5314] to-[#fd620217]">
          <div className="flex justify-center items-center h-full text-black">
            <div>
              <h6 className="font-semibold text-5xl text-center leading-[1.75]">
                Turn your passion into words <br />{" "}
                <span className="inline-block bg-gradient-to-r from-[#183979] to-[#FF6600] text-transparent bg-clip-text">
                  create a blog
                </span>
              </h6>
              <p className="mb-8 text-center">
                Complete the form and post your blog to inspire others with your
                unique perspective.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={onOpen}
                  className="px-12 py-2 text-white border border-[#f7ab3f]  font-medium  rounded-md bg-[#FF9500]  hover:bg-[#efaf55]"
                >
                  Create a Blog
                </button>
              </div>

              {/* Modal */}
              <Modal onClose={onClose} size={"5xl"} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader textAlign={"center"}  marginY={4}>Create Your Blog</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <CreateBlog></CreateBlog>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="red" onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
