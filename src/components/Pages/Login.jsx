import React, { useState } from "react";
import { useUserContext } from "../../Context/Context";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login } = useUserContext();
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const success = login(formData.email, formData.password);
      if (success) {
        setFormData({ email: "", password: "" });
        setLoginError("");
        navigate("/");
      } else {
        setLoginError("Invalid email or password");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://cdn.pixabay.com/video/2022/06/22/121805-724719819_tiny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50 z-10">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-8 border border-gray-300 rounded-lg shadow-xl bg-white bg-opacity-80 backdrop-blur-lg font-serif"
        >
          <h2 className="text-6xl mb-8 text-center text-gray-800 font-bold">
            Login
          </h2>

          <div className="mb-6">
            <label className="block mb-2 text-lg text-gray-700">
              Email:
              <div className="relative">
                <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full p-4 pl-12 border rounded-md transition duration-200 
                    ${errors.email ? "border-red-500" : "border-gray-300"} 
                    focus:border-blue-500 focus:ring focus:ring-blue-200`}
                  placeholder="Enter your email"
                />
              </div>
            </label>
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-lg text-gray-700">
              Password:
              <div className="relative">
                <MdLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`mt-1 block w-full p-4 pl-12 border rounded-md transition duration-200 
                    ${errors.password ? "border-red-500" : "border-gray-300"} 
                    focus:border-blue-500 focus:ring focus:ring-blue-200`}
                  placeholder="Enter your password"
                />
              </div>
            </label>
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>

          {loginError && (
            <p className="text-red-500 text-sm text-center">{loginError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>

          <p className="mt-6 text-center text-lg text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
