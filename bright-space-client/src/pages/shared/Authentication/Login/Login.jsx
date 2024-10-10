import { useContext, useState } from "react";
import authentication from '../../../../Lotties/authentication.json'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import SocialLogin from "../../../../components/SocialLogin/SocialLogin";
import Lottie from "lottie-react";
import { AbsoluteCenter, Box, Button, Divider } from "@chakra-ui/react";

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

  const { loginUser, googleLogin } = useContext(AuthContext)
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
      .then(result => {
        console.log(result.user)
        navigate(from, { replace: true })
      })
  };

  return (
    <Box maxW='1596px' mx='auto' px={{ base: '2', lg: '60px', '2xl': 0 }} my={{ base: 0, lg: 20, xl: 0 }} mb={{ base: 20, lg: 0 }}>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-10">
        <Lottie className='w-full flex-1' animationData={authentication} />
        <div className="p-7 md:p-10 2xl:p-12 bg-white lg:max-w-[460px] 2xl:max-w-[560px] rounded-lg flex-1">
          <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
          <p className="text-center text-gray-500 mb-6">
            Login to your account and enjoy exclusive features.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
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

            <Button type="submit" colorScheme='primary' w='full'>
              Sign In
            </Button>

            <Box position='relative' padding='3'>
              <Divider />
              <AbsoluteCenter bg='white' px='4'>
                OR
              </AbsoluteCenter>
            </Box>

            <SocialLogin googleLogin={googleLogin} />

            <p className="text-center text-gray-500 mt-4">
              Do not have an account?{" "}
              <Link to={"/registration"} className="text-primary-500 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>

        {/* <div className="flex justify-center items-center p-2 flex-1">
          
        </div> */}
      </div>
    </Box>
  );
};

export default Login;
