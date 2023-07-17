import React from "react";
import Link from "next/link";

const DropdownOptions = () => {
  return (
    <div
      className="absolute p-[1.5rem] bg-white  -mt-[0.145rem] rounded-[0.4rem] z-[1000]
                  min-w-[10rem] m-0 text-[1rem] text-[#565656] text-left bg-clip-padding border-[rgba(0,0,0,0.15)] border 
                  top-[100%] left-0"
    >
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5  z-[100]">
        <ul className="w-[12rem] flex flex-col gap-4">
          <div className="w-full space-y-[0.3rem]">
            <h2 className="font-extrabold text-black">Marketplace</h2>
            <li>Ads website</li>
            <li>Ads website</li>
            <li>Ads website</li>
            <li>Ads website</li>
          </div>

          <div className="space-y-[0.3rem]">
            <h2 className="font-extrabold text-black">Marketplace</h2>
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
  );
};

export default DropdownOptions;
