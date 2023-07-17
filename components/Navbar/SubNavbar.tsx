import React, { useState } from "react";

import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const SubNavbar = () => {
  return (
    <div className="border-b border-[#dee2e6]">
      <div className="max-w-[540px] md:max-w-[960px] xl:max-w-[1320px] mx-auto px-2">
        {/* Desktop Menu */}
        <DesktopMenu />
        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </div>
  );
};

export default SubNavbar;
