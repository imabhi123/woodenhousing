'use client'
import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => setIsOn(!isOn);

  return (
    <div
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
        isOn ? 'bg-purple-700' : 'bg-gray-300'
      }`}
      onClick={handleToggle}
    >
      <div
        className={`h-4 w-4 rounded-full bg-white shadow-md transform transition-transform ${
          isOn ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </div>
  );
};

export default ToggleSwitch;
