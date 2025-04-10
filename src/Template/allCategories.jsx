import React from "react";
import Categories from "../Data/Categories";
import { Link } from "react-router-dom";
import { FaRupeeSign, FaStar, FaTruck, FaShieldAlt } from "react-icons/fa";

const AllCategories = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[85vh] flex items-center justify-center text-center bg-gradient-to-br from-blue-600 to-indigo-800 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">TechMate India</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed">
            India's trusted destination for authentic electronics with exclusive 
            <span className="font-bold text-yellow-300"> EMI options</span>, 
            <span className="font-bold text-yellow-300"> cashback offers</span>, and 
            <span className="font-bold text-yellow-300"> free pan-India shipping</span>
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            {[
              { icon: <FaRupeeSign className="text-2xl" />, text: "No Cost EMI" },
              { icon: <FaTruck className="text-2xl" />, text: "Free Shipping" },
              { icon: <FaShieldAlt className="text-2xl" />, text: "2-Year Warranty" },
              { icon: <FaStar className="text-2xl" />, text: "Genuine Products" }
            ].map((item, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm p-3 rounded-lg border border-white border-opacity-20">
                <div className="flex items-center justify-center gap-2">
                  <div className="text-yellow-300">{item.icon}</div>
                  <span className="text-sm sm:text-base">{item.text}</span>
                </div>
              </div>
            ))}
          </div>

          <Link 
            to="/deals" 
            className="inline-block px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore Today's Deals
          </Link>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Shop by <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Categories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover authentic electronics from top brands available across India
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  src={category.image}
                  alt={category.category}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {category.category}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {category.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Starting at ₹{category.startingPrice}
                  </span>
                  <Link
                    to={`/category/${category.category}`}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-full hover:from-blue-600 hover:to-blue-700 transition-colors duration-300"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indian Payment Options */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Easy Payment Options for Indian Customers
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "Credit/Debit Cards", icon: "💳" },
              { name: "UPI Payments", icon: "📱" },
              { name: "Net Banking", icon: "🏦" },
              { name: "EMI Options", icon: "🔄" },
            ].map((method, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <span className="text-2xl block mb-2">{method.icon}</span>
                <span className="text-sm font-medium text-gray-700">{method.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;