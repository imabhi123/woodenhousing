import React from 'react'
import HeadingText from '../HeadingText'
import { CardHeader } from '../ui/card'
import img1 from '@/assets/images/earthquake.png'
const EarthQuake = () => {
  return (
    <div className='bg-[#F6F6F6] px-[15%] pb-8'>
        <CardHeader>
        <HeadingText title="Earthquake resistance" />
        <p className="text-center text-gray-600 text-sm">
          Lorem ipsum dolor sit amet. Ut voluptas placeat qui dicta iure qui
          odio laborum
        </p>
      </CardHeader>
      <div className='flex gap-8 flex-col md:flex-row'>
        <div className='flex-1'>
            <img src={img1.src||null} alt="" />
        </div>
        <div className='flex-1'>
            <p className='text-[20px] font-bold'>Anti-seismic and Lightweight
            </p>
            <p className='text-[18px] text-[#353535]'>The lightness of wood and its elasticity make it a material particularly suitable for resisting seismic events . Having a density five times lower than concrete means receiving five times less seismic stress.
            Elasticity, on the other hand, allows the structure not to suffer damage from oscillations. Ultimately, a wooden structure is not only able to resist earthquakes, but also comes out of them, except in special cases, substantially unharmed and without structural damage .
            Seismic tests carried out by the CNR in Japan on a 7-storey building made with x-lam wood panels</p>
        </div>
      </div>
    </div>
  )
}

export default EarthQuake