import React from "react";
import img1 from "@/assets/images/start_right.png";
import img2 from "@/assets/images/start_left.png";
import vec from "@/assets/images/Vector.png";
import { Button } from "../ui/button";
const LetsStart = () => {
  return (
    <div className="mt-4">
      <div className="flex h-[500px] z-0 max-w-screen overflow-x-hidden absolute">
        <img src={img1.src||null} className="w-[50%]" alt="" />
        <img src={img2.src||null} className="w-[50%]" alt="" />
      </div>
      <div className="h-[500px] w-screen relative z-[10] flex items-center justify-center">
        <div className="absolute">
          <img src={vec.src||null} alt="" />
        </div>
        <div className="flex flex-col items-center relative z-10 max-w-[400px] gap-6">
            <div>
          <p className="text-center text-[16px] font-semibold text-[#352E39]">Looking for a home?</p>
          <p className="text-center text-[32px] font-bold text-[#352E39]">Let’s Start Today!</p>
          <p className="text-center text-[#352E39]">
            We have a floor plan for you! We deliver world-class log and Modular
            prefab home on time, on budget, and in balance with nature’s
            perfection. Our best design team also assist you in creating that
            customized home you’ve been dreaming of.
          </p>
          </div>
          <Button className='text-white bg-[#D75337] text-[14px] font-semibold'>Contact Us Now</Button>
        </div>
      </div>
    </div>
  );
};

export default LetsStart;
