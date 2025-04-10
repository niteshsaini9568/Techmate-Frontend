import React from "react";

function Samples() {
  return (
    <div className="mt-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Explore Our Creative Work
        </h1>
        <p className="font-bold text-gray-500 text-center mb-8">
          Discover stunning graphic design samples crafted to inspire and
          elevate your brand identity.
        </p>
      </div>
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full justify-center items-center"
        >
          <img
            src="../../Graphic/sample1.png"
            className="w-[70vw]"
            alt="Sample 1"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full justify-center items-center"
        >
          <img
            src="../../Graphic/sample2.png"
            className="w-[60vw]"
            alt="Sample 2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full justify-center items-center"
        >
          <img
            src="../../Graphic/sample3.png"
            className="w-[60vw]"
            alt="Sample 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Samples;
