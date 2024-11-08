import React, { useState } from "react";
import WhyChooseCard from "./WhyChooseCard";
import img1 from "@/assets/svgimages/whychoose.png";
import img2 from "@/assets/svgimages/whychoose1.png";
import img3 from "@/assets/svgimages/whychoose2.png";
import img4 from "@/assets/svgimages/whychoose3.png";
import img5 from "@/assets/svgimages/whychoose4.png";
import img6 from "@/assets/svgimages/whychoose5.png";

const FeatureCard = ({ Icon, title, description, highlight }) => (
  <div className="flex flex-col items-center text-center p-4 min-w-[160px]">
    <div className="mb-3 relative">
      {highlight ? (
        <div className="border-2 border-red-500 rounded-lg p-2">
          <Icon className="w-6 h-6 text-gray-700" />
        </div>
      ) : (
        <Icon className="w-6 h-6 text-gray-700" />
      )}
    </div>
    <h3 className="text-sm font-medium mb-1">{title}</h3>
    <p className="text-xs text-gray-500">{description}</p>
  </div>
);

const WoodenHousingFeatures = () => {
  const [isPaused, setIsPaused] = useState(false);

  const features = [
    {
      Icon: img1,
      title: "$12.44 × 84",
      description: "Long-term protection for your investment",
      highlight: true,
    },
    {
      Icon: img2,
      title: "No Hidden Charges",
      description: "Transparent pricing, no surprises",
    },
    {
      Icon: img3,
      title: "Timely Delivery",
      description: "Lorem ipsum dolor sir amet consectetur adipisci",
    },
    {
      Icon: img4,
      title: "3D Models",
      description: "Realistic preview of your design",
    },
    {
      Icon: img5,
      title: "Durable Materials",
      description: "Built to last with high quality materials",
    },
    {
      Icon: img6,
      title: "Personalised Designs",
      description: "Customize wooden design built suit for you",
    },
    {
      Icon: img1,
      title: "100% Tax Benefits",
      description: "Experience savings",
    },
  ];

  // Double the features array to create seamless loop
  const doubledFeatures = [...features, ...features, ...features];

  return (
    <div className="max-w-full mx-[15%] px-4 py-3">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex animate-scroll ${isPaused ? "pause-animation" : ""}`}
          style={{
            width: `${doubledFeatures.length * 160}px`,
          }}
        >
          {doubledFeatures.map((feature, index) => (
            <div key={index} className="flex-none ">
              <WhyChooseCard {...feature} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default WoodenHousingFeatures;
