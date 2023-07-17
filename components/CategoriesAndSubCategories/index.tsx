import React from "react";
import CenterLayout from "../CenterLayout";

import Link from "next/link";

const CategoriesAndSubCategories: React.FC<CategoryProps> = ({
  backgroundImage,
  categories,
  catTitle,
  linkForButton,
}) => {
  return (
    <CenterLayout noPadding={true}>
      <div className="w-full flex flex-col lg:flex-row">
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="min-h-[300px] p-[1rem] lg:p-[1.5rem] lg:w-[25%]"
        >
          {/* Text cover here */}
          <h2 className="text-[20px] max-w-[130px] font-[600] text-[#1C1C1C]">
            {catTitle}
          </h2>

          <Link
            href={linkForButton}
            className="inline-block mt-6 text-center rounded-[.4rem] bg-white border-white border py-[0.43rem] px-[0.84rem] text-[#1C1C1C]"
          >
            Source now
          </Link>
        </div>

        <div className="min-h-[300px] lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Grid Items Here */}
          {categories.map((category) => (
            <div
              key={category.id}
              className="border-[rgba(86,86,86,0.12)] border min-h-[150px] relative p-5 md:p-3"
            >
              <Link
                href={`/categories/${category.id}`}
                className="text-[#1C1C1C] font-normal hover:text-gray-500"
              >
                {category.name}
              </Link>
              <p className="font-normal text-[#8B96A5] text-[13px] flex flex-col">
                <span>From</span>
                <span>USD {category.base_price}</span>
              </p>
              <img
                src={category.image}
                className="h-[74.71px] absolute bottom-3 right-3"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </CenterLayout>
  );
};

export default CategoriesAndSubCategories;
