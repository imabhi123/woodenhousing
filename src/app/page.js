"use client";

import CallToAction from "@/components/homeSections/CallToAction";
import HomeTopSection from "@/components/homeSections/HomeTopSection";
import ServicesSection from "@/components/homeSections/ServiceSection";
import TechnologySection from "@/components/homeSections/TechnologySection";
import UniqueSection from "@/components/homeSections/UniqueSection";
import WhyChoose from "@/components/homeSections/WhyChoose";
import WoodenVillasShowcase from "@/components/homeSections/WoodenVillas";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useEffect } from "react";

export default function Home() {
  const logAllData = async () => {
    try {
      console.log("abhishek");
      // Replace 'your-collection-name' with the name of your Firestore collection
      const querySnapshot = await getDocs(
        collection(db, "services")
      );

      // Loop through each document and log the data
      querySnapshot.forEach((doc) => {
        console.log( doc.data());
      });
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };
  useEffect(() => {
    logAllData();
  }, []);
  return (
    <div className="min-h-screen overflow-x-hidden font-[family-name:var(--font-lexend-deca)] bg-white">
      <HomeTopSection />
      <WhyChoose />
      <TechnologySection />
      <UniqueSection />
      <ServicesSection />
      <WoodenVillasShowcase />
      <CallToAction />
    </div>
  );
}
