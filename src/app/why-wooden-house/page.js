'use client'
import React from 'react'
import bgImg from '@/assets/images/banner_image1.png'
import BenefitsSection from '@/components/services/BenefitSection'
import ThermalConductivityChart from '@/components/services/ThermalConductivityChart'
import EconomicSavings from '@/components/services/EconomicSavings'
import EarthQuake from '@/components/services/EarthQuake'
import FireResist from '@/components/services/FireResist'
import Durability from '@/components/services/Durability'
import Solidity from '@/components/services/Solidity'
import Ductility from '@/components/services/Ductility'
import Environmental from '@/components/services/Environmental'
import LetsStart from '@/components/services/LetsStart'
const page = () => {
  return (
    <div className=''>
        <div className="relative bg-cover bg-center h-56 " style={{ backgroundImage: `url('${bgImg.src||null}')` }}>
        <div className="relative w-full h-full flex flex-col justify-center items-center text-white text-center p-6">
          <h1 className="text-[36px] font-bold">
            <span className="text-yellow-500">Why Wooden </span> House?
          </h1>
          <p className="text-[18px]">Wood is a high-performance building material</p>
        </div>
      </div>
      <div className=''>
        <BenefitsSection/>
        <ThermalConductivityChart/>
        <EconomicSavings/>
        <EarthQuake/>
        <FireResist/>
        <Durability/>
        <Solidity/>
        <Ductility/>
        <Environmental/>
        <LetsStart/>
      </div>
    </div>
  )
}

export default page