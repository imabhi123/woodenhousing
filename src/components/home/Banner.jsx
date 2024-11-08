import React from "react";
import { ChevronRight } from 'lucide-react';


const PageBanner = ({ title, subtitle, backgroundImage }) => {
  console.log(backgroundImage);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Glass House 70 - Log Cabin", href: "" }
  ];
  return (
    <div className="relative h-[70vh] w-full">
      {/* Dark overlay + background image */}
      <div
        className="absolute inset-0 h w-screen bg-black/60"
        style={{
          backgroundImage: `url(${backgroundImage?.src||null})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col  px-[15%]">
        {/* <Breadcrumb items={breadcrumbItems} /> */}
        <nav aria-label="Breadcrumb" className="py-4">
          <ol className="flex items-center gap-2">
            {breadcrumbItems.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="mx-2 h-4 w-4 text-[#FF6847]" />
                )}
                {index === breadcrumbItems.length - 1 ? (
                  <span className={"text-white font-semibold"}>{item.label}</span>
                ) : (
                  <a
                    href={item.href}
                    className={`${"text-white font-medium hover:text-white"} transition-colors`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="max-w-4xl mt-auto mb-auto pl-5 border-l-white border-l-[5px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-3xl text-[#FF6847] font-semibold ml-2">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
