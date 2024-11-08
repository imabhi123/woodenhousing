import React from "react";
import { Heart, Maximize2 } from "lucide-react";
import exterior from "@/assets/pages/design/exterior.jpeg";
import exterior1 from "@/assets/pages/design/eximage1.jpeg";
import exterior2 from "@/assets/pages/design/eximage2.jpeg";
import exterior3 from "@/assets/pages/design/eximage3.jpeg";
import { Button } from "../ui/button";
const PropertyListing = () => {
  const thumbnails = [
    {
      id: 1,
      alt: "Interior Living Room",
      src: exterior1,
      title: "Modern Living Room",
    },
    { id: 2, alt: "Luxury Bathroom", src: exterior2, title: "Luxury Bathroom" },
    { id: 3, alt: "Modern Kitchen", src: exterior3, title: "Modern Kitchen" },
  ];

  return (
    <div>
      <div className="px-[5%] md:px-[15%] py-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm text-gray-600 mb-1">
              <span className="text-[28px] font-semibold text-black">
                Top Results
              </span>{" "}
              (55 Designs)
            </div>
            <h1 className="text-[24px] font-bold pt-4">
              Glass House 70 - Log Cabin Design
            </h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          <div className="flex gap-2">
            <Button className="rounded-[50px] bg-[#D75337]">Floor Plan</Button>
            <Button className="rounded-[50px] bg-[#4D4453]">
              <div className=" bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              Whatsapp us
            </Button>
          </div>
        </div>
        <div className="flex gap-8">
          {/* Main Image Section */}
          <div className="relative">
            <div className="aspect-[16/9] w-full relative rounded-xl overflow-hidden bg-white">
              <img
                src={exterior.src||null}
                alt="Modern House Exterior"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1.5 text-sm rounded-lg flex items-center gap-2">
                <span>Exterior View</span>
              </div>
              <button className="absolute bottom-4 right-4 p-2 bg-black/50 text-white rounded-lg">
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className=" flex flex-col gap-[15px]">
            {thumbnails.map((thumb) => (
              <div
                key={thumb.id}
                className="w-[250px] h-[178px] rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer hover:ring-2 ring-white transition-all"
              >
                <img
                  src={thumb.src.src||null}
                  alt={thumb.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#F6F6F6] px-[5%] md:px-[15%] py-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm text-gray-600 mb-1">
              <span className="text-[28px] font-semibold text-black">
                Top Results
              </span>{" "}
              (55 Designs)
            </div>
            <h1 className="text-[24px] font-bold pt-4">
              Glass House 70 - Log Cabin Design
            </h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          <div className="flex gap-2">
            <Button className="rounded-[50px] bg-[#D75337]">Floor Plan</Button>
            <Button className="rounded-[50px] bg-[#4D4453]">
              <div className=" bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              Whatsapp us
            </Button>
          </div>
        </div>
        <div className="flex gap-8">
          <div className=" flex flex-col gap-[15px]">
            {thumbnails.map((thumb) => (
              <div
                key={thumb.id}
                className="w-[250px] h-[178px] rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer hover:ring-2 ring-white transition-all"
              >
                <img
                  src={thumb.src.src||null}
                  alt={thumb.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* Main Image Section */}
          <div className="relative">
            <div className="aspect-[16/9] w-full relative rounded-xl overflow-hidden bg-white">
              <img
                src={exterior.src||null}
                alt="Modern House Exterior"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1.5 text-sm rounded-lg flex items-center gap-2">
                <span>Exterior View</span>
              </div>
              <button className="absolute bottom-4 right-4 p-2 bg-black/50 text-white rounded-lg">
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;