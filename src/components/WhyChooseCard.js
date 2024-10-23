import Image from "next/image";
import React from "react";

const WhyChooseCard = ({ Icon, title, description, highlight }) => {
  return (
    <div className="h-auto w-[180px] border-[1px] border-[#F1EAE8] rounded-lg bg-white m-2">
      <div className="w-full bg-[#FEF8F7] h-[100px] justify-center items-center flex">
        <Image
          src={Icon}
          alt="Why Choose"
          className="h-[90px] w-[90px] object-contain"
        />
      </div>
      <div className="p-2">
        <p className="font-lexend font-medium text-[#232323] text-[15px] text-center">
          {title}
        </p>
        <p className="font-lexend font-medium text-[#737373] text-[13px] text-center mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseCard;
