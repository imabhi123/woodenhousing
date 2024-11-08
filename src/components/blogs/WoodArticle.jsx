import React from 'react';
import imagee from '@/assets/pages/blogs/woodarticle.png'
const WoodArticle = () => {
  return (
    <div className=" mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Wood and moisture</h1>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3 space-y-4">
          <p className="text-gray-700">
            Wood is the most traditional building material in our country. Since wood is used for a 
            variety of construction purposes - frame structures, exterior and interior wall 
            coverings, interiors, floor coverings, molds and scaffolding and more -, it is important 
            to know how wood behaves under different conditions. Because of their specific 
            properties, each type of wood has its typical uses.
          </p>
          
          <p className="text-gray-700">
            Spruce is the type of wood that is primarily used for structural timber. For carpentry,
            moldings and interior panels, pine wood is usually used but spruce can also be used.
            Hardwood, such as oak and beech, is used in floor coverings and in furniture. For
            structural timber. For carpentry, moldings and interior panels, pine wood is usually used
            but spruce can also be used. Hardwood, such as oak and beech, is used in floor
            coverings and in furniture.
          </p>
          
          <p className="text-gray-700">
            Wood is the most traditional building material in our country. Since wood is used for a variety
            of construction purposes - frame structures, exterior and interior wall coverings, interiors,
            floor coverings, molds and scaffolding and more -, it is important to know how wood behaves
            under different conditions. Because of their specific properties, each type of wood has its
            typical uses.
          </p>
          
          <p className="text-gray-700">
            Spruce is the type of wood that is primarily used for structural timber. For carpentry,
            moldings and interior panels, pine wood is usually used but spruce can also be used.
            Hardwood, such as oak and beech, is used in floor coverings and in furniture.
          </p>
        </div>
        
        <div className="lg:w-1/3">
          <img 
            src={imagee.src||null}
            alt="Traditional wooden building exterior" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WoodArticle;