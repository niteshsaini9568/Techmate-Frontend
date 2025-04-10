import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPalette, FaBrush, FaObjectGroup } from "react-icons/fa";

function Banner() {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true
    });
  }, []);

  const features = [
    {
      icon: <FaPalette className="text-2xl" />,
      title: "Creative Designs",
      description: "Unique visuals tailored to your brand"
    },
    {
      icon: <FaBrush className="text-2xl" />,
      title: "Custom Solutions",
      description: "Tailored to your specific needs"
    },
    {
      icon: <FaObjectGroup className="text-2xl" />,
      title: "Professional Quality",
      description: "Industry-standard deliverables"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-r from-gray-50 to-blue-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full opacity-20 mix-blend-multiply filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2 relative" data-aos="fade-left">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="../../Graphic/Banner.avif"
                className="w-full h-auto object-cover"
                alt="Graphic Design Services"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-xl -z-10 hidden lg:block"></div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Graphic Design</span> Services
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Elevate your brand with stunning visuals crafted by our expert designers. 
              We create impactful designs that communicate your message effectively 
              and leave a lasting impression on your audience.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Get Started
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;