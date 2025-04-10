import React from "react";
import { useParams } from "react-router-dom";
import { FaShoppingCart, FaStar, FaRupeeSign } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import categoriesData from "../Data/Data";
import hot_Deals_Data from "../Data/Hot_deal";
import popular_Week_Data from "../Data/popular_deals";
import checkoutHandle from "../Payment/Payment";
import { Link } from "react-router-dom";

function Product() {
  const { category } = useParams();
  
  // Determine which products to display based on category
  const filteredProducts = 
    category === "Hot_Deals" ? hot_Deals_Data :
    category === "all" ? categoriesData :
    category === "popular_week" ? hot_Deals_Data :
    category === "popular_sales" ? popular_Week_Data :
    categoriesData.filter(item => item.category === category);

  // Format price with rupee symbol
  const formatPrice = (price) => {
    if (typeof price === 'string' && price.startsWith('₹')) return price;
    return `₹${price}`;
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[85vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('../../../pattern.svg')] opacity-10"></div>
        
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">TechMate Electronics</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover authentic electronics with 
            <span className="font-bold text-yellow-300"> warranty</span>, 
            <span className="font-bold text-yellow-300"> EMI options</span>, and 
            <span className="font-bold text-yellow-300"> pan-India shipping</span>
          </p>
          
          <Link 
            to="#products" 
            className="inline-block px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Products Section */}
      <div id="products" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            {category === "Hot_Deals" ? "Hot Deals" : 
             category === "popular_week" ? "Popular This Week" : 
             category === "popular_sales" ? "Best Sellers" : 
             "Featured Products"}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {category === "Hot_Deals" ? "Limited-time offers on premium electronics" : 
             category === "popular_week" ? "Trending products loved by our customers" : 
             category === "popular_sales" ? "Our top-selling items this season" : 
             "Quality electronics for every need"}
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Product Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-4"
                  src={product.image || "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"}
                  alt={product.name}
                  loading="lazy"
                />
                {category === "Hot_Deals" && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <MdLocalOffer className="mr-1" /> Hot Deal
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.briefDescription}
                </p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-blue-600 flex items-center">
                    <FaRupeeSign className="mr-1" />
                    {formatPrice(product.price)}
                    {product.originalPrice && (
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        <FaRupeeSign className="inline mr-0.5" />
                        {product.originalPrice}
                      </span>
                    )}
                  </span>
                  <span className="flex items-center bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                    <FaStar className="mr-1 text-yellow-500" />
                    {product.rating}
                  </span>
                </div>

                <button
                  className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors duration-300"
                  onClick={() => checkoutHandle(product.price)}
                >
                  <FaShoppingCart className="mr-2" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;