"use client"; // Ensure this is a client component

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import logo from "@/assets/svgimages/logo.png";
import Image from "next/image";
const Header = () => {
  const pathname = usePathname(); // Get the current path to highlight the active tab

  return (
    <header className="bg-white border-b border-b-[#D9D9D9] p-4 font-lexend  ">
      <div className="container mx-auto flex justify-between items-center max-w-[1200px]">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="LOGO" className="h-full w-[200px]" />
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/">
            <span
              className={`${
                pathname === "/"
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
          <Link href="/services">
            <span
              className={`${
                pathname === "/services"
                  ? "text-[#1E1E21] underline underline-offset-8 decoration-[#D75438] decoration-[3px] font-medium"
                  : "text-[#1E1E21] hover:text-[#1E1E21]"
              }`}
            >
              Services
            </span>
          </Link>
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
            <span className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer">
              Contact Us
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
