import React from 'react'
import { CardHeader } from '../ui/card'
import HeadingText from '../HeadingText'
import img1 from "@/assets/images/environment.png";

const Environmental = () => {
  return (
    <div className=" px-[15%] pb-8">
      <CardHeader>
        <HeadingText title="Environmental Impact" />
        <p className="text-center text-gray-600 text-sm">
          Lorem ipsum dolor sit amet. Ut voluptas placeat qui dicta iure qui
          odio laborum
        </p>
      </CardHeader>
      <div className="flex h-full items-center gap-8 flex-col md:flex-row">
        <div className="flex-1 h-full">
          <img className="h-full" src={img1.src||null} alt="" />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <p className="text-[20px] font-bold">
            Wood is the only building material that comes from renewable resources
            </p>
            <p className="text-[18px] text-[#353535]">
            Its low weight and great resistance make it an exceptional material for construction . In fact, the admissible external stress load, compared to factory-produced concrete, is slightly higher in compression and decidedly higher in traction and bending.
            During growth, trees transform CO 2 and water, producing oxygen. Using wood as a building material means storing, in the elements produced, all the CO 2 used by trees.  Each cubic meter of wood, used as a replacement for other building materials, reduces CO 2 emissions  released into the atmosphere by an average of 1.1 tons ...Read more
            </p>
          </div>
          {/* <div>
            <p className="text-[20px] font-bold">
              Anti-seismic and Lightweight
            </p>
            <p className="text-[18px] text-[#353535]">
              The lightness of wood and its elasticity make it a material
              particularly suitable for resisting seismic events . Having a
              density five times lower than concrete means receiving five times
              less seismic stress. Elasticity, on the other hand, allows the
              structure not to suffer damage from oscillations. Ultimately, a
              wooden structure is not only able to resist earthquakes, but also
              comes out of them, except in special cases,
              substantially unharmed and without structural damage . Seismic
              tests carried out by the CNR in Japan on a 7-storey building made
              with x-lam wood panels
            </p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Environmental