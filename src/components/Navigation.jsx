'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react'

const Navigation = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

  const houses = [
   
  ];

  const totalSlides = 5;
  const visibleSlides = houses;

  const nextSlide = () => {
    setCurrentSlide((current) => (current === totalSlides ? 1 : current + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((current) => (current === 1 ? totalSlides : current - 1));
  };
  return (
    <div className="mt-4 flex items-center justify-between px-[20%]">
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
  </div>
  )
}

export default Navigation