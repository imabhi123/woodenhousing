'use client'

import PageBanner from "@/components/home/Banner";
import WhatsAppContact from "@/components/home/Consultation";
import FloorPlan from "@/components/home/FloorPlan";
import HouseViewer from "@/components/home/HouseViewer";
import PropertyDetails from "@/components/home/PropertyDetails";
import WorkflowSteps from "@/components/home/WorkFlowSteps";
import Breadcrumb from "@/components/ui/BreadCrumb";
import bannerImg from '@/assets/images/banner_image1.png'
import img1 from '@/assets/images/Frame 318.png'
import view from '@/assets/images/view.png'
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { useEffect, useState } from "react";

function App() {
  const [data,setData]=useState([]);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Wooden Cottages Series", href: "/cottages" },
    { label: "1BHK", href: "#" },
  ];
  const logAllData = async () => {
    try {
      console.log("abhishek");
      // Replace 'your-collection-name' with the name of your Firestore collection
      const querySnapshot = await getDocs(
        collection(db, "services")
      );

      // Loop through each document and log the data
      querySnapshot.forEach((doc) => {
        setData([...data,doc.data()]);
        // console.log( doc.data());
      });
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };
  useEffect(() => {
    logAllData();
  }, []);
  return (
    <div className="font-lexend overflow-x-hidden bg-white">
      <PageBanner
        title="Glass House 70 - Log Cabin"
        subtitle="Wooden Cottage"
        backgroundImage={bannerImg}
      />
      <div className="font-lexend mx-[15%]">
        <Breadcrumb dark={false} items={breadcrumbItems} />
        <img width={500} src={img1.src||null} alt="img" className="font-lexend mt-12  w-full"/>
        <PropertyDetails item={data[0]}/>
        <FloorPlan item={data[0]}/>
      </div>
      <HouseViewer item={data[0]}/>
      <div className="font-lexend mx-[15%]">
        <div style={{background:`url(${view.src||null})`}} className="font-lexend h-[800px] flex justify-center items-center w-full my-20">
          <p className="font-lexend text-white font-bold text-[24px]">“This is a video (please check in prototype preview)”</p>
        </div>
        <WorkflowSteps/>
        <WhatsAppContact/>
      </div>
    </div>
  );
}

export default App;
