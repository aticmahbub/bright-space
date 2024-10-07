import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { Box, Button } from "@chakra-ui/react";
import Lottie from "lottie-react";
import authentication from '../../../../Lotties/authentication.json'

const Registration = () => {
  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student", // Set a default role
    termsAccepted: false,
  });

  const [error, setError] = useState(""); // Error state

  const handleChange = (e) => {
    const { name, value, type, checked, } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, fullName, photoURL, } = formData
    console.log(formData);
    createUser(email, password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser);
        updateUserProfile(fullName, photoURL)
          .then(() => {
            console.log('user profile updated');

            const userInfo = {
              name: fullName,
              email: email,
              role: formData?.role,
            }
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedI) {
                  console.log('user added to database');
                }
              })
            navigate('/')
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(err => console.log(err));
  };

  return (
    <Box maxW='1596px' mx='auto' px={{ base: '2', lg: '60px', '2xl': 0 }} my={{ base: 0, lg: 20, xl: 0 }} mb={{ base: 20, lg: 0 }}>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-10">
        <Lottie className='w-full flex-1' animationData={authentication} />
        <div className="p-7 md:p-10 2xl:p-12 bg-white lg:max-w-[460px] 2xl:max-w-[560px] rounded-lg flex-1">
          <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
          <p className="text-center text-gray-500 mb-6">
            Create an account to unlock exclusive features.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">


            <div className="text-start flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="w-full px-4 py-3 border border-gray-100 rounded-lg bg-[#FCFCFD] focus:outline-none focus:ring focus:ring-indigo-200"
                required
              />
            </div>

            <div className="text-start flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="w-full px-4 py-3 border border-gray-100 bg-[#FCFCFD] rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                required
              />
            </div>

            <div className="text-start flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className="w-full px-4 py-3 border border-gray-100 bg-[#FCFCFD] rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                required
              />
            </div>

            <div className="text-start flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your Password"
                className="w-full px-4 py-3 border border-gray-100 bg-[#FCFCFD] rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                required
              />
            </div>

            {error && (
              <div className=" text-[#ff0a0a] ">
                {error}
              </div>
            )}

            <div className="inline-block py-2 px-4 bg-[#FCFCFD] rounded-lg font-medium">
              Role:
              <select
                className="border ml-2 rounded-lg font-normal"
                name="role"
                value={formData.role}
                onChange={handleChange} // Handle change for role
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="h-4 w-4 text-orange-500 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-600">
                I agree with{" "}
                <a href="#" className="text-orange-500 hover:underline">
                  Terms of Use {" "}
                </a>
                and
                <a href="#" className="text-orange-500 hover:underline">
                  {" "} Privacy Policy
                </a>
              </label>
            </div>

            <Button
              w='full'
              type="submit"
              colorScheme='primary'
            >
              Sign Up
            </Button>

            <p className="text-center text-gray-500 mt-4">
              Already have an account?{" "}
              <Link to={"/login"} className="text-orange-500 hover:underline">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Box >

  );
};

export default Registration;
