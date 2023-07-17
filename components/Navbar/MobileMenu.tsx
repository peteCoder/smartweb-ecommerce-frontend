"use client";

import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import DropdownOptions from "./Dropdowns/LargerDropdownOptions";
import Link from "next/link";

const MobileMenu = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);
  const [toggleFirstDropDown, setToggleFirstDropDown] = useState(false);
  const [toggleSecondDropDown, setToggleSecondDropDown] = useState(false);

  return (
    <div>
      {/* Mobile Navbar Toggler Starts*/}
      <div className="lg:hidden" id="mobile">
        <div className="w-full py-2">
          <div className="w-full flex items-center">
            <button
              className="text-[1.1rem] py-[0.35rem] px-[0.5rem] bg-transparent border 
                border-rgba(0, 0, 0, 0.1) rounded-[0.4rem] text-[#212529] 
                focus:border-transparent focus:outline-3 focus:outline-[#212529] 
                ease-out focus:outline duration-500 transition-all"
              onClick={() => setToggleMobileNav((prev) => !prev)}
            >
              <RxHamburgerMenu size={27} color="#212529" />
            </button>
          </div>
        </div>
        <div
          className={`overflow-y-hidden transition-all duration-500 ${
            toggleMobileNav ? "h-fit" : "h-0"
          }`}
        >
          <ul className="flex flex-col ">
            <li className="flex flex-col items-start">
              <button
                type="button"
                onClick={() => setToggleFirstDropDown((prev) => !prev)}
                // onBlur={() => setToggleFirstDropDown(false)}
                className="flex justify-center items-center cursor-pointer text-[1rem] hover:text-[rgba(33,37,41,0.7)]"
              >
                All templates
                <AiFillCaretDown className="text-[0.6rem] ml-1" />
                {/* First Dropdown Menu  */}
              </button>{" "}
              {toggleFirstDropDown && (
                <div
                  className="p-[1.5rem] bg-white  -mt-[0.145rem] rounded-[0.4rem] z-[1000] w-full
                  min-w-[10rem] m-0 text-[1rem] text-[#565656] text-left bg-clip-padding border-[rgba(0,0,0,0.15)] border"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5  z-[100]">
                    <ul className="w-[12rem] flex flex-col gap-4">
                      <div className="w-full space-y-[0.3rem]">
                        <h2 className="font-extrabold text-black">
                          Marketplace
                        </h2>
                        <li>Ads website</li>
                        <li>Ads website</li>
                        <li>Ads website</li>
                        <li>Ads website</li>
                      </div>

                      <div className="space-y-[0.3rem]">
                        <h2 className="font-extrabold text-black">
                          Marketplace
                        </h2>
                        <li>Ads website</li>
                        <li>Ads website</li>
                        <li>Ads website</li>
                        <li>Ads website</li>
                      </div>
                    </ul>

                    <ul className="w-[12rem] space-y-[0.3rem]">
                      <h2 className="font-extrabold text-black">Ads website</h2>
                      <li>Ads website</li>
                      <li>Ads website</li>
                      <li>Ads website</li>
                      <li>Ads website</li>
                      <li>Ads website</li>
                      <li>Ads website</li>
                      <li>Ads website</li>
                      <li>Ads website</li>
                    </ul>

                    <ul className="w-[12rem] space-y-[0.3rem]">
                      <h2 className="font-extrabold text-black">Food order</h2>
                      <li>Ads website</li>
                      <li>Ads website</li>
                      <li>Ads website</li>
                      <li>Ads website</li>
                    </ul>
                  </div>

                  <div className="w-full bg-[#ffe8d1] p-[2rem] rounded-[0.4rem] my-3 text-center">
                    <Link
                      href="/"
                      className="inline-block text-center rounded-[.4rem] bg-[#ff8100] border-[#ff8100] border py-[0.43rem] px-[0.84rem] text-white"
                    >
                      Download all template
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      </div>
      {/* Mobile Navbar Toggler Ends*/}
    </div>
  );
};

export default MobileMenu;
