import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-blue-400"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <span className="text-xl font-bold">Techmate India</span>
          </div>
          <p className="text-gray-400">
            A leading technology solutions provider in India, specializing in innovative IT services and digital transformation since 2012.
          </p>
          
          <div className="space-y-2 mt-4">
            <div className="flex items-center gap-3 text-gray-300">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>#24, 2nd Floor, MG Road, Bangalore - 560001</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <FaPhone className="text-blue-400" />
              <span>+91 80 4123 4567</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-blue-400" />
              <span>info@techmateindia.com</span>
            </div>
          </div>
        </div>


        <div className="space-y-4">
          <h3 className="text-lg font-semibold border-b border-blue-800 pb-2">Quick Links</h3>
          <nav className="space-y-2">
            <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link  
              to="#aboutus" 
              className="block text-gray-400 hover:text-white transition-colors" 
              onClick={() => window.scrollTo({ top: document.getElementById("aboutus").offsetTop, behavior: "smooth" })}
            >
              About Us
            </Link>
            <Link to="/Services" className="block text-gray-400 hover:text-white transition-colors"
              onClick={() => window.scrollTo({ top: document.getElementById("services").offsetTop, behavior: "smooth" })}
            >
              Services
            </Link>
            <Link to="/portfolio" className="block text-gray-400 hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link to="#contactUs" className="block text-gray-400 hover:text-white transition-colors"
              onClick={() => window.scrollTo({ top: document.getElementById("contactUs").offsetTop, behavior: "smooth" })}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold border-b border-blue-800 pb-2">Our Services</h3>
          <nav className="space-y-2">
            <Link to="/services/web-development" className="block text-gray-400 hover:text-white transition-colors">
              Web Development
            </Link>
            <Link to="/services/mobile-apps" className="block text-gray-400 hover:text-white transition-colors">
              Mobile Applications
            </Link>
            <Link to="/services/digital-marketing" className="block text-gray-400 hover:text-white transition-colors">
              Digital Marketing
            </Link>
            <Link to="/services/cloud-solutions" className="block text-gray-400 hover:text-white transition-colors">
              Cloud Solutions
            </Link>
            <Link to="/services/it-consulting" className="block text-gray-400 hover:text-white transition-colors">
              IT Consulting
            </Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold border-b border-blue-800 pb-2">Connect With Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com/techmateindia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-xl">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/techmateindia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-xl">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/techmateindia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors text-xl">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/company/techmate-india" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-xl">
              <FaLinkedin />
            </a>
          </div>

          <h3 className="text-lg font-semibold border-b border-blue-800 pb-2 mt-6">Legal</h3>
          <nav className="space-y-2">
            <Link to="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="block text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/refund-policy" className="block text-gray-400 hover:text-white transition-colors">
              Refund Policy
            </Link>
            <Link to="/gdpr-compliance" className="block text-gray-400 hover:text-white transition-colors">
              GDPR Compliance
            </Link>
          </nav>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Techmate India Pvt. Ltd. All Rights Reserved.
          <br />
        </p>
      </div>
    </footer>
  );
}

export default Footer;