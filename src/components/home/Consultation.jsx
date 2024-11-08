"use client";
import React, { useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import ToggleSwitch from "./Toggle";
import Image from "next/image";
import imgg from "@/assets/images/frame.png";
import inner_page_vec from "@/assets/images/inner_page_vec.png";
import { FaWhatsapp } from "react-icons/fa6";
import { toast } from "react-toastify";

const WhatsAppContact = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="flex justify-between mt-56 items-center   p-6 px-0">
      <div className="absolute flex justify-center z-[0] w-[70%]">
        <img src={inner_page_vec.src} className="" alt="" />
      </div>
      {/* <div className="flex items-center gap-2   justify-center mb-6 ">
        <Image
          src={imgg.src || null}
          className="relative z-10"
          height={180}
          width={400}
        />
      </div> */}
      <WhatsAppContactt />

      <p className="text-[#888686] text-[24px] relative z-10">or</p>

      <div className=" border-[#D75337] relative z-10 bg-white w-[40%] border-[3px] rounded-lg p-6">
        <h2 className="text-[28px] font-semibold mb-4">
          Get <span className="text-[#D75337]">free</span> consultation
        </h2>

        <div className="space-y-4">
          <p className="text-[18px] text-gray-600">
            Please enter your mobile number:
          </p>

          <div className="flex gap-2">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-3 flex items-center">
                🇮🇳
                <span className="ml-1 text-gray-600">+91</span>
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full pl-20 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="1234567890"
              />
            </div>
            <button onClick={()=>toast.success("Thank you! We’ve received your request for a free consultation.")} className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
              <ArrowRight className="w-10 h-5" />
            </button>
          </div>

          <label className="flex items-center gap-2 text-[18px] font-bold text-gray-600">
            <ToggleSwitch />
            Reach me on whatsapp
          </label>

          <button onClick={()=>toast.success("Thank you! We’ve received your request for a free consultation.")} className="w-full py-2 bg-red-100 text-[#D75337] rounded-lg hover:bg-red-200 transition-colors">
            Meet our architect
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppContact;

const WhatsAppContactt = () => {
  return (
    <div className="flex items-center gap-2 space-x-4 bg-[#F5FDF4] justify-center relative z-10 w-[450px] h-[170px]  rounded-[123px] py-3 px-4">
      <div className="w-[100px] h-[100px] flex justify-center items-center">
        <div className="relative border-[#1DAF1154] border-2 animate-padding rounded-full">
          <FaWhatsapp
            size={60}
            className="text-[#1DAF11] w-[60px] h-[60px] animate-wave"
          />
          {/* <div className="absolute top-0 right-0 w-2 h-2 bg-[#1DAF11] rounded-full animate-pulse" /> */}
        </div>
      </div>
      <div>
        <p className="font-semibold text-[#1DAF11] text-[40px]">WhatsApp Us</p>
        <p className="text-[20px] pl-1 pt-1 text-[#51684F] flex items-center">
          We are online now{" "}
          <div className="w-2 h-2 bg-[#1DAF11] rounded-full ml-2 animate-pulse" />
        </p>
      </div>
    </div>
  );
};
