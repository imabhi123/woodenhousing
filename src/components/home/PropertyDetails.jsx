"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Grid,
  Maximize2,
  Bath,
  Coffee,
  KanbanSquare,
  Construction,
} from "lucide-react";
import Image from "next/image";

const PropertyDetails = ({ item }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Define project details dynamically from `item.projectDetails`
  const projectDetails = [
    {
      icon: <Grid size={20} />,
      label: "Total Area",
      value: `${item?.projectDetails.totalArea || "-"} sqft`,
    },
    {
      icon: <Grid size={20} />,
      label: "Carpet Area",
      value: `${item?.projectDetails.carpetArea || "-"} sqft`,
    },
    {
      icon: <Home size={20} />,
      label: "Floors",
      value: item?.projectDetails.noOfFloors || "-",
    },
    {
      icon: <KanbanSquare size={20} />,
      label: "Price - /sqft",
      value: `Rs. ${item?.projectDetails.priceSqft || "-"}`,
    },
    {
      icon: <Home size={20} />,
      label: "No. of bedrooms",
      value: item?.projectDetails.bedrooms || "-",
    },
    {
      icon: <Maximize2 size={20} />,
      label: "No. of hall",
      value: item?.projectDetails.halls || "-",
    },
    {
      icon: <Bath size={20} />,
      label: "No. of Toilet",
      value: item?.projectDetails.toilets || "-",
    },
    {
      icon: <Home size={20} />,
      label: "No. of Deck",
      value: item?.projectDetails.decks || "-",
    },
    {
      icon: <Coffee size={20} />,
      label: "No. of kitchen",
      value: item?.projectDetails.kitchens || "-",
    },
    {
      icon: <Construction size={20} />,
      label: "Type of construction",
      value: item?.projectDetails.typeOfConstruction || "Residential",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % item?.gallery?.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + item?.gallery?.length) % item?.gallery?.length
    );
  };

  return (
    <div className="flex flex-col mt-12 md:flex-row gap-16 p-4 px-0">
      {/* Image Gallery Section */}
      <div className="w-full md:w-2/3 relative">
        <div className="relative rounded-xl ">
          <img
            src={item?.gallery[currentImage] || null}
            alt="Property"
            className="w-full rounded-xl object-cover"
          />

          <button
            onClick={prevImage}
            className="absolute left-[-20px] z-[100] shadow-lg top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
          >
            <ChevronLeft className="w-6 text-black h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-[-20px] z-[100] shadow-lg top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
          >
            <ChevronRight className="w-6 text-black h-6" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-4 mt-4 w-full justify-center relative bottom-[70px] no_scroll overflow-x-auto">
          {item?.gallery?.slice(0, 4).map((thumb, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`flex-shrink-0 rounded-lg overflow-hidden relative ${
                currentImage === idx ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <Image
                height={500}
                width={500}
                src={thumb || null}
                alt={`Thumbnail ${idx + 1}`}
                className="w-[156px] bg-[#D9D9D9] p-1 rounded-lg h-[121px] object-cover"
              />

              {idx === 3 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white text-[20px] max-w-[60%] font-semibold">
                    View more ({item.gallery.length - 4})
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Project Details Section */}
      <div className="w-full md:w-1/3">
        <h2 className="text-lg font-semibold mb-4 ">Project details</h2>

        <div className="bg-white rounded-xl shadow-sm border">
          <div>
            {projectDetails.map((detail, idx) => {
              return detail.value !== "-" ? (
                <div
                  key={idx}
                  className="flex border-b px-4 py-3 items-center justify-between"
                >
                  <div className="flex items-center gap-2  text-[#573C63]">
                    <div className="bg-[#F4EFF5] p-2 rounded-full">
                    {detail.icon}
                    </div>
                    <span>{detail.label}</span>
                  </div>
                  <span className="font-medium text-[#573C63]">
                    {detail.value}
                  </span>
                </div>
              ) : (
                <div key={idx}></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
