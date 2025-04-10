import React from "react";
import { FaCheckCircle, FaCrown, FaStar, FaRupeeSign } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import checkoutHandle from "../../Payment/Payment";
import { Link } from "react-router-dom";

const PricingCards = () => {

  const handlePayment = async (amount) => {
    await checkoutHandle(amount, navigate);
  };

  const pricingOptions = [
    {
      icon: <MdOutlineDesignServices className="text-3xl" />,
      title: "Starter Package",
      price: 999,
      description: "Perfect for individuals and new businesses starting their branding journey",
      services: [
        "1 Custom Logo Design",
        "2 Social Media Posts",
        "Business Card Design",
        "3 Revisions",
        "3 Day Delivery"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaStar className="text-3xl" />,
      title: "Business Package",
      price: 1499,
      description: "Comprehensive branding solution for growing businesses",
      services: [
        "2 Custom Logo Concepts",
        "5 Social Media Posts",
        "Business Card + Letterhead",
        "Brochure Design",
        "5 Revisions",
        "5 Day Delivery"
      ],
      popular: true,
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaCrown className="text-3xl" />,
      title: "Premium Package",
      price: 1999,
      description: "Complete branding solution for established businesses",
      services: [
        "3 Custom Logo Concepts",
        "10 Social Media Posts",
        "Full Stationery Set",
        "Brochure + Banner Designs",
        "Product Packaging",
        "Unlimited Revisions",
        "7 Day Delivery"
      ],
      popular: false,
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Flexible <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Pricing Plans</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your design needs with transparent pricing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                option.popular ? "border-2 border-purple-500" : "border border-gray-200"
              }`}
            >
              {option.popular && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`bg-gradient-to-r ${option.color} h-2 w-full`}></div>
              
              <div className="p-6 bg-white">
                <div className="flex items-center justify-center mb-6">
                  <div className={`bg-gradient-to-r ${option.color} text-white w-16 h-16 flex items-center justify-center rounded-xl`}>
                    {option.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
                  {option.title}
                </h3>
                
                <p className="text-center text-gray-600 mb-6">
                  {option.description}
                </p>
                
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-gray-900 flex items-center justify-center">
                    <FaRupeeSign className="mr-1" />
                    {option.price}
                    <span className="text-lg font-normal text-gray-500 ml-1">/project</span>
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {option.services.map((service, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium text-white bg-gradient-to-r ${option.color} hover:opacity-90 transition-opacity duration-300`}
                  onClick={() => handlePayment(option.price)}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <Link to="#contactUs" className=" py-4 px-8 rounded-2xl text-white bg-blue-800 hover:text-white transition-colors"
              onClick={() => window.scrollTo({ top: document.getElementById("contactUs").offsetTop, behavior: "smooth" })}
            >
              Contact
            </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;