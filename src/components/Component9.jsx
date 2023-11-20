import React, { useState } from "react";

const Component9 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions with the form data here
    setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
    alert("Form submitted!\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <>
      <div className="mb-10 pt-12">
        <div className="flex justify-center items-center mx-4 font-medium text-sky-700 text-3xl">
          Get in touch with us
        </div>
        <div className="flex justify-center items-center font-bold text-5xl pt-2">
          Let's Connect - Reach Out Today!
        </div>
      </div>
      <div className="flex mx-24">
        <div className="w-[600px] h-[600px] mr-8 mt-1">
          <img
            src="https://img.freepik.com/free-photo/retro-telephone-living-room_23-2150711884.jpg"
            alt="contact-images"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[600px] h-[600px] shadow-xl border-b-slate-400 p-5">
          <form
            onSubmit={handleSubmit}
            className="h-full flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-800"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="mt-1 p-2 block w-full border border-slate-300 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="mt-1 p-2 block w-full border border-slate-300 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-slate-800"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter Your Mobile Number"
                  className="mt-1 p-2 block w-full border border-slate-300 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-800"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter Your Subject"
                  className="mt-1 p-2 block w-full border border-slate-300 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-800"
                >
                  Your Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter Your Message"
                  className="mt-1 p-2 block w-full border border-slate-300 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-sky-500 text-white p-2 rounded-md hover:bg-sky-600 focus:outline-none focus:ring focus:border-sky-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="p-10"></div>
    </>
  );
};

export default Component9;
