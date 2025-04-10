import React from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaRupeeSign } from "react-icons/fa";
import { MdVerified, MdLocationOn } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import shops_Data from "../Data/shops_Data";

function ShopsTemplate() {
  const filteredProducts = shops_Data;

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[85vh] flex items-center justify-center text-center bg-gradient-to-br from-green-600 to-blue-700 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-opacity-10 bg-[url('../../../pattern.svg')]"></div>
        
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">Trusted Partner Shops</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed">
            Verified electronics shops across India offering authentic products with 
            <span className="font-bold text-yellow-300"> warranty</span>, 
            <span className="font-bold text-yellow-300"> EMI options</span>, and 
            <span className="font-bold text-yellow-300"> pan-India service</span>
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            {[
              { icon: <MdVerified className="text-2xl" />, text: "Verified Sellers" },
              { icon: <FaRupeeSign className="text-2xl" />, text: "Best Prices" },
              { icon: <GiAchievement className="text-2xl" />, text: "5+ Years Experience" },
              { icon: <FaStar className="text-2xl" />, text: "4.5+ Ratings" }
            ].map((item, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm p-3 rounded-lg border border-white border-opacity-20">
                <div className="flex items-center justify-center gap-2">
                  <div className="text-yellow-300">{item.icon}</div>
                  <span className="text-sm sm:text-base">{item.text}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#shops" 
              className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Shops
            </a>
            <a 
              href="/contact" 
              className="px-6 py-3 bg-transparent hover:bg-white hover:bg-opacity-10 text-white font-bold rounded-full text-sm sm:text-base border-2 border-white transition-all duration-300"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </div>

      {/* Shops Section */}
      <div id="shops" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Partner Network</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Premium electronics retailers with verified credentials and excellent service records
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((shop, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {shop.name}
                  </h3>
                  <div className="flex items-center bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                    <FaStar className="mr-1" />
                    <span>{shop.rating}/5</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-5">{shop.briefDescription}</p>
                
                <div className="space-y-3 mb-5">
                  <div className="flex items-center text-sm text-gray-600">
                    <GiAchievement className="mr-2 text-yellow-500 text-lg" />
                    <span>{shop.yearsWithUs} years partnership</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-600">
                    <MdLocationOn className="mr-2 text-red-500 text-lg mt-0.5" />
                    <span>{shop.address}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Services Offered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {shop.services.map((service, idx) => (
                      <span 
                        key={idx} 
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopsTemplate;