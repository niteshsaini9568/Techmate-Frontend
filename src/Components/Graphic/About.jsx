import React from "react";
import { FaPenNib, FaPalette, FaShapes, FaMagic, FaBrush, FaSwatchbook, FaObjectGroup, FaAd } from "react-icons/fa";

const GraphicDesignServices = () => {
  const services = [
    {
      icon: <FaPenNib className="text-3xl" />,
      title: "Logo Design",
      description: "Unique, memorable logos that perfectly represent your brand identity",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaPalette className="text-3xl" />,
      title: "Brand Identity",
      description: "Complete visual branding including color schemes and typography",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaShapes className="text-3xl" />,
      title: "Illustration",
      description: "Custom illustrations tailored to your brand's personality",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaMagic className="text-3xl" />,
      title: "Marketing Materials",
      description: "Brochures, flyers, and banners that convert viewers to customers",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <FaBrush className="text-3xl" />,
      title: "UI/UX Design",
      description: "Intuitive digital interfaces that enhance user experience",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <FaSwatchbook className="text-3xl" />,
      title: "Print Design",
      description: "Visually stunning designs for business cards, letterheads, and more",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <FaObjectGroup className="text-3xl" />,
      title: "Packaging Design",
      description: "Eye-catching packaging that stands out on shelves",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <FaAd className="text-3xl" />,
      title: "Social Media Graphics",
      description: "Engaging visuals optimized for each social platform",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-10 mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 rounded-full opacity-10 mix-blend-multiply filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Design Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional graphic design solutions tailored to elevate your brand's visual identity
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className={`bg-gradient-to-r ${service.color} h-2 w-full`}></div>
              <div className="p-6">
                <div className={`bg-gradient-to-r ${service.color} text-white w-16 h-16 flex items-center justify-center rounded-xl mb-6 mx-auto`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">{service.description}</p>
                <button className="block mx-auto px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-700 to-gray-800 rounded-full hover:from-gray-800 hover:to-gray-900 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignServices;