import { allProductsType } from "@/data";
import Link from "next/link";
import React from "react";

interface SearchBarProductComponentProps {
  data: allProductsType;
}

const SearchBarProductComponent: React.FC<SearchBarProductComponentProps> = ({
  data,
}) => {
  return (
    <Link
      href={"/products/2"}
      className="w-full h-24 rounded-md flex items-center gap-2 p-2 focus:bg-gray-100"
    >
      <div className="h-1/2">
        <img className="w-auto h-full" src={data.image} alt={data.name} />
      </div>
      <div className="">
        <div className="text-sm font-bold">{data.name}</div>
        <div className="text-xs max-w-[160px]">
          {data.description.slice(0, 60)}
          <span>...</span>
        </div>
      </div>
    </Link>
  );
};

export default SearchBarProductComponent;
