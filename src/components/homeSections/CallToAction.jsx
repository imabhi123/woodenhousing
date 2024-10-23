"use client";
import React from "react";
import bgimg from "@/assets/svgimages/Frame_628.png";
import tree1 from "@/assets/svgimages/tree-left.png";
import tree2 from "@/assets/svgimages/tree-right.png";
import Image from "next/image";
import CustomButton from "../CustomButton";

const CallToAction = () => {
  return (
    <div
      className="relative bg-blue-50 min-h-[70vh] text-center flex flex-col justify-center py-16 lg:py-24"
      style={{ background: `url('${bgimg.src}')` }}
    >
      {/* Background graphic */}

      {/* Main content */}

      <div className="relative z-10 max-w-3xl mx-auto items-center flex flex-col">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4 font-lexend">
          Let’s Start Today!
        </h1>
        <p className="text-lg lg:text-xl text-[#26373F] mb-8 px-4 lg:px-0  mx-auto font-lexend">
          We have a floor plan for you! We deliver{" "}
          <span className="font-semibold">world-class</span> log and modular
          prefab homes on time, on budget, and in balance with nature’s
          perfection. Our best design team also assists you in creating that
          customized home you’ve been dreaming of.
        </p>

        <CustomButton title="Contact Us Now" />
      </div>

      {/* Decorative trees */}
      <div className="absolute bottom-0 left-0">
        <Image src={tree1} alt="Tree left" className="w-32 lg:w-48" />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image src={tree2} alt="Tree right" className="w-32 lg:w-48" />
      </div>
    </div>
  );
};

export default CallToAction;
