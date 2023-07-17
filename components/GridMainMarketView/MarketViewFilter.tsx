import React from "react";
import FilterListItem from "./FilterListItem";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const categories = [
  { id: 1, name: "Equipment" },
  { id: 2, name: "Home items" },
  { id: 3, name: "Home Gadgets" },
  { id: 4, name: "TV sets" },
  { id: 5, name: "Microchips" },
  { id: 6, name: "Smartphones" },
];

const brands = [
  { id: 1, name: "Panasonic" },
  { id: 2, name: "Toyota" },
  { id: 3, name: "Xiaomi" },
  { id: 4, name: "Apple" },
  { id: 5, name: "Samsung" },
];

const features = [
  { id: 1, name: "Metallic frameasonic" },
  { id: 2, name: "Super Amoled" },
  { id: 3, name: "Battery included" },
  { id: 4, name: "Large screen" },
  { id: 5, name: "Extra memory" },
];
const conditions = [
  { id: 1, name: "Any" },
  { id: 2, name: "Refurblish" },
  { id: 3, name: "Damaged" },
  { id: 4, name: "Brand new" },
];

const MarketViewFilter = () => {
  return (
    <div className="w-full lg:w-[20%] p-0 md:p-[1.25rem]">
      {/* First filter */}
      <FilterListItem
        title="Related categories"
        body={
          <div className="flex flex-col gap-2">
            {categories.map(({ name, id }) => (
              <div className="" key={id}>
                <Link
                  className="hover:text-[#0d6efd] hover:underline"
                  href={`/category/${id}`}
                >
                  {name}
                </Link>
              </div>
            ))}
            <div className="">
              <Link
                href={"/category"}
                className="text-[#0d6efd] flex items-center gap-1"
              >
                See more <BsChevronDown />
              </Link>
            </div>
          </div>
        }
      />
      {/* Second filter */}
      <FilterListItem
        title="Brands"
        body={
          <div className="flex flex-col gap-2">
            {brands.map((brand) => (
              <div className="flex items-center gap-2" key={brand.id}>
                <input className="bg-white " type="checkbox" />
                <span>{brand.name}</span>
              </div>
            ))}
            <div className="">
              <Link
                href={"/brand"}
                className="text-[#0d6efd] flex items-center gap-1"
              >
                See more <BsChevronDown />
              </Link>
            </div>
          </div>
        }
      />
      {/* Third filter */}
      <FilterListItem
        title="Condition"
        body={
          <div className="flex flex-col gap-2">
            {conditions.map((condition) => (
              <div className="flex items-center gap-2" key={condition.id}>
                <input className="bg-white " type="checkbox" />
                <span>{condition.name}</span>
              </div>
            ))}
            <div className="">
              <Link
                href={"/condition"}
                className="text-[#0d6efd] flex items-center gap-1"
              >
                See more <BsChevronDown />
              </Link>
            </div>
          </div>
        }
      />

      {/* Fourth Filter */}
      <FilterListItem
        title="Price range"
        body={
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between gap-1 w-full">
              <div className="w-full md:w-[45%]">
                <p>Min</p>
                <input
                  placeholder="$0"
                  className="w-full h-[40px] bg-[#f9f9f9] focus:bg-white text-[#565656] border-[#DEE2E7] border focus:outline-none p-[10px] rounded-[5px] placeholder:text-[#565656] placeholder:text-[15px]"
                  type="text"
                />
              </div>
              <div className="w-full md:w-[45%]">
                <p>Max</p>
                <input
                  placeholder="$9999"
                  className="w-full h-[40px] text-[#565656] bg-[#f9f9f9] focus:bg-white border-[#DEE2E7] border focus:outline-none p-[10px] rounded-[5px] placeholder:text-[#1C1C1C] placeholder:text-[15px]"
                  type="text"
                />
              </div>
            </div>
            <button className="bg-white mt-3 w-full focus:bg-[#f9f9f9] focus:border-[3px] focus:shadow-md inline-block p-[0.5rem] rounded-md text-[rgb(13,110,253)]">
              Apply
            </button>
          </div>
        }
      />

      {/* Fifth Filter */}
      <FilterListItem
        title="Features"
        body={
          <div className="flex flex-col gap-2">
            {features.map((feature) => (
              <div className="flex items-center gap-2" key={feature.id}>
                <input className="bg-white " type="checkbox" />
                <span>{feature.name}</span>
              </div>
            ))}
            <div className="">
              <Link
                href={"/feature"}
                className="text-[#0d6efd] flex items-center gap-1"
              >
                See more <BsChevronDown />
              </Link>
            </div>
          </div>
        }
      />

      <hr />
    </div>
  );
};

export default MarketViewFilter;
