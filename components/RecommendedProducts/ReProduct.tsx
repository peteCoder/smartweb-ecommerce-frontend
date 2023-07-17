import Link from "next/link";
import React from "react";

const ReProduct = ({
  id,
  image,
  name,
  base_price,
  description,
}: RecommendedProductType) => {
  return (
    <Link
      href={`/products/${id}`}
      className="h-[310px] bg-white flex flex-col justify-between border rounded-[8px]"
    >
      <img className="h-[160px] w-auto mx-auto" src={image} alt={name} />
      <div className="space-y-2 p-[17px]">
        <p className="text-[#1C1C1C]">${base_price}</p>
        <div className="text-[#8B96A5] text-[13px] space-y-1">
          <p className="text-[14px]">{name}.</p>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ReProduct;
