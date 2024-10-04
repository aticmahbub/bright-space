import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";

const CreateCourse = () => {
  const axiosPublic = useAxiosPublic();
  const {user} = useAuth()
  console.log(user);

  // State to store form data
  const [formData, setFormData] = useState({
    thumbnail: null,
    title: "",
    short_description: "",
    long_description: "",
    price: "",
    category: "",
    subCategory: "",
    difficulty: "",
    features: "",
    tags: "",
    accessibility: "",
    lessonVideo: null,
    videoThumbnail: null,
    image_url: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lessonName: "",
    lessonDescription: "",
    posted_by: user?.displayName,
    author_image :user?.photoURL,
    author_email: user?.email
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value, files } = e.target;

    // For file inputs, we use files[0]
    setFormData((prev) => ({
      ...prev,
      [id]: files ? files[0] : value,
    }));
  };

  // Handle form submission
  const handleCreateCourse = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosPublic.post("/courses", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("The data was successfully sent", response.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  return (
    <div className="max-w-[1250px] mx-auto">
      <div className="flex items-center justify-center bg-white">
        <form
          onSubmit={handleCreateCourse}
          className="p-10 rounded-lg w-full max-w-[950px] mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Create New Course
          </h2>

          {/* Course Thumbnail */}
          <Flex alignItems="center" className="mb-4">
            <label className="text-sm font-bold mb-2 opacity-70 w-[30%]">
              Course Thumbnail
            </label>
            <input
              type="file"
              id="thumbnail"
              onChange={handleInputChange}
              className="border border-red-500 p-2 rounded w-[70%] bg-[#F5F8FA] hover:bg-white"
            />
          </Flex>

          {/* Course Title */}
          <Flex alignItems="center" className="mb-4">
            <label className="block opacity-70 text-sm font-bold mb-2 w-[30%]">
              Course Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleInputChange}
              className="border border-red-500 p-2 rounded w-[70%] bg-[#F5F8FA] hover:bg-white"
            />
          </Flex>

          {/* Short Description */}
          <Flex alignItems="center" className="mb-4">
            <label className="block opacity-70 text-sm font-bold mb-2 w-[30%]">
              Short Description
            </label>
            <input
              id="short_description"
              value={formData.short_description}
              onChange={handleInputChange}
              className="border border-red-500 p-2 rounded w-[70%] bg-[#F5F8FA] hover:bg-white"
            />
          </Flex>

          {/* Long Description */}
          <Flex alignItems="center" className="mb-4">
            <label className="block opacity-70 text-sm font-bold mb-2 w-[30%]">
              Long Description
            </label>
            <textarea
              id="long_description"
              value={formData.long_description}
              onChange={handleInputChange}
              className="border border-red-500 p-2 rounded w-[70%] bg-[#F5F8FA] hover:bg-white"
              rows="4"
            ></textarea>
          </Flex>

          {/* Course Price */}
          <Flex alignItems="center" className="mb-4">
            <label className="block opacity-70 text-sm font-bold mb-2 w-[30%]">
              Course Price
            </label>
            <input
              type="number"
              id="price"
              value={formData.price}
              onChange={handleInputChange}
              className="border border-red-500 p-2 rounded w-[70%] bg-[#F5F8FA] hover:bg-white"
              step="0.01"
            />
          </Flex>

          {/* Category */}
          <Flex alignItems="center" className="mb-4">
            <label className="block opacity-70 text-sm font-bold mb-2 w-[30%]">
              Course Category
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={handleInputChange}
              className="border border-red-500 p-2 rounded w-[70%] bg-[#F5F8FA] hover:bg-white"
            >
              <option value="">Select a category</option>
              <option value="web-dev">Web Development</option>
              <option value="design">Design</option>
            </select>
          </Flex>

          {/* Sub-Category */}
          <Flex alignItems="center" className="mb-4">
            <label className="block opacity-70 text-sm font-bold mb-2 w-[30%]">
              Course Sub-Category
            </label>
            <input
              type="text"
              id="subCategory"
              value={formData.subCategory}
              onChange={handleInputChange}
              className="border border-red-500 p-2 rounded w-[70%] bg-[#F5F8FA] hover:bg-white"
            />
          </Flex>

          {/* Difficulty */}
          <Flex alignItems="center" className="mb-4">
            <label className="block opacity-70 text-sm font-bold mb-2 w-[30%]">
              Course Difficulty Level
            </label>
            <select
              id="difficulty"
              value={formData.difficulty}
              onChange={handleInputChange}
              className="border border-red-500 p-2 rounded w-[70%] bg-[#F5F8FA] hover:bg-white"
            >
              <option value="">Select a level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </Flex>

          {/* Features */}
          <Flex alignItems="center" className="mb-4">
            <label className="block opacity-70 text-sm font-bold mb-2 w-[30%]">
              Course Features
            </label>
            <input
              id="features"
              value={formData.features}
              onChange={handleInputChange}
              className="border border-red-500 p-2 rounded w-[70%] bg-[#F5F8FA] hover:bg-white"
            />
          </Flex>

          {/* Tags */}
          <Flex alignItems="center" className="mb-4">
            <label className="block opacity-70 text-sm font-bold mb-2 w-[30%]">
              Course Tags
            </label>
            <input
              id="tags"
              value={formData.tags}
              onChange={handleInputChange}
              className="border border-red-500 p-2 rounded w-[70%] bg-[#F5F8FA] hover:bg-white"
            />
          </Flex>

          <div className="border-t my-10"></div>

          {/* Learner's Accessibility */}
          <Flex alignItems="center" className="mb-4">
            <label className="block opacity-70 text-sm font-bold mb-2 w-[30%]">
              Learner s Accessibility
            </label>
            <input
              id="accessibility"
              value={formData.accessibility}
              onChange={handleInputChange}
              className="border border-red-500 p-2 rounded w-[70%] bg-[#F5F8FA] hover:bg-white"
            />
          </Flex>

          {/* Lesson Video */}
          <Flex alignItems="center" className="mb-4">
            <label className="text-sm font-bold mb-2 opacity-70 w-[30%]">
              Lesson Video
            </label>
            <input
              type="file"
              id="lessonVideo"
              onChange={handleInputChange}
              className="border border-red-500 p-2 rounded w-[70%] bg-[#F5F8FA] hover:bg-white"
            />
          </Flex>

          {/* Video Thumbnail */}
          <Flex alignItems="center" className="mb-4">
            <label className="text-sm font-bold mb-2 opacity-70 w-[30%]">
              Video Thumbnail
            </label>
            <input
              type="file"
              id="videoThumbnail"
              onChange={handleInputChange}
              className="border border-red-500 p-2 rounded w-[70%] bg-[#F5F8FA] hover:bg-white"
            />
          </Flex>

          {/* Lesson Name */}
          <Flex alignItems="center" className="mb-4">
            <label className="block opacity-70 text-sm font-bold mb-2 w-[30%]">
              Lesson Name
            </label>
            <input
              id="lessonName"
              value={formData.lessonName}
              onChange={handleInputChange}
              className="border border-red-500 p-2 rounded w-[70%] bg-[#F5F8FA] hover:bg-white"
            />
          </Flex>

          {/* Lesson Description */}
          <Flex alignItems="center" className="mb-4">
            <label className="block opacity-70 text-sm font-bold mb-2 w-[30%]">
              Lesson Description
            </label>
            <textarea
              id="lessonDescription"
              value={formData.lessonDescription}
              onChange={handleInputChange}
              className="border border-red-500 p-2 rounded w-[70%] bg-[#F5F8FA] hover:bg-white"
              rows="2"
            ></textarea>
          </Flex>

          <Flex justifyContent="center" alignItems="center" mt={4}>
            <Button width={"50%"} colorScheme="primary" type="submit">
              Add Course
            </Button>
          </Flex>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
