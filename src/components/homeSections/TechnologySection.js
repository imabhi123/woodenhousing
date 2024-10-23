import React from "react";
import HeadingText from "../HeadingText";
import img2 from "@/assets/svgimages/technologyBg.png";
import technology1 from "@/assets/svgimages/technology1.png";
import technology2 from "@/assets/svgimages/technology2.png";
import technology3 from "@/assets/svgimages/technology3.png";
import technology4 from "@/assets/svgimages/technology4.png";
import TechnologyCard from "../TechnologyCard";

const TechnologySection = () => {
  return (
    <div
      className="w-full h-auto bg-cover bg-no-repeat relative flex flex-col p-8"
      style={{
        backgroundImage: `url(${img2.src})`,
      }}
    >
      <HeadingText
        topText="Technologies We Use"
        text="We use high quality wood & follow the best possible process to build a strong home"
        title="What’s our approach?"
        white
      />
      <div className="flex  justify-center flex-col sm:flex-row">
        <TechnologyCard
          Icon={technology1}
          description={
            "Kiln-drying removes up to 90% of moisture, preventing decay and killing pests, thus extending wooden life."
          }
          title={"Kiln Dried Wood"}
        />
        <TechnologyCard
          Icon={technology2}
          description={
            "The tongue and groove joint is a strong, edge-to-edge wood connection used in flooring and paneling-to-edge wood connection used in flooring and paneli"
          }
          title={"Tongue & Groove"}
        />
        <TechnologyCard
          Icon={technology3}
          description={
            "Post and Beam homes are pricier because they require skilled labor and high-quality timber and tongue-and-groove materials."
          }
          title={"Post and Beam Construction"}
        />
        <TechnologyCard
          Icon={technology4}
          description={
            "Wood cladding is a material applied to the outside of a building to protect the exterior from damage of a building to protect the exterior from damage..."
          }
          title={"Wood Cladding"}
        />
      </div>
    </div>
  );
};

export default TechnologySection;
