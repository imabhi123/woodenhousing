import React, { useState } from "react";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleToggle}
        className={`flex items-center p-[2px] w-8  rounded-full transition-colors duration-300 
          ${
            isToggled ? "bg-[#D75337] justify-end" : "bg-gray-300 justify-start"
          }
        `}
      >
        <span
          className={`w-4 h-4 rounded-full transition-transform duration-300 transform bg-white`}
        ></span>
      </button>
    </div>
  );
};

export default ToggleButton;
