import BannerBlog from "@/components/blogs/BannerBlog";
import Card from "@/components/blogs/Card";
import Navigation from "@/components/Navigation";
import LetsStart from "@/components/services/LetsStart";
import React from "react";

const page = () => {
  return (
    <div>
      <BannerBlog />
      <div className="mx-[15%] my-8">
        <div className="grid gap-8 grid-cols-2">
          <Card
            title={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. "
            }
          />
          <Card
            title={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. "
            }
          />
        </div>
        <div className="grid pt-8 gap-8 grid-cols-1">
          <Card
            title={
              "Wood has excellent insulation capacity , in fact its thermal conductivity coefficient, at the same thickness, is one third of that of brick and one tenth of that of concrete. Therefore, since thermal bridges, which generate condensation and dispersion, are not created, the energy performance and living comfort of the structure improve significantly."
            }
          />
        </div>
        <div className="grid gap-8 pt-8 grid-cols-2">
          <Card
            title={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. "
            }
          />
          <Card
            title={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. "
            }
          />
        </div>
        <div className="grid pt-8 gap-8 grid-cols-1">
          <Card
            title={
              "Wood has excellent insulation capacity , in fact its thermal conductivity coefficient, at the same thickness, is one third of that of brick and one tenth of that of concrete. Therefore, since thermal bridges, which generate condensation and dispersion, are not created, the energy performance and living comfort of the structure improve significantly."
            }
          />
        </div>
        <div className="grid gap-8 pt-8 grid-cols-2">
          <Card
            title={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. "
            }
          />
          <Card
            title={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. "
            }
          />
        </div>
        <div className="grid pt-8 gap-8 grid-cols-1">
          <Card
            title={
              "Wood has excellent insulation capacity , in fact its thermal conductivity coefficient, at the same thickness, is one third of that of brick and one tenth of that of concrete. Therefore, since thermal bridges, which generate condensation and dispersion, are not created, the energy performance and living comfort of the structure improve significantly."
            }
          />
        </div>
        <div className="grid pt-8 gap-8 grid-cols-2">
          <Card
            title={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. "
            }
          />
          <Card
            title={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. "
            }
          />
        </div>
        <div className="grid pt-8 gap-8 grid-cols-1">
          <Card
            title={
              "Wood has excellent insulation capacity , in fact its thermal conductivity coefficient, at the same thickness, is one third of that of brick and one tenth of that of concrete. Therefore, since thermal bridges, which generate condensation and dispersion, are not created, the energy performance and living comfort of the structure improve significantly."
            }
          />
        </div>
      </div>
      <Navigation/>
      <LetsStart/>
    </div>
  );
};

export default page;
