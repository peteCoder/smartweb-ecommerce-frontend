import React from "react";
import { LiaTimesSolid } from "react-icons/lia";

interface FilterChunkProps {
  filteredName: string;
}

const FilterChuck: React.FC<FilterChunkProps> = ({ filteredName }) => {
  return (
    <div className="flex items-center space-x-3 text-[14px] py-[4px] px-[12px] rounded-[20px] text-[rgb(86,86,86)] bg-[#e9ecef] cursor-pointer">
      <span>{filteredName}</span>
      <LiaTimesSolid className="text-[15px] font-bold" />
    </div>
  );
};

export default FilterChuck;
