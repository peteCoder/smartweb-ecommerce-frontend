import Link from "next/link";
import React from "react";

const SmallerDropdownOptions = () => {
  return (
    <div
      className="absolute top-[100%] -mt-[0.145rem]  bg-white min-w-[10rem] z-[1000]
        border border-[rgba(0,0,0,0.15)] text-[#565656] text-left rounded-[0.4rem]
    "
    >
      <div className="flex flex-col py-[0.5rem]">
        {/* 0.25rem 1rem */}
        <Link
          href="/"
          className="py-[0.25rem] px-[1rem] font-normal text-[#212529] 
          bg-transparent w-full border-none bg-[#f8f9fa] clear-both hover:bg-[#f8f9fa]"
        >
          Main Page
        </Link>
        <Link
          href="/"
          className="py-[0.25rem] px-[1rem] font-normal text-[#212529] 
          bg-transparent w-full border-none clear-both hover:bg-[#f8f9fa]"
        >
          Listing View
        </Link>
        <Link
          href="/"
          className="py-[0.25rem] px-[1rem] font-normal text-[#212529] 
          bg-transparent w-full border-none clear-both hover:bg-[#f8f9fa]"
        >
          Grid View
        </Link>
        <Link
          href="/"
          className="py-[0.25rem] px-[1rem] font-normal text-[#212529] 
          bg-transparent w-full border-none clear-both hover:bg-[#f8f9fa]"
        >
          Detail View
        </Link>
        <Link
          href="/"
          className="py-[0.25rem] px-[1rem] font-normal text-[#212529] 
          bg-transparent w-full border-none clear-both hover:bg-[#f8f9fa]"
        >
          Cart View
        </Link>
        <Link
          href="/"
          className="py-[0.25rem] px-[1rem] font-normal text-[#212529] 
          bg-transparent w-full border-none clear-both hover:bg-[#f8f9fa]"
        >
          Order View
        </Link>
      </div>
    </div>
  );
};

export default SmallerDropdownOptions;
