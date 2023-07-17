import React, { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";

import { AiFillCaretDown } from "react-icons/ai";

import DropdownOptions from "./Dropdowns/LargerDropdownOptions";
import SmallerDropdownOptions from "./Dropdowns/SmallerDropdownOptions";

const DesktopMenu = () => {
  const [toggleFirstDropDown, setToggleFirstDropDown] = useState(false);
  const [toggleSecondDropDown, setToggleSecondDropDown] = useState(false);

  return (
    <div>
      {/* Desktop Navbar Starts */}
      <div className="hidden lg:block relative">
        <div className="flex items-center justify-between py-[0.5rem]">
          <ul className="flex flex-row gap-4">
            <li className="flex justify-center items-center">
              <button
                type="button"
                onClick={() => setToggleFirstDropDown((prev) => !prev)}
                onBlur={() => setToggleFirstDropDown(false)}
                className="flex justify-center items-center py-[0.5rem] px-[0.9rem] cursor-pointer text-[0.91rem] hover:text-[rgba(33,37,41,0.7)]"
              >
                All templates
                <AiFillCaretDown className="text-[0.6rem] ml-1" />
                {/* First Dropdown Menu  */}
                {toggleFirstDropDown && <DropdownOptions />}
              </button>{" "}
            </li>

            <li className="flex justify-center items-center">
              <button
                type="button"
                onClick={() => setToggleSecondDropDown((prev) => !prev)}
                onBlur={() => setToggleSecondDropDown(false)}
                className="flex  justify-center items-center py-[0.5rem] px-[0.9rem] cursor-pointer text-[0.91rem] hover:text-[rgba(33,37,41,0.7)]"
              >
                Pages
                <AiFillCaretDown className="text-[0.6rem] ml-1" />
              </button>{" "}
              {/* Second Dropdown Menu */}
              {toggleSecondDropDown && <SmallerDropdownOptions />}
            </li>

            <li className="flex justify-center items-center">
              <a
                className="flex justify-center items-center py-[0.5rem] px-[0.9rem] text-[0.91rem] hover:text-[rgba(33,37,41,0.7)]"
                href=""
              >
                About
              </a>{" "}
            </li>
            <li className="flex justify-center items-center">
              <a
                className="flex justify-center items-center py-[0.5rem] px-[0.9rem] text-[0.91rem] hover:text-[rgba(33,37,41,0.7)]"
                href=""
              >
                Services
              </a>{" "}
            </li>
            <li className="flex justify-center items-center">
              <a
                className="flex justify-center items-center py-[0.5rem] px-[0.9rem] text-[0.91rem] hover:text-[rgba(33,37,41,0.7)]"
                href=""
              >
                Projects
              </a>{" "}
            </li>
            <li className="flex justify-center items-center">
              <a
                className="flex justify-center items-center py-[0.5rem] px-[0.9rem] text-[0.91rem] hover:text-[rgba(33,37,41,0.7)]"
                href=""
              >
                Fitness sport
              </a>{" "}
            </li>
          </ul>
          <ul className="flex flex-row gap-4">
            <li className="flex justify-center items-center">
              <select className="py-[0.5rem] px-[0rem] bg-transparent text-[0.91rem] border-none outline-none min-h-full hidden md:block text-[#1f2937]">
                <option value="USD">USD</option>
                <option value="NGN">NGN</option>
              </select>{" "}
            </li>
            <li className="flex justify-center items-center">
              {" "}
              <select className="py-[0.5rem] px-[0rem] bg-transparent text-[0.91rem] border-none outline-none min-h-full hidden md:block text-[#1f2937]">
                <option value="English">English</option>
                <option value="French">French</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      {/* Desktop Navbar Ends */}
    </div>
  );
};

export default DesktopMenu;
