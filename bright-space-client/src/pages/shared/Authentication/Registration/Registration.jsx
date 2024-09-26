import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const Registration = () => {
  const navigate = useNavigate()
  const {createUser, updateUserProfile} = useContext(AuthContext)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    photoURL: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    const {email, password} = formData
    createUser(email, password)
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser);
      updateUserProfile(formData.fullName, formData.photoURL)
      .then(()=>{
        console.log('user profile updated');
        navigate('/')
      })
      .catch(error =>{
        console.log(error);
      })
    })

  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center  gap-5 lg:gap-10">
      <div>
      <dotlottie-player
        src="https://lottie.host/d04a48fe-d3f4-4ce1-ba2a-9b6b239d3ee0/cLJoUwPZPC.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></dotlottie-player>
      </div>

        <div className="flex justify-center items-center w-full p-2 md:p-10 ">
          <div className=" p-8 rounded-lg shadow-lg w-full bg-[#ffff]">
            <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
            <p className="text-center text-gray-500 mb-6">
              Create an account to unlock exclusive features.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-start flex flex-col">
                <label className="mb-2 font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  className="w-full px-4 py-3 border border-gray-100 rounded-lg bg-[#FCFCFD]  focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <div className="text-start flex flex-col">
                <label className="mb-2 font-medium text-gray-700">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  value={formData.photoURL}
                  onChange={handleChange}
                  placeholder="Enter your photo url"
                  className="w-full px-4 py-3 border border-gray-100 rounded-lg bg-[#FCFCFD]  focus:outline-none focus:ring focus:ring-indigo-200"
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
                  className="w-full px-4 py-3 border border-gray-100 bg-[#FCFCFD] rounded-lg  focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <div className="text-start flex flex-col">
                <label className="mb-2 font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your Password"
                  className="w-full px-4 py-3 border border-gray-100 bg-[#FCFCFD] rounded-lg  focus:outline-none focus:ring focus:ring-indigo-200"
                />
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
                    Terms of Use
                  </a>
                  and
                  <a href="#" className="text-orange-500 hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
              type="submit"
              className="w-full bg-[#FF9500]  py-2 rounded-lg 
              text-[#ffff]
              hover:bg-[#f3b051] focus:outline-none focus:ring-2 focus:ring-[#f3b051] focus:ring-opacity-50"
            >
              Sign Up
            </button>

              <div className="text-center text-gray-500">OR</div>

              <button
                type="button"
                className="w-full bg-[#F7F7F8] text-[#000000] border border-[#bab8b8] font-medium py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span>Sign Up with Google</span>
              </button>

              <p className="text-center text-gray-500 mt-4 ">
                Already have an account?{" "}
                <Link to={"/login"} className="text-orange-500 hover:underline">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
