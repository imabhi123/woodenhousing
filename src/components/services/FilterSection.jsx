'use client'

import React, { useState } from 'react';

const FilterSection = () => {
  const [selectedFloors, setSelectedFloors] = useState(1);
  const [selectedBedrooms, setSelectedBedrooms] = useState(1);
  const [areaRange, setAreaRange] = useState({ min: 250, max: 900 });

  return (
    <div className="p-4 mx-[15%] bg-white relative bottom-[60px]  rounded-lg shadow">
      <div className="flex pl-[10%] py-6 items-start justify-between gap-8 relative">
        {/* K Badge */}  

        {/* Floors Section */}
        <div className="flex-1">
          <div className="text-xs text-gray-700 font-medium mb-2">No. of floors</div>
          <div className="flex gap-2">
            {[1, 1.5, 2].map((floor) => (
              <label key={floor} className="relative flex items-center">
                <input
                  type="checkbox"
                  name="floors"
                  checked={selectedFloors === floor}
                  onChange={() => setSelectedFloors(floor)}
                  className=""
                />
                <div className={`
                  px-3 py-1  rounded relative
                `}>
                  {selectedFloors === floor && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500" />
                  )}
                  {floor}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Bedrooms Section */}
        <div className="flex-1">
          <div className="text-xs text-gray-700 font-medium mb-2">No. of Bedrooms</div>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((bedroom) => (
              <label key={bedroom} className="relative flex items-center">
                <input
                  type="checkbox"
                  name="bedrooms"
                  checked={selectedBedrooms === bedroom}
                  onChange={() => setSelectedBedrooms(bedroom)}
                  className=""
                />
                <div className={`
                  px-3 py-1  rounded relative
                `}>
                  {selectedBedrooms === bedroom && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500" />
                  )}
                  {bedroom}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Area Range Section */}
        <div className="flex-1">
          <div className="text-xs text-gray-700 font-medium mb-2">Total Area</div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={areaRange.min}
              onChange={(e) => setAreaRange({ ...areaRange, min: e.target.value })}
              className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
            />
            <span className="text-sm text-gray-600">sqft</span>
            <span className="mx-1 text-gray-400">-</span>
            <input
              type="number"
              value={areaRange.max}
              onChange={(e) => setAreaRange({ ...areaRange, max: e.target.value })}
              className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
            />
            <span className="text-sm text-gray-600">sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;