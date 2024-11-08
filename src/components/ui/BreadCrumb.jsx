import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ items, dark }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="mx-2 h-4 w-4 text-orange-500" />
            )}
            {index === items.length - 1 ? (
              <span className={dark ? "text-white" : "text-black"}>{item.label}</span>
            ) : (
              <a
                href={item.href}
                className={`${dark ? "text-white font-semibold hover:text-white" : "text-gray-600 hover:text-black"} transition-colors`}
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
