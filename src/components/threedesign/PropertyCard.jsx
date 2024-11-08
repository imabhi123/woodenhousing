import React from 'react';

function PropertyCard() {
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white p-5">
      {/* Image Section */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/300x200" // Replace with actual image URL
          alt="Glass House 70 - Log Cabin"
          className="w-full rounded-md"
        />
        {/* 3D Icon */}
        <div className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md">
          <span className="text-xs font-bold">3D</span>
        </div>
        {/* Expand Icon */}
        <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
          <span className="text-xs font-bold">🔍</span>
        </div>
      </div>
      
      {/* Text Section */}
      <div className="mt-4">
        <p className="text-sm text-gray-600">Holiday home 1 floor</p>
        <h2 className="text-lg font-semibold">Glass House 70 - Log Cabin</h2>
        <button className="mt-2 text-white bg-red-500 px-3 py-1 rounded-lg text-sm">
          Floor Plan
        </button>
      </div>
      
      {/* Details Section */}
      <div className="flex justify-between items-center mt-4 text-gray-700">
        <div>
          <p className="text-xs">Carpet Area:</p>
          <p className="text-sm font-semibold">69 sqft</p>
        </div>
        <div>
          <p className="text-xs">Total Area:</p>
          <p className="text-sm font-semibold">99 - 105 sqft</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
