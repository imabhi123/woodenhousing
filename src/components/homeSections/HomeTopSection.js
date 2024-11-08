// import React from "react";
// import img2 from "@/assets/svgimages/Background.png"; // Assuming the path is correct
// import home from "@/assets/svgimages/home.png"; // Assuming the path is correct
// import Image from "next/image";
// import CustomButton from "../CustomButton";
// import { IoIosArrowRoundForward } from "react-icons/io";

// const HomeTopSection = () => {
//   return (
//     <>
//       <div className="container mx-[15%] flex gap-5 items-center max-w-[1200px] my-3">
//         <span className={`${"text-[#1E1E21] font-medium"}`}>
//           Why wooden house?
//         </span>
//         <span className={`${"text-[#1E1E21] font-medium"}`}>Our Projects</span>
//         <span className={`${"text-[#1E1E21] font-medium"}`}>
//           3D design tour
//         </span>
//       </div>
//       <div
//         className="w-full h-[400px] bg-cover bg-no-repeat relative items-center flex"
//         style={{
//           backgroundImage: `url(${img2.src||null})`,
//           clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 90%)",
//         }}
//       >
//         <Image
//           src={home}
//           alt="home"
//           height={"100%"}
//           className="object-contain w-[700px] absolute bottom-0 right-0"
//         />
//         <div className="max-w-[450px] block ml-[200px]">
//           <p className="font-lexend font-semibold text-[#352E39] text-[28px] my-2">
//             Our Crafted Wooden house is the future of{" "}
//             <span className="text-[#D75337]">Modern Design</span>
//           </p>
//           <p className="font-lexend font-light text-[#423C45] text-[16px]">
//             WoodenHousing made 50+ hassle-free building process that delivers a
//             beautiful, sustainable home.
//           </p>
//           <p className="font-lexend font-medium text-[#352E39] text-[16px] mt-6">
//             Book a free design consultation now!
//           </p>
//           <div className="flex gap-2 mt-2">
//             <CustomButton
//               title="Explore Designs"
//               icon={<IoIosArrowRoundForward size={25} />}
//             />
//             <button className=" text-[#352E39] border-[#352E3947] border-2 px-5 py-2 rounded transition cursor-pointer font-lexend font-medium flex gap-2 items-center">
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomeTopSection;

"use client";
import React from "react";
import img2 from "@/assets/svgimages/Background.png"; // Assuming the path is correct
import home from "@/assets/svgimages/home.png"; // Assuming the path is correct
import Image from "next/image";
import CustomButton from "../CustomButton";
import { IoIosArrowRoundForward } from "react-icons/io";

const HomeTopSection = () => {
  return (
    <>
      
      <div
        className="w-full h-[450px] sm:h-[400px] bg-cover bg-no-repeat relative items-center flex flex-col sm:flex-row  px-4 md:px-0 sm:clip-path"
        style={{
          backgroundImage: `url(${img2.src||null})`,
        }}
      >
        {/* Image hidden on mobile and shown on larger screens */}
        <Image
          src={home}
          alt="home"
          className="object-contain w-[350px] sm:w-[500px] md:w-[700px] absolute bottom-0 right-0 block"
        />
        <div className="max-w-full md:max-w-[450px] block ml-0 sm:ml-[50px] md:ml-[200px]">
          <p className="font-lexend font-semibold text-[#352E39] text-[20px] sm:text-[28px] my-2">
            Our Crafted Wooden house is the future of{" "}
            <span className="text-[#D75337]">Modern Design</span>
          </p>
          <p className="font-lexend font-light text-[#423C45] text-[14px] sm:text-[16px]">
            WoodenHousing made 50+ hassle-free building process that delivers a
            beautiful, sustainable home.
          </p>
          <p className="font-lexend font-medium text-[#352E39] text-[14px] sm:text-[16px] mt-4 sm:mt-6">
            Book a free design consultation now!
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <CustomButton
              title="Explore Designs"
              icon={<IoIosArrowRoundForward size={25} />}
            />
            <button className="text-[#352E39] border-[#352E3947] border-2 px-5 py-2 rounded transition cursor-pointer font-lexend font-medium flex gap-2 items-center">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 640px) {
          .clip-path {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 90%);
          }
        }
      `}</style>
    </>
  );
};

export default HomeTopSection;
