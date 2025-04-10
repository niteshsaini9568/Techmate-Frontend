import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

function Brands() {
  useEffect(() => {
    AOS.init({ duration: 1000}); 
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <h1
        className="text-3xl font-bold mb-10"
        data-aos="fade-up" 
        data-aos-duration="800"
      >
        Featured Brands
      </h1>
      <div
        className="flex md:flex-row flex-col  gap-20"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src="../../Brands/boat.png"
          alt="Brand 1"
          className="w-40 h-20"
          data-aos="zoom-in"
          data-aos-duration="600"
        />
        <img
          src="../../Brands/godrej.jpeg"
          alt="Brand 2"
          className="w-40 h-24"
          data-aos="zoom-in" 
          data-aos-duration="600"
        />
        <img
          src="../../Brands/jbl.png"
          alt="Brand 3"
          className="w-40 h-24"
          data-aos="zoom-in" 
          data-aos-duration="600"
        />
        <img
          src="../../Brands/samsung.png"
          alt="Brand 4"
          className="w-40 h-24"
          data-aos="zoom-in" 
          data-aos-duration="600"
        />
        <img
          src="../../Brands/sony.png"
          alt="Brand 5"
          className="w-40 h-24"
          data-aos="zoom-in"
          data-aos-duration="600"
        />
      </div>
    </div>
  );
}

export default Brands;
