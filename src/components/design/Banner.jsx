import React from 'react'
import design_bg from '@/assets/pages/design/design_bg.jpeg'
const Banner = () => {
  return (
    <div className='h-[300px] w-screen flex justify-center items-end' style={{backgroundImage:`url('${design_bg.src||null}')`,backgroundPosition:'center'}}>
        <div className='flex flex-col items-center mb-[35px]'>
            <p className='text-[32px] font-bold'>Designs</p>
            <p className='text-[16px]'>Designing Spaces that Inspire and Endure</p>
        </div>
    </div>
  )
}

export default Banner