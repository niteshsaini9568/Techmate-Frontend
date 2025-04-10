import React from "react";

function Banner() {
  return (
    <>
      <div>
        <div className="diff aspect-[16/9] h-[85vh]">
          <div className="diff-item-1">
            <div className="bg-blue-800 text-primary-content grid place-content-center text-center px-8">
              <h1 className="text-6xl lg:text-8xl font-extrabold">
                Welcome to TechMate
              </h1>
              <p className="mt-6 text-xl text-center font-medium">
                Experience innovation with top electronics brands. Explore
                cutting-edge gadgets designed to enhance your lifestyle.
              </p>
              <p className="mt-4 text-lg text-center">
                Our extensive range of products ensures that you find exactly
                what you're looking for, whether it's the latest smartphone, a
                high-performance laptop, or smart home devices that simplify
                your life.
              </p>
            </div>
          </div>
          {/* Second Slide - Explore Products */}
          <div className="diff-item-2">
            <div className="bg-base-200 grid place-content-center text-center px-8">
              <h1 className="text-6xl lg:text-8xl font-extrabold">
                Explore 100+ Products
              </h1>
              <p className="mt-6 text-xl text-center font-medium">
                From smartphones to smart appliances, TechMate brings you a
                curated selection of the latest electronics across all major
                categories.
              </p>
              <p className="mt-4 text-lg text-center">
                At TechMate, customer satisfaction is our top priority. We
                strive to provide you with not only the best products but also
                an unparalleled shopping experience, complete with expert advice
                and support.
              </p>
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
    </>
  );
}

export default Banner;
