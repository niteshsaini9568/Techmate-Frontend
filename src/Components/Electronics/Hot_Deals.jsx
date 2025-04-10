import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import hotDealsData from "../../Data/Hot_deal";
import checkoutHandle from "../../Payment/Payment";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Hot_deals() {

  const navigate = useNavigate();

  const handlePayment = async (amount) => {
    await checkoutHandle(amount, navigate);
  };


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const hideScrollbarStyle = {
    overflowX: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  let Hot_Deals = "Hot_Deals";

  return (
    <>
      <div className="px-5 sm:px-10 lg:px-20">
        <div
          className="flex items-center gap-3 sm:gap-5"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <img
            src="../../svgs/Hot.svg"
            className="w-8 sm:w-10 bg-yellow-100 rounded-xl shadow1"
            alt="Hot Deals"
          />
          <h1 className="text-2xl lg:text-3xl font-bold">Hot Deals</h1>
        </div>
        <div
          style={hideScrollbarStyle}
          className="flex gap-5 sm:gap-8 lg:gap-10 py-5 overflow-x-auto hide-scrollbar"
        >
          {hotDealsData.map((deal) => (
            <div
              key={deal.id}
              className="flex-none w-full sm:w-80 lg:w-96 shadow1 rounded-box"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <div className="card bg-base-100">
                <figure>
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="h-40 sm:h-60 object-cover mt-5"
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
                      data-aos="fade-up" 
                      data-aos-duration="600"
                    >
                      Buy Now
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-5 sm:mt-10">
          <Link
            to={`/category/${Hot_Deals}`}
            className="btn btn-primary px-10 sm:px-20 py-2 sm:py-3"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            More..
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hot_deals;
