import React from "react";
import { CardHeader } from "../ui/card";
import HeadingText from "../HeadingText";
import img1 from "@/assets/images/durable.png";
import img2 from "@/assets/images/ductility.png";

const Ductility = () => {
  return (
    <div className="bg-[#F6F6F6] px-[15%] pb-8">
      <CardHeader>
        <HeadingText title="Ductility" />
        <p className="text-center text-gray-600 text-sm">
          Lorem ipsum dolor sit amet. Ut voluptas placeat qui dicta iure qui
          odio laborum
        </p>
      </CardHeader>
      <div className="flex h-full items-center gap-8 flex-col md:flex-row">
        <div className="flex-1 flex flex-col gap-4">
          <div>
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
          </div>
          <div className=" h-fullw-full">
            <img className="h-full w-full" src={img2.src||null} alt="" />
          </div>
        </div>
        <div className="flex-1 h-full">
          <img className="h-full" src={img1.src||null} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ductility;
