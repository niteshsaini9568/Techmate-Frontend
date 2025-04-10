import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Testimonial() {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true
    });
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    
    return stars;
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our valued Indian clients who have experienced our services firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              img: "https://randomuser.me/api/portraits/women/12.jpg",
              name: "Priya Sharma",
              location: "Mumbai, Maharashtra",
              rating: 4.5,
              feedback:
                "Techmate's graphic design team created stunning branding for my startup. Their understanding of Indian aesthetics combined with modern design was impressive. The team was patient with all my revisions!",
            },
            {
              img: "https://randomuser.me/api/portraits/men/32.jpg",
              name: "Rahul Patel",
              location: "Ahmedabad, Gujarat",
              rating: 5,
              feedback:
                "As an electronics retailer, I was amazed by the quality of products and after-sales support. The team understands the Indian market well and provided solutions perfect for our customers' needs.",
            },
            {
              img: "https://randomuser.me/api/portraits/women/45.jpg",
              name: "Ananya Reddy",
              location: "Hyderabad, Telangana",
              rating: 4,
              feedback:
                "The digital marketing services helped my boutique reach customers across India. Their regional language expertise made campaigns more effective in tier 2 and 3 cities. Highly recommended!",
            },
            {
              img: "https://randomuser.me/api/portraits/men/65.jpg",
              name: "Vikram Singh",
              location: "Delhi NCR",
              rating: 4.8,
              feedback:
                "Techmate developed our e-commerce platform with excellent payment gateway integration for UPI and other Indian payment methods. Their understanding of Indian consumer behavior is exceptional.",
            },
            {
              img: "https://randomuser.me/api/portraits/women/68.jpg",
              name: "Deepika Iyer",
              location: "Chennai, Tamil Nadu",
              rating: 4.2,
              feedback:
                "Their tech support team is available even during odd hours, which is crucial for our business. The Hindi and regional language support makes communication so much easier.",
            },
            {
              img: "https://randomuser.me/api/portraits/men/75.jpg",
              name: "Arjun Kapoor",
              location: "Bangalore, Karnataka",
              rating: 4.7,
              feedback:
                "We've been using Techmate's services for 3 years now. Their pricing is very competitive for the Indian market without compromising on quality. Truly a 'Make in India' success story!",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
                  src={testimonial.img}
                  alt={`${testimonial.name} profile`}
                  loading="lazy"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-sm text-gray-600">
                  {testimonial.rating.toFixed(1)}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
              
              <div className="flex justify-end">
                <svg className="w-8 h-8 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;