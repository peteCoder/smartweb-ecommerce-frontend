"use client";

import Link from "next/link";

const RecommendedItemsWithoutCart = () => {
  return (
    <Link
      href={"/"}
      className="flex-strategy w-full sm:w-1/2 px-1 py-3 lg:px-3 md:w-1/3 lg:w-1/5 "
    >
      <div className="p-2 rounded-md overflow-hidden">
        <img
          className="h-fit sm:h-[220px] mx-auto md:w-[220px] rounded-md object-contain border mix-blend-multiply"
          src="/images/consumer_electronics/elect5.jpeg"
          alt=""
        />
        <div className="max-w-[220px] mx-auto md:mx-0">
          <p className="mb-2 font-bold text-[1rem] md:text-[1.2rem] text-black my-3">
            {" "}
            $32.00{" "}
          </p>

          <p className=" text-[rgb(86,86,86)] text-[.8rem] md:text-[1rem]  font-normal hover:text-[rgb(13,110,253)]">
            Apple iPhone 8 64GB 128GB 256GB ATT T-Mobile
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecommendedItemsWithoutCart;
