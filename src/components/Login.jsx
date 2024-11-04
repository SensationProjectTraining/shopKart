import React, { useState } from 'react';
import { useUserContext } from '../Context/Context';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { emails, passwords } = useUserContext();
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');

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
      const userIndex = emails.findIndex((email) => email === formData.email);
      if (userIndex !== -1 && passwords[userIndex] === formData.password) {
        alert('Login successful:', formData);
        setFormData({ email: '', password: '' });
        setLoginError('');
      } else {
        setLoginError('Invalid email or password');
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
      
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
      
      {loginError && <p className="text-red-500 text-sm text-center">{loginError}</p>}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Login
      </button>
      
      <p className="mt-4 text-center text-gray-600">
        Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up here</a>
      </p>
    </form>
  );
};

export default Login;
