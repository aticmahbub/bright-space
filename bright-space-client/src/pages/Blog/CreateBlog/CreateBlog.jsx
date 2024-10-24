import  { useContext, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../providers/AuthProvider";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateBlog = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    image: "",
    description: "",
  });

  const axiosPublic = useAxiosPublic();
  const {user} = useContext(AuthContext);




  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handlePostBlog = async (e) => {
    e.preventDefault();


    const currentDate = new Date().toISOString().split('T')[0];
    

    const blogInfo = {
      name: formData.name,
      email: user?.email,
      title: formData.title,
      image: formData.image,
      description: formData.description,
      currentDate,
    }

 

    try {
      
      const response = await axiosPublic.post("/blogs", blogInfo,{
        headers:{
          "Content-Type": "application/json",
        }
      })
      
      if(response.data.insertedId){
        toast.success("successfully added");

        setFormData({
          name: "",
          title: "",
          image: "",
          description: "",
        });
      }

    } catch (err) {
      toast.error("something went wrong");
      console.log(err);
    }
    
   

 
    
  };

  

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md">
      <form onSubmit={handlePostBlog}>
        {/* Author Name and Title */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Author Name
            </label>
            <input required
              type="text"
              id="name"
              name="name"
              placeholder="Enter Author Name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              value={formData.name}
              onChange={handleInputChange}
              
            />
          </div>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input required
              type="text"
              id="title"
              name="title"
              placeholder="Enter Title"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Thumbnail Image */}
        <div className="mt-6">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Thumbnail Image
          </label>
          <input required
            type="text"
            id="image"
            name="image"
            placeholder="Image Link"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
            value={formData.image}
            onChange={handleInputChange}
          />
        </div>

        {/* Description */}
        <div className="mt-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea required
            id="description"
            name="description"
            rows="4"
            placeholder="Enter your text here..."
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-[#f4b24f] text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-[#ea9f2d]"
          >
            Post Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
