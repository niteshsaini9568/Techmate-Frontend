import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaPalette, FaMobileAlt, FaEllipsisH, FaChartLine, FaLightbulb, FaHeadset } from "react-icons/fa";

function Services() {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true
    });
  }, []);

  const services = [
    {
      icon: <FaPalette className="text-4xl" />,
      title: "Graphic Design",
      description: "Elevate your brand with creative, customized graphic designs, from logos to marketing materials, crafted to perfection.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: "Electronic Deals",
      description: "Access exclusive discounts on the latest electronic gadgets, including smartphones, laptops, and home appliances.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Digital Marketing",
      description: "Boost your online presence with our comprehensive digital marketing strategies tailored to your business needs.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Creative Solutions",
      description: "Innovative approaches to complex problems that drive growth and enhance your competitive edge.",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: <FaHeadset className="text-4xl" />,
      title: "Tech Support",
      description: "Reliable technical support services to keep your systems running smoothly and efficiently.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaEllipsisH className="text-4xl" />,
      title: "And More...",
      description: "Explore our wide range of additional services tailored to meet your specific business requirements.",
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <section id="Services" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of professional services designed to elevate your business in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>
                <div className="w-16 h-16 flex items-center justify-center bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 text-sm font-medium bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <Link to="/allcategories" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;