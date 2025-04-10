import React, { useState, useEffect } from "react";
import All from "./All";
import Dataset from "../../Data/Data";
import AOS from "aos";
import "aos/dist/aos.css";

function Tab() {
  const [selectedItem, setSelectedItem] = useState(
    Dataset.filter((item) => item.category === "Laptops")
  );

  const handleClick = (category) => {
    const selectedItems = Dataset.filter((item) => item.category === category);
    console.log(selectedItems);
    setSelectedItem(selectedItems);
  };

  const categories = [
    "Laptops",
    "Electronics Accessories",
    "Headphones",
    "Watches",
    "Tablets",
    "Smartphones",
    "Gaming",
    "Speakers",
    "Cameras",
  ];

  const hideScrollbarStyle = {
    overflowX: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      <div
        style={hideScrollbarStyle}
        className="button-container mx-20 mt-20 overflow-x-auto whitespace-nowrap"
      >
        {categories.map((category) => (
          <button
            key={category}
            className="text-sm px-12 mx-1 font-medium btn rounded-lg"
            onClick={() => handleClick(category)}
            aria-label={category}
            data-aos="fade-down" 
            data-aos-duration="500" 
          >
            {category}
          </button>
        ))}
      </div>
      <div className="content">
        <All selectedItem={selectedItem} />
      </div>
    </>
  );
}

export default Tab;
