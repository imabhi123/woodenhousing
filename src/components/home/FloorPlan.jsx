import React from "react";
import { Check, CheckCircle2, XCircle } from "lucide-react"; // XCircle for not-checked icon
import Image from "next/image";
import HeadingText from "../HeadingText";
import img1 from "../../assets/images/floor_map1.png";
import img2 from "../../assets/images/floor_map2.png";

const FloorPlan = ({ item }) => {
  const projectDetails = item?.projectDetails || {};
  
  const floorDetails = {
    title: projectDetails?.title || "Floor Plan",
    subtitle: projectDetails?.subtitle || `Take a look at the floor plan of ${item?.title || "Wooden Cottage"}`,
    model: projectDetails?.model || "Model",
    floor: "1st Floor" || "1st Floor",
    totalArea: `${projectDetails?.totalArea || 97} sqft`,
    features: {
      "Living room": projectDetails?.floors?.[0]?.livingRoom,
      "Open kitchen": projectDetails?.floors?.[0]?.openKitchen,
      "Double bedroom": projectDetails?.floors?.[0]?.doubleBedroom,
      "Fixed wardrobes": projectDetails?.floors?.[0]?.fixedWardrobes,
      "Bathroom laundry room": projectDetails?.floors?.[0]?.bathroomLaundryRoom,
      "Storage room": projectDetails?.floors?.[0]?.storageRoom,
      "Technical room": projectDetails?.floors?.[0]?.technicalRoom,
    },
    floorPlanImage: projectDetails?.floors?.[0]?.floorPlan || img1,
    floorElevationImage: projectDetails?.floors?.[0]?.floorElevation || img2,
  };

  return (
    <div className="p-6 px-0">
      <div className="flex flex-col space-y-4">
        {/* Header Section */}
        <div className="text-center mb-6">
          <HeadingText title={floorDetails.title} />
          <p className="text-gray-600 mt-1">{floorDetails.subtitle}</p>
          <p className="text-gray-600">{floorDetails.model}</p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-8">
          {/* Floor Plans */}
          <div className="flex-1/2 flex justify-between space-x-6 space-y-6">
            {/* Top Floor Plan */}
            <div className="rounded-lg h-full p-4 bg-white">
              <Image
                height={500}
                width={500}
                src={floorDetails.floorPlanImage||null}
                alt="Floor Plan Top View"
                className="w-full h-[450px] object-contain"
              />
            </div>
            <div className="w-[40%]">
              <div className="rounded-lg p-6 bg-[#F5F5F5]">
                <div className="space-y-4">
                  <div className="pb-2">
                    <h3 className="text-2xl font-semibold">{floorDetails.floor}</h3>
                    <p className="text-lg font-semibold">Total area: {floorDetails.totalArea}</p>
                  </div>

                  <div className="space-y-2 flex flex-col gap-4">
                    {Object.entries(floorDetails.features).map(([feature, available], index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-6 h-6 flex justify-center items-center rounded-full bg-[#4A3456] overflow-hidden">
                          {available ? (
                            <Check  size={5} className="!w-4 !h-4  text-white rounded-full" />
                          ) : (
                            <XCircle className="w-10 h-10 bg-gray-300 text-gray-500 rounded-full" />
                          )}
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section View */}
          <div className="rounded-lg p-4 bg-white">
            <Image
              height={500}
              width={500}
              src={floorDetails.floorElevationImage||null}
              alt="Floor Plan Section View"
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* Repeated Floor Plan Details */}
        {/* <div className="flex flex-col gap-8">
          <div className="flex-1/2 flex  mt-[100px] justify-between space-x-6 space-y-6">
            <div className="w-[40%]">
              <div className="rounded-lg p-6 bg-[#F5F5F5]">
                <div className="space-y-4">
                  <div className="pb-2">
                    <h3 className="text-2xl font-semibold">{floorDetails.floor}</h3>
                    <p className="text-lg font-semibold">Total area: {floorDetails.totalArea}</p>
                  </div>

                  <div className="space-y-2 flex flex-col gap-4">
                    {Object.entries(floorDetails.features).map(([feature, available], index) => (
                       <div key={index} className="flex items-center gap-2">
                       <div className="w-6 h-6 flex justify-center items-center rounded-full bg-[#4A3456] overflow-hidden">
                         {available ? (
                           <Check  size={5} className="!w-4 !h-4  text-white rounded-full" />
                         ) : (
                           <XCircle className="w-10 h-10 bg-gray-300 text-gray-500 rounded-full" />
                         )}
                       </div>
                       <span className="text-gray-700">{feature}</span>
                     </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg p-4 bg-white">
              <Image
                height={500}
                width={500}
                src={floorDetails.floorPlanImage||null}
                alt="Floor Plan Top View"
                className="w-full h-[450px] object-contain"
              />
            </div>
          </div>

          <div className="rounded-lg p-4 bg-white">
            <Image
              height={500}
              width={500}
              src={floorDetails.floorElevationImage||null}
              alt="Floor Plan Section View"
              className="w-full object-contain"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FloorPlan;
