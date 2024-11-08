import React from 'react';
import design_bg from '@/assets/pages/threedesign/three_banner.jpeg';

const Banner = () => {
  return (
    <div 
      className="h-[300px] w-screen flex justify-center items-center relative"
      style={{
        backgroundImage: `url('${design_bg.src||null}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="flex flex-col items-center  text-white relative z-10">
        <p className="text-[32px] font-bold">3D Design Tour</p>
        <p className="text-[16px]">Wood is a high-performance building material</p>
      </div>
    </div>
  );
};

export default Banner;
