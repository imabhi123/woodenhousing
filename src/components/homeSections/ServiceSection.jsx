"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeadingText from "../HeadingText";
import Image from "next/image";

const ServicesCard = ({ title, description, imageSrc, className = "" }) => (
  <div
    className={`flex flex-col bg-white rounded-lg shadow-md overflow-hidden ${className}`}
  >
    <div className="relative h-48">
      <img height={500} width={500} src={imageSrc||null} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-2 text-center">{description}</p>
      <button
        className="inline-flex border px-2 py-1 rounded-full font-lexend font-medium gap-4 items-center border-[#C8C8C8] text-[#222222]"
        onClick={() => console.log(`Viewing ${title}`)}
      >
        View
        <div className="h-5 w-5 rounded-full items-center justify-center bg-[#D75337] flex">
          <ChevronRight size={15} color="#fff" />
        </div>
      </button>
    </div>
  </div>
);

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const services = [
    {
      title: "Wooden Cottages",
      description:
        "Cozy, handcrafted wooden cottages designed for comfort and natural charm.",
      imageSrc:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    },
    {
      title: "Wooden Houses",
      description:
        "Luxurious wooden villas offering style and sustainability in every detail.",
      imageSrc:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    },
    {
      title: "Wooden Pergola/Gazebo",
      description:
        "Elegant wooden pergolas perfectly enhancing your outdoor spaces.",
      imageSrc:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full px-4 py-12 mx-auto bg-[#F6F3F6]">
      <HeadingText title="Services" />
      <div className="text-center mb-12 mx-auto flex flex-col  max-w-[800px]">
        <p className="text-[#454545] font-oregano mb-2 text-[20px]">
          <span className="text-[#D75337]">&quot; </span>What we build today
          makes all the difference{" "}
          <span className="text-[#D75337]">tomorrow. &quot;</span>
        </p>
        <p className="text-[#636363] text-[16px] font-medium font-lexend">
          Our wide selection of <b>wooden based</b> home, resorts, Cafe, Gazebo,
          and Villas have been designed to combine traditional and modern
          architectural solutions with high-quality materials. Our services
          include timely project completion and comprehensive post-construction
          support.
        </p>
      </div>

      <div className="relative max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              {...service}
              className={`transition-opacity duration-300 ${
                index === currentSlide
                  ? "opacity-100"
                  : "opacity-100 lg:opacity-70"
              }`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-lg hidden lg:block hover:bg-gray-50 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-lg hidden lg:block hover:bg-gray-50 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
