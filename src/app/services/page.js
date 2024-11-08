'use client'

import PropertyCard from '@/components/services/PropertyCard'
import PropertyFilter from '@/components/services/PropertyFilter'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

const page = () => {
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
    <div className='bg-gray-100 pb-8'>
      <PropertyFilter/>
      <div className='mx-[15%]'>
        <p className='text-[20px] pb-4 font-bold'>Results - 32 Models</p>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {
            [0,0,0,0,0,0].map(()=><PropertyCard/>)
          }
        </div>
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
      </div>
    </div>
  )
}

export default page