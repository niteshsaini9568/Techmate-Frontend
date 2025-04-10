import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaRupeeSign, FaShippingFast, FaHeadset } from "react-icons/fa";

function Sale() {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true
    });
  }, []);

  return (
    <div className="relative my-16 md:my-24 lg:my-32">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-95"></div>
      <div 
        className="absolute inset-0 bg-[url('../../../Electronics/bg.jpg')] bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: "url('../../../Electronics/bg.jpg')" }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="text-center" data-aos="fade-up">
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-4" data-aos="zoom-in">
            LIMITED TIME OFFER
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight" data-aos="fade-up">
            Great Indian <span className="text-yellow-400">Electronics</span> Sale
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
            Up to 50% Off on Premium Brands + Extra 10% Off with SBI Cards
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-20" data-aos="fade-up" data-aos-delay="200">
              <div className="flex justify-center mb-3">
                <FaRupeeSign className="text-3xl text-yellow-400" />
              </div>
              <h3 className="text-white font-semibold">Best Prices</h3>
              <p className="text-gray-200 text-sm">Price match guarantee</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-20" data-aos="fade-up" data-aos-delay="300">
              <div className="flex justify-center mb-3">
                <FaShippingFast className="text-3xl text-yellow-400" />
              </div>
              <h3 className="text-white font-semibold">Free Shipping</h3>
              <p className="text-gray-200 text-sm">Across India</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-20" data-aos="fade-up" data-aos-delay="400">
              <div className="flex justify-center mb-3">
                <FaHeadset className="text-3xl text-yellow-400" />
              </div>
              <h3 className="text-white font-semibold">24/7 Support</h3>
              <p className="text-gray-200 text-sm">Hindi & English</p>
            </div>
          </div>
          <div className="mt-8 text-gray-300 text-sm" data-aos="fade-up" data-aos-delay="600">
            <p>Offer valid till 31st December 2023 or while stocks last</p>
            <p className="mt-1">*T&C apply. Additional bank offers may be available</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;