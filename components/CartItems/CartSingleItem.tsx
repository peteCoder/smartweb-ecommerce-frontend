import React from "react";
import AddAndMinusFromCart from "../AddAndMinusFromCart";
import Link from "next/link";

interface CartSingleItemProps {
  item: number;
}

const CartSingleItem: React.FC<CartSingleItemProps> = ({ item }) => {
  return (
    <>
      {" "}
      <div className="flex justify-between items-center flex-wrap gap-3 md:gap-0">
        <div className="flex gap-3 flex-wrap">
          <div className="w-[100px] shrink-0 flex items-center justify-center p-[0.25rem] mb-[1rem] border border-[#dee2e6] hover:border-[#eceef1] hover:shadow-md rounded-[0.4rem]">
            <img
              className="w-full max-w-full cursor-pointer object-contain lg:object-cover rounded-[0.4rem] overflow-hidden"
              alt=""
              src="/images/consumer_electronics/elect7.png"
            />
          </div>
          <div className="text-[0.9rem] md:text-[0.95rem] max-w-[307px] space-y-2">
            <Link className="text-[rgb(13,110,253)] hover:underline" href="/">
              Jeans Short for Men Original
            </Link>
            {/* Properties */}
            <div className="text-[rgb(157,161,167)]">
              Size: medium, Color: blue, Material: Plastic Seller: Artel Market
            </div>
            <div className="text-[0.75rem] space-x-1 sm:space-x-1 ">
              {/* Button */}
              {/* 0.25rem 0.5rem */}
              <button className="cursor-pointer py-[0.25rem] px-[0.5rem] text-[rgb(255,39,72)] border border-[#dee2e6] rounded-[0.5rem]">
                Remove
              </button>
              <button className="cursor-pointer py-[0.25rem] px-[0.5rem] border border-[#dee2e6] rounded-[0.5rem]">
                Save for later
              </button>
            </div>
          </div>
        </div>
        {/* Price and Quantity */}
        <div className="ml-0 w-full flex flex-wrap items-center justify-between md:ml-4 md:w-fit md:block ">
          <div className="text-black font-[600] mb-[0.3rem] text-[1rem]">
            $75.44
          </div>
          <AddAndMinusFromCart />
        </div>
      </div>
      
    </>
  );
};

export default CartSingleItem;
