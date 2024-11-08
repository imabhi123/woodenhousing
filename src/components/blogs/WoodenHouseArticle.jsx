import React from 'react';
import imagee from '@/assets/pages/blogs/blogss.jpeg'
const WoodenHouseArticle = () => {
  return (
    <div className="my-8 mx-auto p-6 bg-white shadow-md rounded-md">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-2">Wooden house manufacturers in India</h1>
      <p className="text-gray-500 mb-6">Published: August 15, 2024</p>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed mb-4">
        Wood is the most traditional building material in our country. Since wood is used for a variety of construction
        purposes - frame structures, exterior and interior wall coverings, interiors, floor coverings, molds and
        scaffolding and more -, it is important to know how wood behaves under different conditions. Because of their
        specific properties, each type of wood has its typical uses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Spruce is the type of wood that is primarily used for structural timber. For carpentry, moldings and interior
        panels, pine wood is usually used but spruce can also be used. Hardwood, such as oak and beech, is used in
        floor coverings and in furniture.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The material properties of the wood vary between different types of wood. Even within the same type of wood, the
        variations are large depending on the plant site, but also between different trees at one and the same plant
        site. However, even greater variation is found within one and the same tree, for example between different
        heights in the tree and between the marrow and the bark-near wood as well as between spring wood and summer wood
        in the individual annual ring. In addition, twigs and other fiber disorders, so-called features, affect the
        technical properties of the wood.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        Normal variations for the properties density, strength and stiffness within the same type of wood in
        undisturbed fiber structure:
      </p>

      {/* Image */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={imagee.src||null} // Replace with actual image URL
          alt="Wooden house"
          className="w-full h-[60vh] object-cover"
        />
      </div>

      {/* Footer Content */}
      <p className="text-gray-700 leading-relaxed mt-4">
        Wood is the most traditional building material in our country. Since wood is used for a variety of construction
        purposes - frame structures, exterior and interior wall coverings, interiors, floor coverings, molds and
        scaffolding and more -, it is important to know how wood behaves under different conditions. Because of their
        specific properties, each type of wood has its typical uses.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Spruce is the type of wood that is primarily used for structural timber. For carpentry, moldings and interior
        panels, pine wood is usually used but spruce can also be used. Hardwood, such as oak and beech, is used in
        floor coverings and in furniture.
      </p>
    </div>
  );
};

export default WoodenHouseArticle;
