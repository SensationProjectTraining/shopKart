import React, { useState } from "react";
import { useUserContext } from "../../Context/Context";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { registerUser, emails } = useUserContext();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (emails.includes(formData.email))
      newErrors.email = "Email already exists";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      registerUser(formData.username, formData.email, formData.password);
      setFormData({ username: "", email: "", password: "" });
      setErrors({});
      navigate("/login");
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
          src="https://cdn.pixabay.com/video/2022/06/22/121795-724719777_tiny.mp4"
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
            Sign Up
          </h2>

          <div className="mb-6">
            <label className="block mb-2 text-lg text-gray-700">
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`mt-1 block w-full p-4 border rounded-md transition duration-200 
                  ${errors.username ? "border-red-500" : "border-gray-300"} 
                  focus:border-blue-500 focus:ring focus:ring-blue-200`}
                placeholder="Enter your username"
              />
            </label>
            {errors.username && (
              <span className="text-red-500 text-sm">{errors.username}</span>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-lg text-gray-700">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full p-4 border rounded-md transition duration-200 
                  ${errors.email ? "border-red-500" : "border-gray-300"} 
                  focus:border-blue-500 focus:ring focus:ring-blue-200`}
                placeholder="Enter your email"
              />
            </label>
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-lg text-gray-700">
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 block w-full p-4 border rounded-md transition duration-200 
                  ${errors.password ? "border-red-500" : "border-gray-300"} 
                  focus:border-blue-500 focus:ring focus:ring-blue-200`}
                placeholder="Enter your password"
              />
            </label>
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>

          <p className="mt-6 text-center text-lg text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
