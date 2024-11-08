import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import workflow from "../../assets/images/workflow.png";
import Image from "next/image";
import threeimg from '@/assets/images/03.png'

const WorkflowSteps = () => {
  const steps = [
    { id: 1, title: "Raise a request", active: false },
    { id: 2, title: "Meet Our Expert", active: false },
    { id: 3, title: "Explore Design Options", active: false },
    { id: 4, title: "Book with Us", active: false },
    { id: 5, title: "Receive 3D Design", active: false },
    { id: 6, title: "Finalize Materials & Specifications", active: false },
    { id: 7, title: "Monitor Construction Progress", active: false },
    { id: 8, title: "Handover to Client", active: false },
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="max-w-6xl relative z-10 p-8">
      <h2 className="text-2xl font-semibold text-center mb-12">
        How it works?
      </h2>

      {/* Steps Timeline */}
      <div className="relative mb-20">
        <div className="flex justify-center">
        <div className="absolute top-5 left-0 ml-[3.5%] right-0 h-0.5 w-[93%] bg-[#D75337]"></div>
        </div>
        <div className="flex justify-between relative">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center relative">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 
                ${
                  index <= activeStep
                    ? "bg-[#D75337] text-white"
                    : "bg-white border-2 border-[#D75337] text-[#D75337]"
                }`}
              >
                {step.id}
              </div>
              <div className={`text-xs text-center mt-2 w-24 ${index <= activeStep ? 'text-[#D75337]' : 'text-[#8C8C8C]'}`}>{step.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <Image height={500} width={500} src={workflow} alt="" />
          <div className="flex items-center">
          <p className="relative left-10 text-[160px] z-0 top-10 font-lexend text-[#F2F2F2]"><img src={threeimg.src} alt="" /></p>
          <div className="text-start relative z-10 mt-12">
            <h3 className="font-semibold text-[20px] mb-2">3. Explore Design Options</h3>
            <p className="text-gray-600 text-[15px] max-w-[450px]">
              We&apos;ll present you with various design options and reference images
              to help you choose the style and layout that best suits your
              needs.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowSteps;