"use client";
import Link from "next/link";
import { FaHeart, FaUser } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

const IconsContainer = () => {
  return (
    <div className="flex items-center flex-wrap md:flex-nowrap">
      <Link href={'/'} className="relative mx-[0.5rem] flex flex-col items-center gap-1">
        <FaUser size={20} color={"#6c757d"} />
        <span className="text-[0.7em]">Profile</span>
      </Link>

      <Link href={'/'} className="relative mx-[0.5rem] flex flex-col items-center gap-1">
        <FaHeart size={20} color={"#6c757d"} />
        <span className="text-[0.7em]">Saved</span>
      </Link>

      <Link href={'/cart'} className="relative mx-[0.5rem] flex flex-col items-center gap-1">
        <span className="absolute -top-1 -right-2 bg-red-600 rounded-full w-5 h-5 flex justify-center items-center p-[2px] text-white text-[9px]">
          10
        </span>
        <HiShoppingCart size={27} color={"#6c757d"} />
        <span className="text-[0.7em]">Cart</span>
      </Link>
    </div>
  );
};

export default IconsContainer;
