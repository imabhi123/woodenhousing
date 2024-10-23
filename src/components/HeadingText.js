// import Image from "next/image";
// import React from "react";
// import lineRight from "@/assets/svgimages/lineRight.png";
// import lineLeft from "@/assets/svgimages/lineLeft.png";

// const HeadingText = ({
//   title = "",
//   title1 = "",
//   text = "",
//   topText = "",
//   white = false,
// }) => {
//   return (
//     <div className="flex flex-col justify-center items-center">
//       {topText && (
//         <div className="text-[#EB6A4E] font-lexend text-[16px] font-medium max-w-[300px] text-center">
//           {topText}
//         </div>
//       )}
//       <div className="flex  items-center gap-3 justify-center ">
//         <Image
//           alt="SVG Image"
//           src={lineLeft}
//           className=" w-full max-w-[300px] h-2 flex object-contain"
//         />

//         <p
//           className={`font-lexend ${
//             white ? "text-[#FFFFFF]" : "text-[#352E39]"
//           } p-0 m-0 text-[24px] font-bold`}
//         >
//           {title} {title1 && <span className="text-[#D75337]">{title1}</span>}
//         </p>
//         <Image
//           alt="SVG Image"
//           src={lineRight}
//           className=" w-full max-w-[300px] h-2 flex object-contain"
//         />
//       </div>
//       {text && (
//         <div
//           className={`${
//             white ? "text-[#FFFFFFB2]" : "text-[#636363]"
//           } font-lexend text-[14px] font-light max-w-[350px] text-center`}
//         >
//           {text}
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeadingText;

import Image from "next/image";
import React from "react";
import lineRight from "@/assets/svgimages/lineRight.png";
import lineLeft from "@/assets/svgimages/lineLeft.png";

const HeadingText = ({
  title = "",
  title1 = "",
  text = "",
  topText = "",
  white = false,
}) => {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-0">
      {topText && (
        <div className="text-[#EB6A4E] font-lexend text-[14px] sm:text-[16px] font-medium max-w-[250px] sm:max-w-[300px] text-center">
          {topText}
        </div>
      )}
      <div className="flex items-center gap-2 sm:gap-3 justify-center mt-3">
        <Image
          alt="SVG Image"
          src={lineLeft}
          className="w-full max-w-[100px] sm:max-w-[200px] md:max-w-[300px] h-2 object-contain"
        />

        <p
          className={`font-lexend ${
            white ? "text-[#FFFFFF]" : "text-[#352E39]"
          } p-0 m-0 text-[16px] sm:text-[24px] font-bold`}
        >
          {title} {title1 && <span className="text-[#D75337]">{title1}</span>}
        </p>

        <Image
          alt="SVG Image"
          src={lineRight}
          className="w-full max-w-[100px] sm:max-w-[200px] md:max-w-[300px] h-2 object-contain"
        />
      </div>
      {text && (
        <div
          className={`${
            white ? "text-[#FFFFFFB2]" : "text-[#636363]"
          } font-lexend text-[12px] sm:text-[14px] font-light max-w-[250px] sm:max-w-[350px] text-center mt-2 sm:mt-3`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default HeadingText;
