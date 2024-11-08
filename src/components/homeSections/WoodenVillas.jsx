"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import HeadingText from "../HeadingText";
import Image from "next/image";

const VillaCard = ({ imageUrl, title }) => (
  <div className="min-w-[280px] max-w-[280px] mr-4">
    <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img height={500} width={500}
        src={imageUrl}
        alt={"Wooden Villa"}
        className="w-full h-[200px] object-cover"
      />
    </div>
  </div>
);

const WoodenVillasShowcase = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const scrollContainerRef = React.useRef(null);

  const villas = [
    {
      id: "1",
      imageUrl:
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80",
      specs: "3 Bedroom, Hall and Kitchen (BHK)",
    },
    {
      id: "2",
      imageUrl:
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80",
      specs: "3 Bedroom, Hall and Kitchen (BHK)",
    },
    {
      id: "3",
      imageUrl:
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80",
      specs: "3 Bedroom, Hall and Kitchen (BHK)",
    },
    {
      id: "4",
      imageUrl:
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80",
      specs: "3 Bedroom, Hall and Kitchen (BHK)",
    },
    {
      id: "5",
      imageUrl:
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80",
      specs: "3 Bedroom, Hall and Kitchen (BHK)",
    },
  ];

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 300;
      const newPosition =
        direction === "right"
          ? scrollPosition + scrollAmount
          : scrollPosition - scrollAmount;

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });

      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 ">
      <HeadingText
        title="Series"
        text="A series of wooden houses designed with direct-angle views, allowing you to see the construction details of your home from every perspective."
      />
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-bold font-lexend text-[#352E39]">
            WOODEN COTTAGES
            <span className="text-[#D75337]"> SERIES</span>
          </h2>
          <p className="text-sm text-gray-600">
            1 Bedroom, Hall and Kitchen (BHK)
          </p>
        </div>
        <button
          className="text-[#D75337] text-sm transition-colors"
          onClick={() => console.log("See all clicked")}
        >
          See All
        </button>
      </div>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {villas.map((villa) => (
            <VillaCard key={villa.id} {...villa} />
          ))}
        </div>

        {/* Navigation arrow */}
        <button
          onClick={() => handleScroll("right")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white 
            rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10`}
          aria-label="Next villas"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="flex justify-between items-center mb-4 mt-2">
        <div>
          <h2 className="text-lg font-bold font-lexend text-[#352E39]">
            WOODEN HOUSE
            <span className="text-[#D75337]"> SERIES</span>
          </h2>
          <p className="text-sm text-gray-600">
            1 Bedroom, Hall and Kitchen (BHK)
          </p>
        </div>
        <button
          className="text-[#D75337] text-sm transition-colors"
          onClick={() => console.log("See all clicked")}
        >
          See All
        </button>
      </div>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {villas.map((villa) => (
            <VillaCard key={villa.id} {...villa} />
          ))}
        </div>

        {/* Navigation arrow */}
        <button
          onClick={() => handleScroll("right")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white 
            rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10`}
          aria-label="Next villas"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="flex justify-between items-center mb-4 mt-2">
        <div>
          <h2 className="text-lg font-bold font-lexend text-[#352E39]">
            WOODEN CAFE
            <span className="text-[#D75337]"> SERIES</span>
          </h2>
          <p className="text-sm text-gray-600">
            1 Bedroom, Hall and Kitchen (BHK)
          </p>
        </div>
        <button
          className="text-[#D75337] text-sm transition-colors"
          onClick={() => console.log("See all clicked")}
        >
          See All
        </button>
      </div>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {villas.map((villa) => (
            <VillaCard key={villa.id} {...villa} />
          ))}
        </div>

        {/* Navigation arrow */}
        <button
          onClick={() => handleScroll("right")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white 
            rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10`}
          aria-label="Next villas"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default WoodenVillasShowcase;
