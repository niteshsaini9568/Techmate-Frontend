import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import hotDealsData from "../../Data/popular_deals";
import AOS from "aos";
import "aos/dist/aos.css"; 

function Popular_Deals() {
  const hideScrollbarStyle = {
    overflowX: "auto",
    scrollbarWidth: "none", 
    msOverflowStyle: "none", 
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

let popular_sales = "popular_sales";
  
  return (
    <>
      <div className="px-5 sm:px-10 lg:px-20 mt-10">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex items-center gap-3 sm:gap-5"
        >
          <img
            src="../../svgs/Popular.svg"
            className="w-8 sm:w-10 bg-green-100 rounded-xl shadow1"
            alt="Popular Deals"
          />
          <h1 className="text-2xl lg:text-3xl font-bold">Popular Sales</h1>
        </div>
        <div
          style={hideScrollbarStyle}
          className="flex gap-5 sm:gap-10 py-5 sm:py-10 overflow-x-auto hide-scrollbar"
        >
          {hotDealsData.map((deal) => (
            <div
              key={deal.id}
              className="flex-none w-full sm:w-80 lg:w-96 rounded-box"
              data-aos="zoom-in" 
              data-aos-duration="800"
            >
              <div className="card bg-base-100 w-full shadow-xl border-2 border-slate-200">
                <figure>
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="h-40 sm:h-52 mt-5 object-cover"
                  />
                </figure>
                <div className="card-body text-center">
                  <h2 className="text-lg sm:text-xl font-bold text-center">
                    {deal.title}
                  </h2>
                  <p className="text-sm sm:text-base">{deal.description}</p>
                  <div className="card-actions justify-center items-center gap-3 sm:gap-5">
                    <button
                      data-aos="fade-up" 
                      data-aos-duration="600"
                      className="bg-white border-2 border-blue-800 text-blue px-4 sm:px-8 py-2 rounded-2xl text-blue-900 text-sm sm:text-base"
                    >
                      Let's Go
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-center mt-5 sm:mt-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
        </div>
      </div>
    </>
  );
}

export default Popular_Deals;
