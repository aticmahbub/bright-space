import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '@dotlottie/player-component';
import { AuthContext } from "../../../../providers/AuthProvider";

const Login = () => {


  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const {loginUser} = useContext(AuthContext)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formData.email, formData.password)
    .then(result =>{
      console.log(result.user)
      navigate(from, {replace:true})
    })
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-5 lg:gap-10">
      <div>
        <dotlottie-player
          src="https://lottie.host/d04a48fe-d3f4-4ce1-ba2a-9b6b239d3ee0/cLJoUwPZPC.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>

      <div className="flex justify-center items-center w-full p-2 lg:p-10">
        <div className="p-8 bg-[#ffff] rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
          <p className="text-center mb-6">
            Log in to access your personalized dashboard and exclusive features.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-start flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-100 bg-[#FCFCFD] rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
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
              />
              <p className="text-end my-2">Forget Password</p>
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
                and{" "}
                <a href="#" className="text-orange-500 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF9500] py-2 rounded-lg text-[#ffff] hover:bg-[#f3b051] focus:outline-none focus:ring-2 focus:ring-[#f3b051] focus:ring-opacity-50"
            >
              Sign In
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
              <span>Sign In with Google</span>
            </button>

            <p className="text-center text-gray-500 mt-4">
              Do not have an account?{" "}
              <Link to={"/registration"} className="text-orange-500 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
