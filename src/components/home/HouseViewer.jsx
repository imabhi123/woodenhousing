"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import img1 from "../../assets/images/3d_main.png";
import img2 from "../../assets/images/3d2.png";
import img3 from "../../assets/images/3d3.png";
import img4 from "../../assets/images/3d4.png";
import maximize from "@/assets/images/maximize.png";
import threedi from "@/assets/images/3d_vec.png";
import Image from "next/image";
// import Image3DViewer from "../Image3DViewer";

const HouseViewer = ({ item }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  console.log(item?.gallery3d);

  const houses = [
    { id: 1, imageUrl: img1, style: "Modern white" },
    { id: 2, imageUrl: img2, style: "Contemporary red" },
    { id: 3, imageUrl: img3, style: "Minimalist white" },
    { id: 4, imageUrl: img4, style: "Traditional" },
  ];

  const totalSlides = item?.gallery3d?.length;
  const visibleSlides = houses;

  const nextSlide = () => {
    setCurrentSlide((current) => (current === totalSlides ? 1 : current + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((current) => (current === 1 ? totalSlides : current - 1));
  };

  return (
    <div className=" p-4 bg-gradient-to-b from-gray-100 to-white rounded-lg shadow-lg">
      <h2 className=" p-4 px-[15%] text-3xl font-semibold text-gray-800">
        View in 3D
      </h2>

      <div className="relative mb-8 mx-[15%] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* <Image3DViewer /> */}
        <div className="relative py-12 px-[20%] bg-white">
          <Image
            height={500}
            width={500}
            src={item?.gallery3d[currentSlide - 1]}
            alt="3D House View"
            className="w-full object-cover rounded-lg transition-transform duration-500 ease-in-out transform scale-105 hover:scale-110"
          /> 
          {/* 3D rotation indicator */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1 text-sm text-gray-600">
            <div className=" flex items-center justify-center  rounded-full bg-white">
              <img className="w-[50px] h-[50px]" src={threedi.src} alt="" />
            </div>
          </div>
          {/* Expand button */}
          {/* <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-200">
            <Maximize2 className="w-5 h-5 text-gray-600" />
          </button> */}
        </div>
      </div>

      {/* Thumbnail navigation */}
      <div className="relative ">
        <div className="flex gap-4 no_scroll overflow-x-auto pb-4">
          {item?.gallery3d?.map((house, index) => (
            <div
              key={house.id}
              className={`relative rounded-lg flex-none  cursor-pointer `}
              onClick={() => setCurrentSlide(index + 1)}
            >
              <div className=" bg-white rounded-lg shadow-sm overflow-hidden">
                <Image
                  height={500}
                  width={500}
                  src={house}
                  alt={`House style `}
                  className="!w-[450px] h-[380px] object-cover  rounded-[17px] transform "
                />
                <button className="absolute bottom-2 right-2 p-1  rounded shadow-sm hover:bg-gray-200">
                  <img src={maximize.src} className="h-[30px] text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between px-[20%]">
          <button
            onClick={prevSlide}
            className="w-[55px] h-[55px] flex items-center justify-center bg-[#4b3055] rounded-full text-white shadow-md hover:bg-[#3b2444]"
          >
            <ChevronLeft size={20} className="" />
          </button>

          <div className="flex items-center gap-2 text-base font-semibold text-gray-800">
            {Array.from({ length: totalSlides }, (_, i) => {
              // Calculate the range of visible slides based on the current slide
              const start = Math.max(
                0,
                Math.min(currentSlide - 2, totalSlides - 4)
              );
              const end = start + 4;

              // Only render dots within the current visible range or the first and last slides for navigation
              if (i >= start && i < end) {
                return (
                  <span
                    key={i}
                    className={`cursor-pointer w-5 h-5 flex items-center justify-center ${
                      currentSlide === i + 1
                        ? "bg-[#D75337] text-white w-[35px] h-[35px] rounded-full"
                        : "text-gray-400 w-[35px] h-[35px]"
                    }`}
                    onClick={() => setCurrentSlide(i + 1)}
                  >
                    {i + 1}
                  </span>
                );
              }

              // Render '...' for hidden parts and add buttons for navigating to the first and last slides
              if (i === start - 1 || i === end) {
                return (
                  <span key={i} className="text-gray-400">
                    ...
                  </span>
                );
              }

              if (i === 0 && currentSlide > 3) {
                return (
                  <span
                    key={i}
                    className={`cursor-pointer w-5 h-5 flex items-center justify-center ${
                      currentSlide === 1
                        ? "bg-orange-500 text-white rounded-full"
                        : "text-gray-400"
                    }`}
                    onClick={() => setCurrentSlide(1)}
                  >
                    1
                  </span>
                );
              }

              if (i === totalSlides - 1 && currentSlide < totalSlides - 2) {
                return (
                  <span
                    key={i}
                    className={`cursor-pointer w-5 h-5 flex items-center justify-center ${
                      currentSlide === totalSlides
                        ? "bg-orange-500 text-white rounded-full"
                        : "text-gray-400"
                    }`}
                    onClick={() => setCurrentSlide(totalSlides)}
                  >
                    {totalSlides}
                  </span>
                );
              }

              return null;
            })}
          </div>

          <button
            onClick={nextSlide}
            className="w-[55px] h-[55px] flex items-center justify-center bg-[#4b3055] rounded-full text-white shadow-md hover:bg-[#3b2444]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation arrows and pagination */}
        {/* <div className="mt-4 flex items-center justify-between px-[20%]">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-white shadow-lg hover:bg-gray-600"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            {Array.from({ length: totalSlides }, (_, i) => (
              <span
                key={i}
                className={`cursor-pointer ${
                  currentSlide === i + 1 ? "text-orange-500" : "text-gray-400"
                }`}
                onClick={() => setCurrentSlide(i + 1)}
              >
                {i + 1}
              </span>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-white shadow-lg hover:bg-gray-600"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default HouseViewer;
