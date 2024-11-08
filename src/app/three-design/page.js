import Navigation from '@/components/Navigation'
import PropertyCard from '@/components/services/PropertyCard'
import Banner from '@/components/threedesign/Banner'
import React from 'react'

const page = () => {
  return (
    <div>
        <Banner/>
        <div className='mx-[5%] md:mx-[15%] py-8'>
        <div className="text-sm text-gray-600 mb-1">
              <span className="text-[28px] font-semibold text-black">
                Top Results
              </span>{" "}
              (55 Designs)
            </div>
            <div className='grid grid-cols-2 gap-6'>
            {[0,0,0,0,0,0,0,0].map((e,i)=><PropertyCard key={i}/>)}
            </div>
            <Navigation/>
        </div>
    </div>
  )
}

export default page