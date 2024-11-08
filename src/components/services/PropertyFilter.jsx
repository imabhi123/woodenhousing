'use client'

// components/PropertyFilter.js
import { useState } from "react";
import bgImg from '@/assets/images/banner_image1.png'
import FilterSection from "./FilterSection";
const PropertyFilter = () => {
  const [minArea, setMinArea] = useState(250);
  const [maxArea, setMaxArea] = useState(500);

  return ( 
    <div className="  ">
      {/* Background section */}
      <div className="relative bg-cover bg-center h-48 " style={{ backgroundImage: `url('${bgImg.src||null}')` }}>
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="relative text-white text-center p-6">
          <h1 className="text-3xl font-bold">
            <span className="text-yellow-500">Wooden</span> Villa
          </h1>
          <p className="text-sm">Wood is a high-performance building material</p>
        </div>
      </div>

     <FilterSection/>
    </div>
  );
};

export default PropertyFilter;
