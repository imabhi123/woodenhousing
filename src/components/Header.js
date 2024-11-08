"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/svgimages/logo.png";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-white border-b border-b-[#D9D9D9] py-4 font-lexend">
      <div className="w-full px-[15%] flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="LOGO" className="h-full w-[200px]" />
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/">
            <span
              className={`${
                pathname === "/" || pathname === "/inner-page"
                  ? "text-[#1E1E21] underline underline-offset-8 decoration-[#D75438] decoration-[3px] font-medium"
                  : "text-[#1E1E21] hover:text-[#1E1E21]"
              }`}
            >
              Home
            </span>
          </Link>
          <Link href="/designs">
            <span
              className={`${
                pathname === "/designs"
                  ? "text-[#1E1E21] underline underline-offset-8 decoration-[#D75438] decoration-[3px] font-medium"
                  : "text-[#1E1E21] hover:text-[#1E1E21]"
              }`}
            >
              Designs
            </span>
          </Link>

          {/* Services with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link href="/services">
              <span
                className={`${
                  pathname === "/services"
                    ? "text-[#1E1E21] underline underline-offset-8 decoration-[#D75438] decoration-[3px] font-medium"
                    : "text-[#1E1E21] hover:text-[#1E1E21]"
                } flex items-center gap-1`}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </Link>

            {/* Dropdown Menu */}
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                <Link href="/services/web-development">
                  <span className="block px-4 py-2 text-sm text-[#1E1E21] hover:bg-gray-100">
                    Wooden Cottages
                  </span>
                </Link>
                <Link href="/services/app-development">
                  <span className="block px-4 py-2 text-sm text-[#1E1E21] hover:bg-gray-100">
                    Wooden Houses
                  </span>
                </Link>
                <Link href="/services/ui-ux-design">
                  <span className="block px-4 py-2 text-sm text-[#1E1E21] hover:bg-gray-100">
                    Wooden Villa
                  </span>
                </Link>
                <Link href="/services/digital-marketing">
                  <span className="block px-4 py-2 text-sm text-[#1E1E21] hover:bg-gray-100">
                    Wooden Pergola
                  </span>
                </Link>
                <Link href="/services/digital-marketing">
                  <span className="block px-4 py-2 text-sm text-[#1E1E21] hover:bg-gray-100">
                    Wooden Gazebo
                  </span>
                </Link>
                <Link href="/services/digital-marketing">
                  <span className="block px-4 py-2 text-sm text-[#1E1E21] hover:bg-gray-100">
                    Terrace Wooden House
                  </span>
                </Link>
              </div>
            )}
          </div>

          <Link href="/about-us">
            <span
              className={`${
                pathname === "/about-us"
                  ? "text-[#1E1E21] underline underline-offset-8 decoration-[#D75438] decoration-[3px] font-medium"
                  : "text-[#1E1E21] hover:text-[#1E1E21]"
              }`}
            >
              About Us
            </span>
          </Link>
          <Link href="/blog">
            <span
              className={`${
                pathname === "/blog"
                  ? "text-[#1E1E21] underline underline-offset-8 decoration-[#D75438] decoration-[3px] font-medium"
                  : "text-[#1E1E21] hover:text-[#1E1E21]"
              }`}
            >
              Blog
            </span>
          </Link>
          <Link href="/career">
            <span
              className={`${
                pathname === "/career"
                  ? "text-[#1E1E21] underline underline-offset-8 decoration-[#D75438] decoration-[3px] font-medium"
                  : "text-[#1E1E21] hover:text-[#1E1E21]"
              }`}
            >
              Career
            </span>
          </Link>
        </nav>

        {/* Contact Us Button */}
        <div className="hidden md:block">
          <Link href="/contact-us">
            <span className="bg-[#D75438] text-white px-4 py-2 rounded hover:bg-[#D75430] transition cursor-pointer font-lexend font-medium">
              Contact Us
            </span>
          </Link>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <button id="mobile-menu-button" className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div id="mobile-menu" className="hidden md:hidden">
        <nav className="flex flex-col space-y-4 mt-4">
          <Link href="/">
            <span
              className={`${
                pathname === "/"
                  ? "text-[#1E1E21] underline underline-offset-8 decoration-[#D75438] decoration-[3px]"
                  : "text-[#1E1E21] hover:text-[#1E1E21]"
              }`}
            >
              Home
            </span>
          </Link>
          <Link href="/designs">
            <span
              className={`${
                pathname === "/designs"
                  ? "text-[#1E1E21] underline underline-offset-8 decoration-[#D75438] decoration-[3px]"
                  : "text-[#1E1E21] hover:text-[#1E1E21]"
              }`}
            >
              Designs
            </span>
          </Link>
          <Link href="/services">
            <span
              className={`${
                pathname === "/services"
                  ? "text-[#1E1E21] underline underline-offset-8 decoration-[#D75438] decoration-[3px]"
                  : "text-[#1E1E21] hover:text-[#1E1E21]"
              }`}
            >
              Services
            </span>
          </Link>
          {/* Mobile Services Dropdown Items */}
          <Link href="/services/web-development">
            <span className="block pl-4 text-sm text-[#1E1E21] hover:text-[#D75438]">
              Web Development
            </span>
          </Link>
          <Link href="/services/app-development">
            <span className="block pl-4 text-sm text-[#1E1E21] hover:text-[#D75438]">
              App Development
            </span>
          </Link>
          <Link href="/services/ui-ux-design">
            <span className="block pl-4 text-sm text-[#1E1E21] hover:text-[#D75438]">
              UI/UX Design
            </span>
          </Link>
          <Link href="/services/digital-marketing">
            <span className="block pl-4 text-sm text-[#1E1E21] hover:text-[#D75438]">
              Digital Marketing
            </span>
          </Link>
          <Link href="/about-us">
            <span
              className={`${
                pathname === "/about-us"
                  ? "text-[#1E1E21] underline underline-offset-8 decoration-[#D75438] decoration-[3px]"
                  : "text-[#1E1E21] hover:text-[#1E1E21]"
              }`}
            >
              About Us
            </span>
          </Link>
          <Link href="/blog">
            <span
              className={`${
                pathname === "/blog"
                  ? "text-[#1E1E21] underline underline-offset-8 decoration-[#D75438] decoration-[3px]"
                  : "text-[#1E1E21] hover:text-[#1E1E21]"
              }`}
            >
              Blog
            </span>
          </Link>
          <Link href="/career">
            <span
              className={`${
                pathname === "/career"
                  ? "text-[#1E1E21] underline underline-offset-8 decoration-[#D75438] decoration-[3px]"
                  : "text-[#1E1E21] hover:text-[#1E1E21]"
              }`}
            >
              Career
            </span>
          </Link>
          <Link href="/contact-us">
            <span className="bg-[#D75438] text-white px-4 py-2 rounded hover:bg-[#D75430] transition cursor-pointer">
              Contact Us
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
