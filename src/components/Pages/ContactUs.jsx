import React, { useState, useEffect } from "react";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  const initialFormData = JSON.parse(localStorage.getItem("formData")) || {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);
    localStorage.setItem("formData", JSON.stringify(formData));

    setFormData({ name: "", email: "", message: "" });
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
          src="https://cdn.pixabay.com/video/2019/09/12/26818-361092071_tiny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="flex justify-center items-center min-h-screen bg-black bg-opacity-50 z-10">
        <form
          className="max-w-xl w-full p-8 border border-gray-300 rounded-lg shadow-lg bg-white bg-opacity-80 backdrop-blur-lg font-serif"
          onSubmit={handleSubmit}
        >
          <span className="text-5xl mb-8 text-center block text-gray-800">
            Contact Us
          </span>

          <div className="space-y-5">
            <div className="relative">
              <IoMdContact className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full pl-12 pr-3 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>

            <div className="relative">
              <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full pl-12 pr-3 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 border focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-2xl h-40 transition duration-300"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-2xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
