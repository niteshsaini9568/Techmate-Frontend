import React from "react";

function Facilities() {
  return (
    <div className="mt-5 px-4 md:px-0">
      {/* Stats Container */}
      <div className="stats flex flex-col md:flex-row gap-5 rounded-lg  bg-white ">
        {/* Stat 1 */}
        <div className="stat place-items-center text-center gap-1">
          <div className="stat-title text-sm md:text-base text-gray-600">
            Top Brands
          </div>
          <div className="stat-value text-primary text-2xl md:text-3xl font-bold">
            50+
          </div>
          <div className="stat-desc text-xs md:text-sm text-gray-500">
            Leading electronic <br />
            brands available
          </div>
        </div>

        {/* Stat 2 */}
        <div className="stat place-items-center text-center gap-1">
          <div className="stat-title text-sm md:text-base text-gray-600">
            Products
          </div>
          <div className="stat-value text-2xl md:text-3xl font-bold">1000+</div>
          <div className="stat-desc text-xs md:text-sm text-gray-500">
            Wide range of <br /> electronic gadgets
          </div>
        </div>

        {/* Stat 3 */}
        <div className="stat place-items-center text-center gap-1">
          <div className="stat-title text-sm md:text-base text-gray-600">
            Happy Customers
          </div>
          <div className="stat-value text-2xl md:text-3xl font-bold">2500+</div>
          <div className="stat-desc text-xs md:text-sm text-gray-500">
            Customer satisfaction
            <br /> is our priority
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
