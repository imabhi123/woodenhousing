import React from 'react'
import imagee from '@/assets/pages/blogs/blogss.jpeg'
const Card = ({title}) => {
  return (
    <div className='rounded-xl shadow-lg overflow-hidden'>
        <img className='w-full' src={imagee.src||null} alt="" />
        <div className='p-4 px-6'>
            <p className='text-[28px]'>Wooden house manufacturers in India</p>
            <p className='text-[18px] text-[#232323]'>{title}
            </p>
        </div>
    </div>
  )
}

export default Card