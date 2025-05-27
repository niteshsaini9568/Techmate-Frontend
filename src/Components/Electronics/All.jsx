import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import checkoutHandle from "../../Payment/Payment";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


function All({ selectedItem }) {
  
  const navigate = useNavigate();

  const handlePayment = async (amount) => {
    let price = parseFloat(amount);
    await checkoutHandle(price, navigate);
  };

  const hideScrollbarStyle = {
    overflowX: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  let all = "all";
  return (
    <>
      <div className="px-5 sm:px-10 lg:px-20">
        <div
          style={hideScrollbarStyle}
          className="flex gap-5 sm:gap-8 lg:gap-10 my-10 py-5 overflow-x-auto hide-scrollbar border-t-2 border-b-2" // Ensure horizontal overflow only
        >
          {selectedItem.length > 0 ? (
            selectedItem.map((item, index) => (
              <div
                key={index}
                className="flex-none rounded-box w-full sm:w-80 lg:w-96"
                data-aos="fade-up" 
                data-aos-delay={`${index * 100}`} 
              >
                <div className="card bg-base-100 shadow-xl border-2 border-slate-200">
                  <figure>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-40 sm:h-52 mt-5 object-cover"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h2 className="text-lg sm:text-xl font-bold text-center">
                      {item.name}
                    </h2>
                    <p className="text-sm sm:text-base">
                      {item.briefDescription}
                    </p>
                    <p className="font-bold mb-2 text-sm sm:text-base">
                      Rs.{item.price.toFixed(2)}
                    </p>
                    <div className="card-actions justify-center items-center gap-5">
                      <button
                        data-aos="zoom-in" 
                        data-aos-duration="500"
                        onClick={() => {
                          handlePayment(item.price);
                        }}
                        className="bg-white border-2 border-blue-800 px-5 sm:px-8 py-2 rounded-2xl text-blue-900 text-sm sm:text-base"
                      >
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No items to display</p> 
          )}
        </div>

        <div className="flex items-center justify-center mt-10">
          <Link
            to={`/category/${all}`}
            data-aos="fade-down" 
            data-aos-duration="500"
            className="btn btn-primary px-10 sm:px-20 py-2 sm:py-3"
          >
            More..
          </Link>
        </div>
      </div>
    </>
  );
}

export default All;
