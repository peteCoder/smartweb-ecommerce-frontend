import Link from "next/link";
import React from "react";
import { FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

const ListSingleProductComponent = () => {
  return (
    <div className="border bg-white shadow-sm overflow-hidden w-full min-h-[200px] rounded-lg flex flex-col md:flex-row">
      {/*  */}
      <Link className="w-full md:w-1/4 flex-strategy p-2" href="/products/3">
        <img
          className="h-[200px] sm:h-[220px] mx-auto md:w-[220px] rounded-md object-contain"
          src="/images/home_outdoor/interior1.png"
          alt=""
        />
      </Link>

      <div className="w-full md:w-3/4 flex-strategy py-4 px-4 space-y-4 sm:space-y-2">
        <div className="flex gap-3 flex-wrap sm:flex-nowrap my-2 justify-between items-center">
          <Link
            className="text-[rgb(86,86,86)] inline-block cursor-pointer text-[1rem] font-normal  hover:text-[#0d6efd]"
            href="/products/3"
          >
            Armchair for Home and Office, Yellow color
          </Link>

          <div className="">
            <button className="flex items-center gap-2 text-[15px] rounded-[5px] border-[#dee2e6] bg-white   border py-[0.46rem] px-[0.8rem] hover:border-[#c1c9d0] hover:text-[#0d6efd] text-[#6c757d]">
              <FaHeart className="text-[20px]" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* New Price */}
          <span className="text-black font-[600] text-xl md:text-2xl">
            $990.99
          </span>
          {/* Old Price */}
          <span className="text-sm text-[#9da1a7]">
            <s>$1299</s>
          </span>
        </div>
        {/*  Ratings */}
        <div className="text-[14px] md:text-[16px]">
          <div className="flex items-center flex-wrap gap-2">
            <div className="text-[#ff8100] flex items-center gap-1 text-[15px] font-bold">
              <div id="star" className="flex items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <span className="font-[600]">4.5</span>
            </div>
            <div className="flex items-center gap-2 text-[#9DA1A7]">
              <span>•</span>
              <div className="flex items-center gap-2">
                <span className="text-[15px] font-bold">154 orders</span>
              </div>
              <span>•</span>
            </div>
            <span className="text-green-600 text-[15px] font-bold">
              Free shipping
            </span>
          </div>
        </div>

        <div className="text-[#9da1a7]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </div>
        <div className="">
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

export default ListSingleProductComponent;
