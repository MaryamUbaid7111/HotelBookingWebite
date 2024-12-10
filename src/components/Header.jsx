import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mx-auto">
      {/* Top Navigation - Hidden on small screens */}
      <div className="hidden lg:flex text-center bg-white top-0 py-2 px-12 w-full flex-row justify-between">
        <div className="flex flex-row">
          <div className="flex flex-row px-2">
            <img src="./redenvalop.png" alt="email logo" className="w-12 h-10 p-2" />
            <span className="text-gray-600 p-2 font-normal text-sm">
              info@company.com
            </span>
          </div>
          <hr className="h-10 border-gray-200 border-r-2 mx-4"></hr>
          <div className="flex flex-row">
            <img src="./mapf.png" alt="location logo" className="w-12 h-10 p-2" />
            <span className="text-gray-600 p-2 font-normal text-sm">
              Sunny Isles Beach, FL 33160
            </span>
          </div>
        </div>
        <nav className="flex flex-row gap-3 items-center">
          <img src="./fff.png" alt="facebook logo" className="w-7 h-7 rounded-full" />
          <img src="./instagray.png" alt="instagram logo" className="w-7 h-7 rounded-full" />
          <img src="./twitter.ong.jpeg" alt="twitter logo" className="w-7 h-7 rounded-full" />
          <img src="./linked.png" alt="linkedin logo" className="w-7 h-7 rounded-full" />
        </nav>
      </div>

      {/* Divider */}
      <hr className="w-full border-gray-200"></hr>

      {/* Main Navigation */}
      <nav className="bg-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* VILLA Text */}
          <div className="text-3xl font-bold text-black">
            {!isOpen && <h1>VILLA</h1>}
          </div>

          {/* Right Section: Menu Items and Schedule Button */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:space-x-12 w-full lg:w-auto`} >
            <ul className="flex flex-col lg:flex-row lg:space-x-12 mt-4 lg:mt-0 items-center">
              <li>
                <Link href="/" className="block text-red-600 py-2">
                  Home
                </Link>
              </li>
              <li>
                <a href="/Properties" className="block text-gray-700 hover:text-red-700 py-2">
                  Properties
                </a>
              </li>
              <li>
                <a href="/PropertyDetails" className="block text-gray-700 hover:text-red-700 py-2">
                  Property Details
                </a>
              </li>
              <li>
                <a href="/ContactUs" className="block text-gray-700 hover:text-red-700 py-2">
                  Contact
                </a>
              </li>
            </ul>
            {/* Schedule Button */}
            {!isOpen && (
            <div className="hidden lg:flex items-center ml-2">
            {/* <div className="relative flex items-center">
              <h3 className="flex items-center text-white bg-black px-10 ml-2 py-2 rounded-full  z-10">
                Schedule a visit
                <img
                  src="../giftbox.png"
                  alt="schedule icon"
                  className="absolute left-0 -translate-x-1/2 h-9 w-9 p-1 rounded-full bg-orange-600"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                />
              </h3>
            </div> */}
             <div className="flex bg-black flex-row w-[180px] rounded-full">
           <img src="../box.png" alt="logo" height={40} width={40} className="rounded-full bg-red-800 ring-black-500" />
           <h3 className="text-white flex flex-1 font-serif  px-2 py-2">Schedule a visit</h3>
           </div>
          </div>
          
            )}
          </div>

          {/* Hamburger / Cross Icon */}
          <button
            className="block text-gray-700 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
