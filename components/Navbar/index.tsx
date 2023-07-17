"use client";

import IconsContainer from "./IconsContainer";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SubNavbar from "./SubNavbar";

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 left-0 right-0 z-[5000]">
      <div className="border-b border-[#dee2e6] w-full py-[1rem]">
        <div className="flex justify-between lg:items-center flex-col gap-2  lg:flex-row max-w-[540px] md:max-w-[960px] xl:max-w-[1320px] mx-auto px-2 ">
          <div className="flex md:items-center flex-col md:flex-row flex-1 gap-4 md:gap-1 max-w-[900px]">
            <Logo />
            <SearchBar />
          </div>
          <IconsContainer />
        </div>
      </div>
      {/* <SubNavbar /> */}
    </nav>
  );
};

export default Navbar;
