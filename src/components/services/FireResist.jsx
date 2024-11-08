import React from "react";
import img1 from "@/assets/images/fire_resist.png";
import HeadingText from "../HeadingText";
import { CardHeader } from "../ui/card";
import fire from "@/assets/images/fire1.png";
const FireResist = () => {
  return (
    <div className=" px-[15%] pb-8">
      <CardHeader>
        <HeadingText title="Earthquake resistance" />
        <p className="text-center text-gray-600 text-sm">
          Lorem ipsum dolor sit amet. Ut voluptas placeat qui dicta iure qui
          odio laborum
        </p>
      </CardHeader>
      <div className="flex gap-8 flex-col items-center md:flex-row">
        <div className="flex-1">
          <p className="text-[20px] font-bold">Fire resistant</p>
          <p className="text-[18px] text-[#353535] font-thin">
            Given that load-bearing structures never cause fires. It is known
            that wood is a combustible material, but this does not mean that it
            does not have fire resistance or that wooden structures are more
            vulnerable than steel or concrete structures.In fact, wood burns
            very slowly , as carbonization, which occurs at about 0.7 mm per
            minute, slows down the spread of combustion. The structure is
            therefore able to resist fires decisively and for a long time,
            regardless of the temperature reached . Mechanical failure occurs
            only when the part of the section that is not yet carbonized is
            reduced to such a point that it is no longer able to fulfill its
            structural function. Furthermore, the low coefficient of thermal
            expansion significantly limits the thrust exerted on the perimeter
            walls and therefore the risk of collapse.
          </p>
        </div>
        <div className="flex-1">
          <img src={img1.src||null} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
        {[0, 0, 0].map((e,i) => (
          <div key={i} className="flex flex-col items-center gap-5">
            <img src={fire.src||null} alt="" />
            <p className="text-gray-600 max-w-[250px] text-center">
              Wooden floor that did not collapse following a fire
            </p>
          </div>
        ))}
      </div>
      <p className="text-[24px] pt-6 pb-3 font-semibold">Why Wood is more preferable than steel?</p>
      <div className="flex gap-8 pb-6 ">
        <div className="flex-1">
          <img className="w-full" src={fire.src||null} alt="" />
        </div>
        <div className="flex-[1.5]">
          <ul className="flex flex-col gap-4 list-disc ">
            <li>
              Steel structural elements do not burn, but undergo a rapid
              decay of mechanical characteristics (resistance and rigidity) as a
              function of temperature; since steel is a good heat conductor, the
              temperature rises rapidly throughout the section; above 500°C the
              steel deforms , leading, in an estimated time of between 5 and 10
              minutes, to a collapse of the structure.
            </li>
            <li>
              In reinforced concrete structural elements , the steel is
              protected by a concrete cover of variable thickness and, what is
              worse, it is sometimes made up in some areas of poorly compacted
              and poorly homogeneous concrete.In the event of a fire, these weak
              points become preferential channels for heat flow, causing a
              localised increase in temperature that can exceed 500°C in a very
              short time even in the presence of a relatively thick concrete
              cover.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FireResist;
