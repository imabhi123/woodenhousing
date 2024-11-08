import React from 'react'
import design_bg from '@/assets/pages/design/design_bg.jpeg'
const Banner = () => {
  return (
    <div className='h-[300px] w-screen flex justify-center items-center bg-[#FFE8E3]'>
        <div className='flex flex-col items-center mb-[35px]'>
            <p className='text-[32px] font-bold'>Terms & Conditions</p>
            <p className='text-[16px] text-[#322A29A3]'>Guidelines for a Clear and Trusted Partnership</p>
        </div>
    </div>
  )
}

export default Banner