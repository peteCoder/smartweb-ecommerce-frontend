import Link from "next/link";
import React from "react";

const PopularDetailCategory = () => {
  return (
    <div className="bg-white rounded-[0.4rem] p-[1.5rem] shadow-sm flex flex-wrap-reverse justify-between items-center">
      <div className="">
        <h3 className="text-[rgb(33,37,41)] font-[600] ">Notebooks</h3>
        <ul className="text-[0.9rem]">
          <li className="mb-[2px]">
            <Link href={"/"} className="text-[rgb(86,86,86)] hover:underline hover:text-[#0b5ed7]">
              Smartwatches
            </Link>
          </li>
          <li className="mb-[2px]">
            <Link href={"/"} className="text-[rgb(86,86,86)] hover:underline hover:text-[#0b5ed7]">
              Keyboards
            </Link>
          </li>
          <li className="mb-[2px]">
            <Link href={"/"} className="text-[rgb(86,86,86)] hover:underline hover:text-[#0b5ed7]">
              Cables HDML, USB
            </Link>
          </li>
          <li className="mb-[2px]">
            <Link href={"/"} className="text-[rgb(86,86,86)] hover:underline hover:text-[#0b5ed7]">
              Others
            </Link>
          </li>
        </ul>
      </div>
      <img
        className="w-[70px] h-[70px] object-contain mb-2 float-right"
        src="/images/consumer_electronics/elect4.png"
        alt=""
      />
    </div>
  );
};

export default PopularDetailCategory;
