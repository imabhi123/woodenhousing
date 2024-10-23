import React from "react";

const CustomButton = ({ title = "", icon }) => {
  return (
    <button className="bg-[#D75438] text-white px-4 py-2 rounded hover:bg-[#D75430] transition cursor-pointer font-lexend font-medium flex gap-2 items-center text-center justify-center">
      {title} {icon}
    </button>
  );
};

export default CustomButton;
