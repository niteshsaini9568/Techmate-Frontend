import React, { useEffect } from "react";
import hotDealsData from "../../Data/Hot_deal";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import checkoutHandle from "../../Payment/Payment";
import { useNavigate } from "react-router-dom";

function Week() {

  const navigate = useNavigate();

  const handlePayment = async (amount) => {
    await checkoutHandle(amount, navigate);
  };

  const hideScrollbarStyle = {
    overflowX: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  let popular_week = "popular_week";

  return (
    <>
      <div className="px-5 sm:px-10 lg:px-20 mt-10">
        {/* Header Section */}
        <div className="flex items-center gap-3 sm:gap-5">
          <img
            src="../../svgs/week.svg"
            className="w-8 sm:w-10 bg-purple-100 rounded-xl shadow2"
            alt="Hot Deals"
          />
          <h1 className="text-2xl lg:text-3xl font-bold">
            Popular of this week
          </h1>
        </div>

        {/* Scrollable Deals Section */}
        <div
          style={hideScrollbarStyle}
          className="flex gap-5 sm:gap-10 py-5 sm:py-10 overflow-x-auto hide-scrollbar"
        >
          {hotDealsData.map((deal) => (
            <div
              key={deal.id}
              className="flex-none w-full sm:w-80 lg:w-96 shadow1 rounded-box"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <div className="card bg-base-100">
                <figure>
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="h-40 sm:h-60 mt-5 object-cover"
                  />
                </figure>
                <div className="card-body text-center">
                  <h2 className="text-lg sm:text-xl font-bold text-center">
                    {deal.title}
                  </h2>
                  <p className="text-sm sm:text-base">{deal.description}</p>
                  <p className="font-bold mb-2 text-sm sm:text-base">
                    Rs.{deal.price}
                  </p>
                  <div className="card-actions justify-center items-center gap-3 sm:gap-5">
                    <button
                      onClick={() => {
                        handlePayment(deal.price);
                      }}
                      className="bg-white border-2 border-blue-800 px-4 sm:px-8 py-2 rounded-2xl text-blue-900 text-sm sm:text-base"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "More" Button */}
        <div
          className="flex items-center justify-center mt-5 sm:mt-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Link
                      to={`/category/${popular_week}`}
                      className="btn btn-primary px-10 sm:px-20 py-2 sm:py-3"
                      data-aos="fade-up" // "More" button fade-up animation
                      data-aos-duration="800"
                    >
                      More..
                    </Link>
        </div>
      </div>
    </>
  );
}

export default Week;
