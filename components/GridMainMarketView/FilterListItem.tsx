"use client";

import React, { ReactElement, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

// Continue from FilterListItem

interface FilterListItemProps {
  title: string;
  body: ReactElement<HTMLDivElement>;
}

const FilterListItem: React.FC<FilterListItemProps> = ({ title, body }) => {
  const [toggleItems, setToggleItems] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full py-[0.5rem] px-0 border-t">
        <div
          onClick={() => setToggleItems((prev) => !prev)}
          className="flex items-center gap-2 hover:underline cursor-pointer font-[900]"
        >
          <BsChevronDown />
          <span>{title}</span>
        </div>
        <div
          className={`overflow-hidden transition ease-linear duration-1000 open-toggle ${
            toggleItems ? "active" : ""
          }`}
        >
          <div className="px-2 py-3">{body}</div>
        </div>
      </div>
    </div>
  );
};

export default FilterListItem;
