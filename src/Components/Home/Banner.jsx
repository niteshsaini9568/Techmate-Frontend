import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Stat from "./Stat";
import { Link } from "react-router-dom";

function Banner() {
  function serviceScroll() {
    const service = document.querySelector("#Services");
    if (service) {
      service.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true 
    });
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white py-12 lg:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full opacity-20 mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 lg:ml-5">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Techmate Today
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              A leading digital marketing agency dedicated to helping businesses
              thrive in the digital age. With a team of experienced professionals,
              we provide innovative solutions to elevate your online presence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Link
                to="/electronics"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={serviceScroll}
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                Get Started
              </Link>
              <a
                href="#contactUs"
                className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors duration-300"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                Contact Us
              </a>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="500">
              <Stat />
            </div>
          </div>
          
          <div className="lg:w-1/2 relative" data-aos="fade-left">
            <div className="relative">
              <img
                src="../../images/banner.svg"
                className="w-full h-auto max-w-lg mx-auto lg:mx-0"
                alt="Digital marketing solutions"
              />
              <div className="absolute -bottom-6 right-6 w-24 h-24 bg-indigo-100 rounded-xl -z-10 hidden lg:block"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-xl -z-10 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
