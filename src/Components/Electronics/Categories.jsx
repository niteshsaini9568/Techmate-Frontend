import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import categoriesData from "../../Data/Categories";
import { Link } from "react-router-dom";

function Categories() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

const uniqueCategories = categoriesData;

return (
  <div className="flex flex-col lg:flex-row px-5 sm:px-10 lg:px-20 mt-10 gap-10">
    <div className="w-full lg:w-1/4">
      <div
        className="hero h-[40vh] sm:h-[60vh] lg:h-[70vh]  rounded-3xl"
        style={{
          backgroundImage: "url(../../../Electronics/sale.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div
          className="hero-content text-neutral-content text-center"
          data-aos="zoom-in"
        >
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl sm:text-4xl lg:text-5xl font-bold">
              Limited Time Offer!
            </h1>
            <p className="mb-5 text-sm sm:text-base">
              Up to 50% off on select items
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-5 lg:gap-10 w-full lg:w-3/4">
      <div className="pb-3 flex justify-between items-center border-b-2">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Selected Categories
        </h1>
        <Link
          to="/allcategories"
          className="btn btn-primary text-white text-sm sm:text-base"
        >
          More
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10">
        {uniqueCategories.map((category, index) => (
          <div
            key={index}
            className="hero h-36 sm:h-48 w-full rounded-2xl shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl duration-300 cursor-pointer"
            style={{
              backgroundImage: `url(${category.image})`,
            }}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="hero-content text-neutral-content text-center">
              <div className="">
                <h1 className="mb-1 text-sm sm:text-base lg:text-xl font-bold text-white">
                  {category.category}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default Categories;
