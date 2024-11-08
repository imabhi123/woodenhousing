import React from 'react';
import { Card } from '@/components/ui/card';
import prop_img from '@/assets/pages/threedesign/threeImage.png'
import { Button } from '../ui/button';
const PropertyCard = () => {
  return (
    <Card className=" bg-white shadow-xl">
      {/* Image Container */}
      <div className="relative  w-full bg-gray-100">
        <img 
          src={prop_img.src||null}
          alt="Glass House preview" 
          className="w-full h-full object-cover"
        />
        {/* Expand/3D icons */}
        <div className="absolute bottom-2 right-2 flex gap-2">
          <button className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4L20 20M20 20V8M20 20H8" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <span className="font-medium text-sm">3D</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className='flex justify-between'>
          <div>
        <p className="text-sm text-gray-600 mb-1">Holiday home 1 floor</p>
        <h2 className="text-xl  font-semibold mb-4">Glass House 70 - Log Cabin</h2>
        </div>
        <Button className="rounded-[50px] bg-[#D75337]">Floor Plan</Button>
        </div>
        <div className="space-y-2 border p-3 rounded-[12px]">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Carpet Area:</span>
            <span className="font-medium">49 sqft</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Total Area:</span>
            <span className="font-medium">99 - 105 sqft</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;