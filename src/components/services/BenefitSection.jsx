import React from 'react';
import { Info } from 'lucide-react';
import img1 from '@/assets/images/main_why.png'
import img2 from '@/assets/images/second_why.png'
import img3 from '@/assets/images/third_why.png'

const BenefitsSection = () => {
  const benefits = [
    { title: 'Comfort and energy savings', icon: <Info className="w-4 h-4 text-gray-500" /> },
    { title: 'Economic savings', icon: <Info className="w-4 h-4 text-gray-500" /> },
    { title: 'Anti-Seismicity', icon: <Info className="w-4 h-4 text-gray-500" /> },
    { title: 'Fire Resistance', icon: <Info className="w-4 h-4 text-gray-500" /> },
    { title: 'Durability', icon: <Info className="w-4 h-4 text-gray-500" /> },
    { title: 'Solidity', icon: <Info className="w-4 h-4 text-gray-500" /> },
    { title: 'Ductility', icon: <Info className="w-4 h-4 text-gray-500" /> },
    { title: 'Environmental Impact', icon: <Info className="w-4 h-4 text-gray-500" /> },
  ];

  return (
    <div className="flex mx-[15%] flex-col lg:flex-row gap-8 py-6 max-w-6xl ">
      {/* Left Section */}
      <div className="lg:w-1/3">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">There are many Benefits</h2>
          <p className="text-gray-600 mb-4">
            Modern construction techniques provide numerous advantages for homeowners.
          </p>
        </div>
        
        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">{benefit.title}</span>
              {benefit.icon}
            </div>
          ))}
        </div>

        <button className="mt-6 inline-flex items-center text-purple-600 hover:text-purple-700">
          Learn more about benefits
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-2/3 grid grid-cols-2 gap-4">
      <div>
          <img 
            src={img2.src||null} 
            alt="Building entrance" 
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div>
          <img 
            src={img3.src||null}
            alt="Porch detail" 
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div className="col-span-2">
          <img 
            src={img1.src||null}
            alt="Modern house exterior" 
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        
      </div>
    </div>
  );
};

export default BenefitsSection;