import React, { useEffect } from "react";
import {
  FaCheckCircle,
  FaDollarSign,
  FaHeadset,
  FaLightbulb,
  FaBox,
  FaSmile,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Whytimeline from "./SuHome/Whytimeline";

function Why() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const iconStyles = "text-6xl  lg:text-6xl p-4 rounded-full mb-4";

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20 px-6 md:px-10 lg:px-20 py-10 h-auto lg:h-[80vh] relative bg-gradient-to-r from-white via-blue-100 to-blue-200">
      <div
        data-aos="zoom-in"
        className="relative text-center lg:text-left flex-1 lg:pr-10"
      >
        <img
          src="../../images/Rectangle3.png"
          className="hidden md:block absolute -top-10 -left-10 md:-top-16 md:-left-16 -z-10 w-24 md:w-40"
          alt="Background"
        />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Why Choose Us?
        </h1>
        <p className="py-4 text-sm md:text-base">
          We are dedicated to providing top-quality services and products that
          cater to all your design, technology, and gifting needs. Our team
          combines expertise, innovation, and a commitment to customer
          satisfaction to help your business succeed.
        </p>
        <Whytimeline />
      </div>

      {/* Right Section */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 overflow-hidden relative parent-div flex-1">
        {/* Column 1 */}
        <div className="flex flex-col gap-6 lg:gap-10 animate-upwards w-full lg:w-auto px-5">
          <div className="card bg-white shadow2">
            <div className="card-body items-center">
              <FaCheckCircle
                className={`${iconStyles} text-green-600 bg-green-100`}
              />
              <h2 className="card-title text-base lg:text-lg font-semibold">
                High Quality
              </h2>
              <p className="text-center text-sm md:text-base">
                We ensure each product meets strict quality standards, giving
                you peace of mind.
              </p>
            </div>
          </div>

          <div className="card bg-white shadow2">
            <div className="card-body items-center">
              <FaDollarSign
                className={`${iconStyles} text-blue-600 bg-blue-100`}
              />
              <h2 className="card-title text-base lg:text-lg font-semibold">
                Affordable Pricing
              </h2>
              <p className="text-center text-sm md:text-base">
                Competitive pricing without compromising on quality.
              </p>
            </div>
          </div>

          <div className="card bg-white shadow2">
            <div className="card-body items-center">
              <FaHeadset
                className={`${iconStyles} text-purple-600 bg-purple-100`}
              />
              <h2 className="card-title text-base lg:text-lg font-semibold">
                Expert Support
              </h2>
              <p className="text-center text-sm md:text-base">
                Our team is always ready to assist you with your questions and
                needs.
              </p>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6 lg:gap-10 animate-downwards w-full lg:w-auto px-5 pb-5">
          <div className="card bg-white shadow2">
            <div className="card-body items-center">
              <FaLightbulb
                className={`${iconStyles} text-yellow-600 bg-yellow-100`}
              />
              <h2 className="card-title text-base lg:text-lg font-semibold">
                Innovative Solutions
              </h2>
              <p className="text-center text-sm md:text-base">
                We offer creative and unique designs tailored for your business.
              </p>
            </div>
          </div>

          <div className="card bg-white shadow2">
            <div className="card-body items-center">
              <FaBox className={`${iconStyles} text-red-600 bg-red-100`} />
              <h2 className="card-title text-base lg:text-lg font-semibold">
                Wide Selection
              </h2>
              <p className="text-center text-sm md:text-base">
                From graphics to electronics and chocolates, we provide a
                variety of products.
              </p>
            </div>
          </div>

          <div className="card bg-white shadow2">
            <div className="card-body items-center">
              <FaSmile className={`${iconStyles} text-pink-600 bg-pink-100`} />
              <h2 className="card-title text-base lg:text-lg font-semibold">
                Customer Satisfaction
              </h2>
              <p className="text-center text-sm md:text-base">
                Building long-term relationships through quality and
                reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
