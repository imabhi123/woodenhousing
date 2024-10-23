import React from "react";
import {
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  const menuSections = [
    {
      title: "Menu",
      items: ["Home", "Designs", "Services", "About Us", "Contact Us"],
    },
    {
      title: "Categories",
      items: [
        "Wooden Cottages",
        "Wooden Houses",
        "Wooden Villas",
        "Wooden Pergola",
        "Gazebo",
        "Terrace Wooden House",
      ],
    },
    {
      title: "Other page links",
      items: [
        "Why wooden house?",
        "Benefits of wooden house",
        "3D design tour",
        "Blogs",
      ],
    },
    {
      title: "Support",
      items: [
        "Terms and conditions",
        "Privacy policy",
        "Cancellation policy",
        "Referral policy",
        "F & Q",
      ],
    },
    {
      title: "Contact Us",
      items: [
        <div className="flex gap-2 items-center" key="phone">
          <Phone /> +91 1234567890
        </div>,
        <div className="flex gap-2 items-center" key="email">
          <Mail /> care@woodenhousing.com
        </div>,
      ],
    },
  ];

  return (
    <footer className="bg-[#4B325A] text-white flex items-center justify-center flex-col">
      <div className="max-w-[1000px] p-5">
        <div className="grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {menuSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-bold text-xl">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#372442] w-full flex justify-center p-2">
        <div className=" items-center flex justify-center w-full max-w-[1000px]">
          <div className="flex flex-col md:flex-row justify-between w-full items-center space-y-4 md:space-y-0">
            <div className="flex items-center gap-2">
              <svg
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.6459 0.648438L7.33953 15.9548L8.68224 17.2975H5.99682L0.291016 23.0033V43.1468H3.25037L7.9016 38.497L7.90018 38.4955L9.62044 36.7767L12.2306 34.1679L12.2292 34.1665L14.0204 32.3767L16.6306 29.7679L16.6292 29.7665L18.5624 27.8348L33.8744 43.1468H45.0007V23.0033L22.6459 0.648438ZM3.98134 24.5305L9.62044 18.8914L11.5536 20.8246L3.98134 28.3968V24.5305ZM3.98134 37.1968V33.6144L14.1624 23.4348L15.9536 25.2246L3.98134 37.1968ZM35.403 39.4565L12.2292 16.2826L13.8785 14.6333L38.7016 39.4565H35.403ZM41.3104 36.8477L16.4873 12.0246L18.2785 10.2333L41.3104 33.2652V36.8477ZM41.3104 28.0477L20.8873 7.62457L22.6459 5.86599L41.3104 24.5305V28.0477Z"
                  fill="#D75337"
                />
                <path
                  d="M12.551 43.1498H3.25L7.90123 38.5L12.551 43.1498Z"
                  fill="#D75337"
                />
                <path
                  d="M21.2101 43.1488H15.9926L12.3023 39.4584L9.62109 36.7787L12.2313 34.1699L21.2101 43.1488Z"
                  fill="#D75337"
                />
                <path
                  d="M30.0086 43.1484H24.791L21.1007 39.4581L14.0195 32.3783L16.6297 29.7695L30.0086 43.1484Z"
                  fill="#D75337"
                />
              </svg>
              <p className="text-[#FFFFFF] font-livvic font-bold">
                WOODEN <br /> HOUSING
              </p>
            </div>

            <div className="text-center text-sm font-lexend ">
              © Woodenhousing.com{" "}
              <span className="font-bold">All rights reserved</span>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
