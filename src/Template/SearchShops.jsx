import React, { useState } from "react";
import { 
  FaStar, 
  FaSearch, 
  FaPhone, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaClock,
  FaStore,
  FaTools,
  FaLaptop,
  FaMobileAlt
} from "react-icons/fa";
import { 
  MdLocationOn, 
  MdVerifiedUser, 
  MdDirections,
  MdEmail
} from "react-icons/md";
import { 
  GiAchievement, 
  GiReceiveMoney,
} from "react-icons/gi";
import { 
  IoMdConstruct 
} from "react-icons/io";
import shops_Data from "../Data/shops_Data";

function SearchShops() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredShops, setFilteredShops] = useState(shops_Data);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = shops_Data.filter(
      (shop) =>
        shop.name.toLowerCase().includes(query) ||
        shop.address.toLowerCase().includes(query) ||
        shop.services.some(service => service.toLowerCase().includes(query))
    );
    setFilteredShops(filtered);
  };

  const serviceIcons = {
    "Sales": <FaStore className="text-green-500" />,
    "Accessories": <IoMdConstruct className="text-purple-500" />,
    "Laptops": <FaLaptop className="text-red-500" />,
    "Phones": <FaMobileAlt className="text-yellow-500" />,
    "Warranty": <MdVerifiedUser className="text-indigo-500" />,
    "Consultation": <FaTools className="text-teal-500" />
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Find <span className="text-blue-600">Trusted</span> Electronics Shops
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover verified electronics retailers with quality products and excellent service
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 relative">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by shop name, location or services..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Results Section */}
        {filteredShops.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShops.map((shop, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  {/* Shop Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 flex items-center">
                        <MdVerifiedUser className="text-blue-500 mr-2" />
                        {shop.name}
                      </h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MdLocationOn className="mr-2 text-red-500" />
                        <span>{shop.address}</span>
                      </div>
                    </div>
                    <div className="flex items-center bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-sm">
                      <FaStar className="mr-1 text-yellow-500" />
                      {shop.rating}
                    </div>
                  </div>

                  {/* Shop Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-700">
                      <GiAchievement className="mr-2 text-yellow-500" />
                      <span>{shop.years} years in business</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaClock className="mr-2 text-purple-500" />
                      <span>Open: {shop.hours || "9AM - 8PM"}</span>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <FaTools className="mr-2 text-blue-500" />
                      Services Offered:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {shop.services.map((service, idx) => (
                        <span 
                          key={idx} 
                          className="inline-flex items-center bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                        >
                          {serviceIcons[service] || <FaStore className="mr-1 text-gray-500" />}
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <a 
                      href={shop.mapLink || "#"}
                      className="flex-1 flex items-center justify-center bg-blue-100 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <MdDirections className="mr-2" /> Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <FaSearch className="mx-auto text-5xl text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No shops found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or browse our recommended shops
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchShops;