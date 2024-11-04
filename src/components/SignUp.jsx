import React, { useState } from 'react';
import { useUserContext } from '../Context/Context';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { registerUser } = useUserContext();
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
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      registerUser(formData.username, formData.email, formData.password);
      setFormData({ username: '', email: '', password: '' });
      setErrors({});
      alert('Form submitted successfully:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
      
      <div className="mb-4">
        <label className="block mb-1 text-gray-700">
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={`mt-1 block w-full p-3 border rounded-md transition duration-200 
              ${errors.username ? 'border-red-500' : 'border-gray-300'} 
              focus:border-blue-500 focus:ring focus:ring-blue-200`}
            placeholder="Enter your username"
          />
        </label>
        {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
      </div>
      
      <div className="mb-4">
        <label className="block mb-1 text-gray-700">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full p-3 border rounded-md transition duration-200 
              ${errors.email ? 'border-red-500' : 'border-gray-300'} 
              focus:border-blue-500 focus:ring focus:ring-blue-200`}
            placeholder="Enter your email"
          />
        </label>
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
      </div>
      
      <div className="mb-4">
        <label className="block mb-1 text-gray-700">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`mt-1 block w-full p-3 border rounded-md transition duration-200 
              ${errors.password ? 'border-red-500' : 'border-gray-300'} 
              focus:border-blue-500 focus:ring focus:ring-blue-200`}
            placeholder="Enter your password"
          />
        </label>
        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Sign Up
      </button>
      
      <p className="mt-4 text-center text-gray-600">
        Already have an account? <a href="#" className="text-blue-500 hover:underline">Login here</a>
      </p>
    </form>
  );
};

export default SignUp;
