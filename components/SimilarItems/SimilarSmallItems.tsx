import Link from "next/link";
import React from "react";

const SimilarSmallItems = () => {
  return (
    <Link
      href={"/"}
      className="flex flex-row gap-5 justify-between lg:justify-normal flex-wrap "
    >
      <div className="w-[96px] shrink-0 flex items-center justify-center p-[0.25rem] mb-[1rem] border border-[#dee2e6] hover:border-[#eceef1] hover:shadow-md rounded-[0.4rem]">
        <img
          className="w-full max-w-full cursor-pointer object-contain lg:object-cover rounded-[0.4rem] overflow-hidden"
          alt=""
          src="/images/consumer_electronics/elect4.png"
        />
      </div>
      <div className="space-y-3">
        <div className="text-[1rem] flex flex-col">
          <span>Wired Gaming</span>
          <span>Headset Headphone</span>
        </div>
        <p className="font-[600] text-black text-[1.1rem]">$45.50</p>
      </div>
    </Link>
  );
};

export default SimilarSmallItems;
