import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPalette,
  faMicrochip,
  faRocket,
  faUsers,
  faLightbulb
} from "@fortawesome/free-solid-svg-icons";

function About() {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true
    });
  }, []);

  const features = [
    {
      icon: faPalette,
      title: "Creative Design",
      description: "Expert graphic design solutions to bring your visions to life.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: faCode,
      title: "Tech Solutions",
      description: "Innovative tech solutions for businesses and individuals.",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: faMicrochip,
      title: "Electronics",
      description: "Engineering state-of-the-art electronics tailored for you.",
      color: "from-green-500 to-green-700"
    },
    {
      icon: faRocket,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality.",
      color: "from-indigo-500 to-indigo-700"
    },
    {
      icon: faUsers,
      title: "Team Experts",
      description: "Our skilled professionals deliver exceptional results.",
      color: "from-red-500 to-red-700"
    },
    {
      icon: faLightbulb,
      title: "Innovation",
      description: "Cutting-edge solutions for modern challenges.",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section id="aboutus" className="py-16 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-10 mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 rounded-full opacity-10 mix-blend-multiply filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="lg:w-1/2 relative" data-aos="fade-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="../../images/about.png"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                alt="Our team working together"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-xl -z-10 hidden lg:block"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-200 rounded-xl -z-10 hidden lg:block"></div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Techmate</span>
            </h2>
            
            <div className="mb-8">
              <p className="text-lg text-gray-600 mb-4">
                At Techmate, we're dedicated to providing exceptional services in graphic design, 
                electronics, and technology solutions. Our team of experts combines creativity 
                with technical excellence to bring your visions to life.
              </p>
              
              <p className="text-lg text-gray-600">
                Together, let's redefine the possibilities of design and technology!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.slice(0, 4).map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-3">
                    <div className={`bg-gradient-to-r ${feature.color} text-white p-2 rounded-lg`}>
                      <FontAwesomeIcon icon={feature.icon} className="text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;