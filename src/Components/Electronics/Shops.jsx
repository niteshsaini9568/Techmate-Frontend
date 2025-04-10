import React, { useEffect } from "react";
import shopsData from "../../Data/shops_Data"; 
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineDevices } from "react-icons/md";

function Shops() {

  const hideScrollbarStyle = {
    overflowX: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="px-5 sm:px-10 lg:px-20 mt-20">
      <div className="flex items-center gap-3 sm:gap-5">
        <img
          src="../../svgs/shops.svg"
          className="w-8 sm:w-10 bg-red-100 rounded-xl shadow-md"
          alt="Shop Partners"
        />
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
          Partner Shops
        </h1>
      </div>
      <div
        style={hideScrollbarStyle}
        className="flex gap-5 sm:gap-10 py-5 sm:py-10 overflow-x-auto hide-scrollbar"
      >
        {shopsData.map((shop) => (
          <div
            key={shop.id}
            className="flex-none w-full sm:w-80 lg:w-96 shadow-lg rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <div className="card bg-base-100">
              <div className="card-body">

                <h2 className="text-xl font-bold text-center text-gray-800">
                  {shop.name}
                </h2>
                <p className="text-sm text-gray-600 flex items-center justify-center mt-2">
                  <FaMapMarkerAlt className="mr-2 text-red-500" />
                  {shop.address}
                </p>

                <div className="mt-4">
                  <h3 className="text-sm font-bold text-gray-700 flex items-center">
                    <MdOutlineDevices className="mr-2 text-blue-500" />
                    Services:
                  </h3>
                  <ul className="list-disc pl-6 mt-1 text-sm text-gray-600">
                    {shop.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <FaStar className="text-yellow-500" />
                  <span className="text-sm text-gray-700 ml-2">
                    {shop.rating} Rating
                  </span>
                </div>
                <p className="text-center mt-4 text-sm text-gray-600">
                  Partnered with us for{" "}
                  <span className="font-bold text-gray-800">
                    {shop.yearsWithUs} years
                  </span>
                </p>                
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex items-center justify-center mt-5 sm:mt-10"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Link
          to={`/shops`}
          className="btn btn-primary px-10 sm:px-20 py-2 sm:py-3 text-white rounded-lg transition duration-200"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
}

export default Shops;
