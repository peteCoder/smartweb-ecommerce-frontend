"use client";

import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";

const SavedItemsWithCart = () => {
  return (
    <div className="flex-strategy min-h-[300px] w-full sm:w-1/2 px-1 py-3 lg:px-3 md:w-1/3 lg:w-1/5 ">
      <div className="rounded-[0.4rem] overflow-hidden">
        <Link
          href="/"
          className="inline-block w-full border rounded-[0.4rem] p-3"
        >
          <img
            className="sm:h-[158px] mx-auto md:w-[158px] object-contain "
            src="/images/consumer_electronics/elect5.png"
            alt=""
          />
        </Link>

        <div className="mx-auto m-0 mt-3">
          <Link
            href={"/"}
            className=" text-[rgb(86,86,86)] cursor-pointer text-[0.8rem] md:text-[1rem] font-normal hover:text-[rgb(13,110,253)] mt-3"
          >
            Electric Kettle 200 Watt
          </Link>
          <p className="mb-2 font-bold text-[1rem] md:text-[1.1rem] text-[rgb(157,161,167)] my-3">
            {" "}
            $32.00{" "}
          </p>
          <button className="flex items-center text-[0.8rem] md:text-[0.9rem] py-[0.41rem] px-[0.82rem] group space-x-[3px] lg:space-x-[5px] bg-white hover:bg-[rgb(249,250,251)] border border-[rgb(222,226,230)] hover:border-[rgb(193,201,208)] rounded-md text-[rgb(13,110,253)]">
            {" "}
            <HiShoppingCart
              className="opacity-[0.4] group-hover:opacity-[1]"
              size={23}
            />{" "}
            <span className="">Move to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedItemsWithCart;
