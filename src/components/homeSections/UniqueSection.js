"use client";
import React from "react";
import HeadingText from "../HeadingText";
import Image from "next/image";
import logoIcon from "@/assets/svgimages/logoIcon.png";
import unique1 from "@/assets/svgimages/unique1.png";
import unique2 from "@/assets/svgimages/unique2.png";
import unique3 from "@/assets/svgimages/unique3.png";
import { CiCircleQuestion } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import ToggleButton from "../ToggleButton";
import CustomButton from "../CustomButton";

const UniqueSection = () => {
  const Items = [
    {
      icon: unique1,
      title: "Quality of Wood",
      description:
        "We use superior wood known for its natural insect protection, low moisture and natural sustainability.",
    },
    {
      icon: unique2,
      title: "Customization",
      description:
        "We offer personalized design options with 3D view to tailor every detail of your wooden house to your preferences, ensuring a unique and customized living experience.",
    },
    {
      icon: unique3,
      title: "Deadline Commitment",
      description:
        "We are dedicated towards meeting our deadlines, ensuring completion of your wooden house on time without compromising on the quality.",
    },
  ];
  return (
    <div className="w-full h-auto bg-cover bg-no-repeat relative flex flex-col p-8 ">
      <HeadingText
        title="What makes us "
        title1="unique?"
        text="Wood cladding is a material applied to the outside of a building to protect the exterior from damage. It acts as a shield, keeping your building safe from the elements and extending its lifespan."
      />
      <div className="flex z-10 gap-6 max-w-[1000px] w-full self-center sm:flex-row flex-col">
        <div className="flex gap-2 flex-col">
          {Items?.map((v, i) => (
            <div className="flex gap-2 items-center " key={i}>
              <Image
                src={v.icon}
                alt="logo"
                className="h-[90px] w-[90px] object-contain "
              />
              <div className="flex-1">
                <p
                  className={`font-lexend text-[#181818] p-0 m-0 text-[16px] font-semibold`}
                >
                  {v.title}
                </p>
                <p
                  className={`font-lexend text-[#3F3F3F] p-0 m-0 text-[14px] font-light`}
                >
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-2 border-[#E35C3F] rounded-lg p-4 sm:max-w-[300px] w-full w-full bg-white">
          <div className="flex items-center gap-2">
            <h1 className="text-[#202020] text-[16px] font-lexend font-semibold">
              Book <span className="text-[#E35C3F]">Free</span> design
              consultation
            </h1>
            <CiCircleQuestion />
          </div>
          <div className="flex flex-col mt-2">
            <p className="text-[#474747] font-lexend font-light text-[14px] p-0 m-0">
              Name:
            </p>
            <input
              className="bg-[#F8F8F8] p-2 rounded-sm outline-none"
              placeholder="Rahul K."
            />
          </div>
          <div className="flex flex-col mt-1">
            <p className="text-[#474747] font-lexend font-light text-[14px] p-0 m-0">
              Email:
            </p>
            <input
              className="bg-[#F8F8F8] p-2 rounded-sm outline-none"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="flex flex-col mt-1">
            <p className="text-[#474747] font-lexend font-light text-[14px] p-0 m-0">
              Mobile Number:
            </p>
            <div className="bg-[#F8F8F8] flex items-center gap-1">
              <svg
                width="20"
                height="21"
                viewBox="0 0 30 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 17.7689C0 18.6258 0.340384 19.4475 0.94627 20.0534C1.55216 20.6593 2.37392 20.9997 3.23077 20.9997H25.8462C26.703 20.9997 27.5248 20.6593 28.1307 20.0534C28.7365 19.4475 29.0769 18.6258 29.0769 17.7689V13.7305H0V17.7689Z"
                  fill="#138808"
                />
                <path
                  d="M29.0769 7.26923V3.23077C29.0769 2.37392 28.7365 1.55216 28.1307 0.94627C27.5248 0.340383 26.703 0 25.8462 0H3.23077C2.37392 0 1.55216 0.340383 0.94627 0.94627C0.340384 1.55216 0 2.37392 0 3.23077L0 7.26923H29.0769Z"
                  fill="#FF9933"
                />
                <path d="M0 7H29.0769V14.0003H0V7Z" fill="#F7F7F7" />
                <path
                  d="M14.5394 13.7311C16.3237 13.7311 17.7701 12.2846 17.7701 10.5003C17.7701 8.716 16.3237 7.26953 14.5394 7.26953C12.7551 7.26953 11.3086 8.716 11.3086 10.5003C11.3086 12.2846 12.7551 13.7311 14.5394 13.7311Z"
                  fill="#000080"
                />
                <path
                  d="M14.5385 13.2263C16.044 13.2263 17.2644 12.0059 17.2644 10.5004C17.2644 8.99487 16.044 7.77441 14.5385 7.77441C13.033 7.77441 11.8125 8.99487 11.8125 10.5004C11.8125 12.0059 13.033 13.2263 14.5385 13.2263Z"
                  fill="#F7F7F7"
                />
                <path
                  d="M14.6185 9.49004L14.5377 10.015L14.457 9.49004L14.5377 7.91504L14.6185 9.49004ZM13.869 8.00308L14.1985 9.54496L14.4125 10.0312L14.3544 9.50377L13.869 8.00308ZM13.2454 8.26154L13.9627 9.66531L14.2954 10.0797L14.1032 9.58454L13.2454 8.26154ZM12.7099 8.67185L13.7664 9.843L14.1953 10.1572L13.8811 9.72831L12.7099 8.67185ZM12.2996 9.20735L13.6226 10.0651L14.1177 10.2573L13.7034 9.92458L12.2996 9.20735ZM12.0412 9.83089L13.5419 10.3163L14.0693 10.3745L13.583 10.1604L12.0412 9.83089ZM11.9531 10.4997L13.5281 10.5804L14.0531 10.4997L13.5281 10.4189L11.9531 10.4997ZM12.0412 11.1684L13.583 10.8389L14.0693 10.6248L13.5419 10.683L12.0412 11.1684ZM12.2996 11.792L13.7034 11.0747L14.1177 10.742L13.6226 10.9342L12.2996 11.792ZM12.7099 12.3275L13.8811 11.271L14.1953 10.8421L13.7664 11.1563L12.7099 12.3275ZM13.2454 12.7378L14.1032 11.4148L14.2954 10.9197L13.9627 11.334L13.2454 12.7378ZM13.869 12.9962L14.3544 11.4955L14.4125 10.9681L14.1985 11.4543L13.869 12.9962ZM14.5377 13.0843L14.6185 11.5093L14.5377 10.9843L14.457 11.5093L14.5377 13.0843ZM15.2065 12.9962L14.877 11.4543L14.6629 10.9681L14.7211 11.4955L15.2065 12.9962ZM15.83 12.7378L15.1128 11.334L14.78 10.9197L14.9723 11.4148L15.83 12.7378ZM16.3655 12.3275L15.3091 11.1563L14.8802 10.8421L15.1944 11.271L16.3655 12.3275ZM16.7759 11.792L15.4529 10.9342L14.9577 10.742L15.3721 11.0747L16.7759 11.792ZM17.0343 11.1684L15.5336 10.683L15.0062 10.6248L15.4924 10.8389L17.0343 11.1684ZM17.1224 10.4997L15.5474 10.4189L15.0224 10.4997L15.5474 10.5804L17.1224 10.4997ZM17.0343 9.83089L15.4924 10.1604L15.0062 10.3745L15.5336 10.3163L17.0343 9.83089ZM16.7759 9.20735L15.3721 9.92458L14.9577 10.2573L15.4529 10.0651L16.7759 9.20735ZM16.3655 8.67185L15.1944 9.72831L14.8802 10.1572L15.3091 9.843L16.3655 8.67185ZM15.83 8.26154L14.9723 9.58454L14.78 10.0797L15.1128 9.66531L15.83 8.26154ZM15.2065 8.00308L14.7211 9.50377L14.6629 10.0312L14.877 9.54496L15.2065 8.00308Z"
                  fill="#6666B3"
                />
                <path
                  d="M14.183 7.96273C14.2722 7.96273 14.3446 7.8904 14.3446 7.80119C14.3446 7.71197 14.2722 7.63965 14.183 7.63965C14.0938 7.63965 14.0215 7.71197 14.0215 7.80119C14.0215 7.8904 14.0938 7.96273 14.183 7.96273Z"
                  fill="#000080"
                />
                <path
                  d="M13.4955 8.1473C13.5847 8.1473 13.6571 8.07497 13.6571 7.98576C13.6571 7.89654 13.5847 7.82422 13.4955 7.82422C13.4063 7.82422 13.334 7.89654 13.334 7.98576C13.334 8.07497 13.4063 8.1473 13.4955 8.1473Z"
                  fill="#000080"
                />
                <path
                  d="M12.8803 8.50179C12.9695 8.50179 13.0418 8.42946 13.0418 8.34025C13.0418 8.25103 12.9695 8.17871 12.8803 8.17871C12.7911 8.17871 12.7188 8.25103 12.7188 8.34025C12.7188 8.42946 12.7911 8.50179 12.8803 8.50179Z"
                  fill="#000080"
                />
                <path
                  d="M12.3783 9.00374C12.4676 9.00374 12.5399 8.93142 12.5399 8.8422C12.5399 8.75299 12.4676 8.68066 12.3783 8.68066C12.2891 8.68066 12.2168 8.75299 12.2168 8.8422C12.2168 8.93142 12.2891 9.00374 12.3783 9.00374Z"
                  fill="#000080"
                />
                <path
                  d="M12.0229 9.61898C12.1121 9.61898 12.1844 9.54665 12.1844 9.45744C12.1844 9.36822 12.1121 9.2959 12.0229 9.2959C11.9337 9.2959 11.8613 9.36822 11.8613 9.45744C11.8613 9.54665 11.9337 9.61898 12.0229 9.61898Z"
                  fill="#000080"
                />
                <path
                  d="M11.8393 10.3055C11.9285 10.3055 12.0008 10.2332 12.0008 10.144C12.0008 10.0547 11.9285 9.98242 11.8393 9.98242C11.7501 9.98242 11.6777 10.0547 11.6777 10.144C11.6777 10.2332 11.7501 10.3055 11.8393 10.3055Z"
                  fill="#000080"
                />
                <path
                  d="M11.8393 11.0164C11.9285 11.0164 12.0008 10.9441 12.0008 10.8549C12.0008 10.7657 11.9285 10.6934 11.8393 10.6934C11.7501 10.6934 11.6777 10.7657 11.6777 10.8549C11.6777 10.9441 11.7501 11.0164 11.8393 11.0164Z"
                  fill="#000080"
                />
                <path
                  d="M12.0229 11.703C12.1121 11.703 12.1844 11.6306 12.1844 11.5414C12.1844 11.4522 12.1121 11.3799 12.0229 11.3799C11.9337 11.3799 11.8613 11.4522 11.8613 11.5414C11.8613 11.6306 11.9337 11.703 12.0229 11.703Z"
                  fill="#000080"
                />
                <path
                  d="M12.3783 12.3182C12.4676 12.3182 12.5399 12.2459 12.5399 12.1567C12.5399 12.0674 12.4676 11.9951 12.3783 11.9951C12.2891 11.9951 12.2168 12.0674 12.2168 12.1567C12.2168 12.2459 12.2891 12.3182 12.3783 12.3182Z"
                  fill="#000080"
                />
                <path
                  d="M12.8803 12.8211C12.9695 12.8211 13.0418 12.7488 13.0418 12.6596C13.0418 12.5704 12.9695 12.498 12.8803 12.498C12.7911 12.498 12.7188 12.5704 12.7188 12.6596C12.7188 12.7488 12.7911 12.8211 12.8803 12.8211Z"
                  fill="#000080"
                />
                <path
                  d="M13.4955 13.1756C13.5847 13.1756 13.6571 13.1033 13.6571 13.0141C13.6571 12.9249 13.5847 12.8525 13.4955 12.8525C13.4063 12.8525 13.334 12.9249 13.334 13.0141C13.334 13.1033 13.4063 13.1756 13.4955 13.1756Z"
                  fill="#000080"
                />
                <path
                  d="M14.183 13.3602C14.2722 13.3602 14.3446 13.2879 14.3446 13.1986C14.3446 13.1094 14.2722 13.0371 14.183 13.0371C14.0938 13.0371 14.0215 13.1094 14.0215 13.1986C14.0215 13.2879 14.0938 13.3602 14.183 13.3602Z"
                  fill="#000080"
                />
                <path
                  d="M14.894 13.3602C14.9832 13.3602 15.0555 13.2879 15.0555 13.1986C15.0555 13.1094 14.9832 13.0371 14.894 13.0371C14.8047 13.0371 14.7324 13.1094 14.7324 13.1986C14.7324 13.2879 14.8047 13.3602 14.894 13.3602Z"
                  fill="#000080"
                />
                <path
                  d="M15.5795 13.1756C15.6687 13.1756 15.741 13.1033 15.741 13.0141C15.741 12.9249 15.6687 12.8525 15.5795 12.8525C15.4903 12.8525 15.418 12.9249 15.418 13.0141C15.418 13.1033 15.4903 13.1756 15.5795 13.1756Z"
                  fill="#000080"
                />
                <path
                  d="M16.1947 12.8211C16.284 12.8211 16.3563 12.7488 16.3563 12.6596C16.3563 12.5704 16.284 12.498 16.1947 12.498C16.1055 12.498 16.0332 12.5704 16.0332 12.6596C16.0332 12.7488 16.1055 12.8211 16.1947 12.8211Z"
                  fill="#000080"
                />
                <path
                  d="M16.6967 12.3182C16.7859 12.3182 16.8582 12.2459 16.8582 12.1567C16.8582 12.0674 16.7859 11.9951 16.6967 11.9951C16.6075 11.9951 16.5352 12.0674 16.5352 12.1567C16.5352 12.2459 16.6075 12.3182 16.6967 12.3182Z"
                  fill="#000080"
                />
                <path
                  d="M17.0522 11.703C17.1414 11.703 17.2137 11.6306 17.2137 11.5414C17.2137 11.4522 17.1414 11.3799 17.0522 11.3799C16.9629 11.3799 16.8906 11.4522 16.8906 11.5414C16.8906 11.6306 16.9629 11.703 17.0522 11.703Z"
                  fill="#000080"
                />
                <path
                  d="M17.2358 11.0164C17.325 11.0164 17.3973 10.9441 17.3973 10.8549C17.3973 10.7657 17.325 10.6934 17.2358 10.6934C17.1465 10.6934 17.0742 10.7657 17.0742 10.8549C17.0742 10.9441 17.1465 11.0164 17.2358 11.0164Z"
                  fill="#000080"
                />
                <path
                  d="M17.2358 10.3055C17.325 10.3055 17.3973 10.2332 17.3973 10.144C17.3973 10.0547 17.325 9.98242 17.2358 9.98242C17.1465 9.98242 17.0742 10.0547 17.0742 10.144C17.0742 10.2332 17.1465 10.3055 17.2358 10.3055Z"
                  fill="#000080"
                />
                <path
                  d="M17.0522 9.61898C17.1414 9.61898 17.2137 9.54665 17.2137 9.45744C17.2137 9.36822 17.1414 9.2959 17.0522 9.2959C16.9629 9.2959 16.8906 9.36822 16.8906 9.45744C16.8906 9.54665 16.9629 9.61898 17.0522 9.61898Z"
                  fill="#000080"
                />
                <path
                  d="M16.6967 9.00374C16.7859 9.00374 16.8582 8.93142 16.8582 8.8422C16.8582 8.75299 16.7859 8.68066 16.6967 8.68066C16.6075 8.68066 16.5352 8.75299 16.5352 8.8422C16.5352 8.93142 16.6075 9.00374 16.6967 9.00374Z"
                  fill="#000080"
                />
                <path
                  d="M16.1947 8.50179C16.284 8.50179 16.3563 8.42946 16.3563 8.34025C16.3563 8.25103 16.284 8.17871 16.1947 8.17871C16.1055 8.17871 16.0332 8.25103 16.0332 8.34025C16.0332 8.42946 16.1055 8.50179 16.1947 8.50179Z"
                  fill="#000080"
                />
                <path
                  d="M15.5795 8.1473C15.6687 8.1473 15.741 8.07497 15.741 7.98576C15.741 7.89654 15.6687 7.82422 15.5795 7.82422C15.4903 7.82422 15.418 7.89654 15.418 7.98576C15.418 8.07497 15.4903 8.1473 15.5795 8.1473Z"
                  fill="#000080"
                />
                <path
                  d="M14.894 7.96273C14.9832 7.96273 15.0555 7.8904 15.0555 7.80119C15.0555 7.71197 14.9832 7.63965 14.894 7.63965C14.8047 7.63965 14.7324 7.71197 14.7324 7.80119C14.7324 7.8904 14.8047 7.96273 14.894 7.96273Z"
                  fill="#000080"
                />
                <path
                  d="M14.5375 11.2263C14.9389 11.2263 15.2644 10.9009 15.2644 10.4994C15.2644 10.0979 14.9389 9.77246 14.5375 9.77246C14.136 9.77246 13.8105 10.0979 13.8105 10.4994C13.8105 10.9009 14.136 11.2263 14.5375 11.2263Z"
                  fill="#000080"
                />
              </svg>
              <FaChevronDown color="#474747" size={10} />
              <p className="text-[#474747] font-lexend font-light text-[14px] p-0 m-0">
                +91
              </p>

              <input
                className="flex-1 p-2 rounded-sm bg-[#F8F8F8] outline-none"
                placeholder="1234567890"
              />
            </div>

            <div className="bg-[#F8F8F8] flex items-center gap-1 my-2">
              <ToggleButton />
              <p className="text-[#474747] font-lexend font-normal text-[14px] p-0 m-0">
                Reach me on whatsapp
              </p>
            </div>
            <CustomButton title="Meet our Architect" />
          </div>
        </div>
      </div>
      <Image
        src={logoIcon}
        alt="logo"
        className="h-[100%] w-[50%] object-contain absolute  bottom-0 right-0 z-0"
      />
    </div>
  );
};

export default UniqueSection;
