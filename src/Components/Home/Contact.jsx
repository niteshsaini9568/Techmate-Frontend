import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../../utils";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Contact() {
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const url = "https://techmate-backend-17y1.onrender.com/contact/feedback";
      const url = "https://techmate-backend.vercel.app/contact/feedback";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      const result = await response.json()

      if (!result.success) {
        return handleError(result.message || "Invalid Details");
      } else {
        handleSuccess("Your feedback has been submitted successfully");
        navigate("/");
      }
    } catch (error) {
      handleError(error.message || "An error occurred during submission.");
    }
  };

  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8" id="contactUs">
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Touch</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Have questions or need assistance? Our team in Bangalore is ready to help you with any inquiries about our products and services.
        </p>
      </div>

      <div className="flex justify-center items-center py-10">
        <div className="relative flex flex-col lg:flex-row bg-white w-full max-w-6xl rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          {/* Decorative elements */}
          <div className="absolute -top-12 -left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 -z-10"></div>
          
          {/* Contact Info Section */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 p-8 md:p-12 lg:p-16 bg-gradient-to-br from-blue-50 to-indigo-50">
            <h1 className="text-3xl font-bold text-gray-800 mb-6" data-aos="fade-right">
              Our Contact Details
            </h1>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4" data-aos="fade-right" data-aos-delay="100">
                <div className="mt-1 text-blue-600">
                  <FaMapMarkerAlt className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Registered Office</h3>
                  <p className="text-gray-600">
                    #24, 2nd Floor, MG Road<br />
                    Bangalore - 560001<br />
                    Karnataka, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-aos="fade-right" data-aos-delay="200">
                <div className="mt-1 text-blue-600">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone & Email</h3>
                  <p className="text-gray-600">
                    +91 80 4123 4567<br />
                    +91 98765 43210 (Mobile)<br />
                    contact@techmateindia.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-aos="fade-right" data-aos-delay="300">
                <div className="mt-1 text-blue-600">
                  <FaClock className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Working Hours</h3>
                  <p className="text-gray-600">
                    Monday to Friday: 9:30 AM - 6:30 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="mt-8" data-aos="fade-up" data-aos-delay="400">
              <h3 className="font-semibold text-gray-800 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/techmateindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-2xl"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com/techmateindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 text-2xl"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/techmateindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 text-2xl"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/techmate-india"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 text-2xl"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2 bg-white p-8 md:p-12 lg:p-16">
            <div className="card bg-white w-full" data-aos="zoom-in">
              <form className="card-body p-0" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
                
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text text-gray-700">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered bg-gray-50 focus:bg-white"
                    name="name"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text text-gray-700">Email Address</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered bg-gray-50 focus:bg-white"
                    name="email"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text text-gray-700">Subject</span>
                  </label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    className="input input-bordered bg-gray-50 focus:bg-white"
                    name="subject"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text text-gray-700">Your Message</span>
                  </label>
                  <textarea
                    placeholder="Type your message here..."
                    className="textarea textarea-bordered bg-gray-50 focus:bg-white h-32"
                    name="message"
                    required
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-control">
                  <button 
                    type="submit" 
                    className="btn bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-none hover:from-blue-700 hover:to-indigo-700"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;