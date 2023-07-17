import Link from "next/link";
import React from "react";

interface CategoriesSmallSelectorProps {
  data: CategoriesType;
}

const CategoriesSmallSelector: React.FC<CategoriesSmallSelectorProps> = ({
  data,
}) => {
  return (
    <div className="px-5 mt-5 group cursor-pointer">
      <Link
        href={"/category/" + data.id}
        className="flex flex-col items-center gap-3 opacity-100 group-hover:opacity-80"
      >
        <div
          style={{
            backgroundImage: `url(${data.image})`,
          }}
          className="w-[100px] h-[100px] rounded-full border bg-center bg-contain bg-no-repeat bg-white  overflow-hidden"
        ></div>
        {/* Background Image is used instead of normal img tag */}
        <div className="group-hover:underline">{data.name}</div>
      </Link>
    </div>
  );
};

export default CategoriesSmallSelector;
