const SocialLogin = ({googleLogin}) => {
    return (
        <div className='space-y-5'>
             <button onClick={googleLogin}
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
             
        </div>
    );
};

export default SocialLogin;