import Image from "next/image";
import React from "react";

const TechnologyCard = ({ Icon, title, description }) => {
  return (
    <div className="h-auto w-full sm:w-[200px] rounded-lg bg-transparent my-2 mx-3 flex flex-col overflow-hidden">
      <div className="w-full h-[100px] justify-center items-center flex overflow-hidden">
        <Image
          src={Icon}
          alt="Why Choose"
          className="h-[100%] w-[100%] object-cover rounded-lg"
        />
      </div>
      <div className="mt-3">
        <p className="font-lexend font-semibold text-[#FFFFFF] text-[16px]">
          {title}
        </p>
        <p className="font-lexend font-light text-[#FFFFFFBF] text-[13px] mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TechnologyCard;
