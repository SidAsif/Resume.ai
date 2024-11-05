import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side */}
      <div className="hidden md:flex bg-[#EFF6FE] lg:w-[45%] md:w-1/2 justify-center items-center p-8">
        <div className="max-w-md lg:pl-20">
          <img src="/logo.png" alt="Logo" className="mb-4 h-[30px]" />
          <h2
            className="text-[48px] font-bold mb-2 "
            style={{ lineHeight: "50px" }}
          >
            Hey, <br /> Welcome back!
          </h2>
          <p
            className="mb-4 text-[32px] font-medium "
            style={{ lineHeight: "40px" }}
          >
            Let&apos;s continue <br /> building your career
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-white lg:w-[55%] md:w-1/2 w-full flex justify-center items-center p-8">
        <div className="w-full max-w-md mx-auto text-center">
          <div className=" md:hidden h-screen flex items-center justify-center">
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6">Login</h2>
              <form className="space-y-4">
                <div className="text-left">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    className="w-full p-3 mt-1 border border-[#B7BFC7] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="text-left">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="relative w-full mt-1">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Enter password"
                      className="w-full p-3 border border-[#B7BFC7] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <FaEye className="text-gray-500" />
                      ) : (
                        <FaEyeSlash className="text-gray-500" />
                      )}
                    </span>
                  </div>
                </div>
                <p className="text-left text-[#E86969] ">
                  <a href="#" className=" hover:underline">
                    Forgot Password?
                  </a>
                </p>
                <button
                  type="submit"
                  className="w-full p-3 bg-blue-500 text-white rounded-[30px] hover:bg-blue-600 transition"
                >
                  Log in
                </button>
                <div className="flex items-center justify-between my-4">
                  <div className="border-t border-gray-400 flex-grow mr-3"></div>
                  <span className="text-sm text-gray-500">or with</span>
                  <div className="border-t border-gray-400 flex-grow ml-3"></div>
                </div>

                {/* Signup with Google button */}
                <button
                  type="button"
                  className="w-full p-3 bg-white border border-gray-500 text-gray-700 rounded-[30px] font-semibold flex items-center justify-center hover:bg-gray-200 transition"
                >
                  <FcGoogle className="text-xl mr-2 items-start" />
                  Signup with Google
                </button>
              </form>
              <p className="mt-4">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="font-semibold">
                  Create an account
                </Link>
              </p>
            </div>
          </div>

          {/* Content for medium and large screens */}
          <div className="hidden md:block">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form className="space-y-4">
              <div className="text-left">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter username"
                  className="w-full p-3 mt-1 border border-[#B7BFC7] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative w-full mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter password"
                    className="w-full p-3 border border-[#B7BFC7] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FaEye className="text-gray-500" />
                    ) : (
                      <FaEyeSlash className="text-gray-500" />
                    )}
                  </span>
                </div>
              </div>
              <p className="text-left text-[#E86969] ">
                <Link to="/forgotpswd" className=" hover:underline">
                  Forgot Password?
                </Link>
              </p>

              <button
                type="submit"
                className="w-full p-3 bg-blue-500 text-white rounded-[30px] hover:bg-blue-600 transition"
              >
                Log in
              </button>
              <div className="flex items-center justify-between my-4">
                <div className="border-t border-gray-400 flex-grow mr-3"></div>
                <span className="text-sm text-gray-500">or with</span>
                <div className="border-t border-gray-400 flex-grow ml-3"></div>
              </div>

              {/* Signup with Google button */}
              <button
                type="button"
                className="w-full p-3 bg-white border border-gray-500 text-gray-700 rounded-[30px] font-semibold flex items-center justify-center hover:bg-gray-200 transition"
              >
                <FcGoogle className="text-xl mr-2 items-start" />
                Login with Google
              </button>
            </form>
            <p className="mt-4">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="font-semibold">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
