import React from 'react';
import { ChevronRight } from 'lucide-react';

const TableOfContents = () => {
  const contents = [
    'Wooden house manufacturers in India',
    'Wood and moisture',
    'Wood protection',
    'Quality and assortment'
  ];

  return (
    <div className=" p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Table of contents</h2>
      <div className="space-y-2">
        {contents.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center justify-between p-2 text-left text-red-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            <span>{item}</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TableOfContents;