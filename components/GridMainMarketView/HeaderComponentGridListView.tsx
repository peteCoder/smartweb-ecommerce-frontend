import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import FilterChuck from "./FilterChuck";

const chunckData = [
  { name: "Samsung" },
  { name: "iPhone" },
  { name: "Laptop" },
  { name: "Mattress" },
  { name: "Radio sets" },
];

const HeaderComponentGridListView = () => {
  return (
    <>
      <div className="w-full bg-white p-[1.2rem] flex items-center justify-between shadow-sm rounded-md flex-wrap mb-[1rem]">
        <div className="">
          12,911 items in{" "}
          <span className="font-bold text-black">Equipments</span>
        </div>

        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex items-center gap-2">
            <input className="w-[1rem] h-[1rem] bg-white " type="checkbox" />
            <span>Verified only</span>
          </div>
          <div className="">
            <select className="form-select" name="" id="">
              <option value="Best Match">Best Match</option>
              <option value="Recommended">Recommended</option>
              <option value="High rated">High rated</option>
              <option value="Randomly">Randomly</option>
            </select>
          </div>
          <div className="flex item-center">
            <button className="grid-btn grid-btn-left hover:text-[#0d6efd]">
              <BsFillGrid3X3GapFill className="text-[16px]" />
            </button>
            <button className="grid-btn grid-btn grid-btn-right hover:text-[#0d6efd]">
              <FaList className="text-[16px]" />
            </button>
          </div>
        </div>
      </div>
      {/* Filter Chunks */}
      <div className="w-full">
        <div className="mb-[1rem] w-full">
          <div className="flex items-center text-[14px] gap-2 flex-wrap">
            {chunckData.map(({ name }, i) => (
              <FilterChuck key={i} filteredName={name} />
            ))}
            <button className="text-[rgb(13,110,253)] cursor-pointer">
              Clear all filter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponentGridListView;
