import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchBarProductComponent from "./SearchBarProductComponent";

// Dummy variable data
import { allProducts, allProductsType } from "@/data";

const SearchBar = () => {
  const [searchTerm, setSearchTeam] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state for api

  const [stateData, setStateData] = useState<allProductsType[]>([]);

  useEffect(() => {
    setTimeout(() => {
      getSearchedItems();
    }, 3000);
  }, [searchTerm]);

  const getSearchedItems = async () => {
    const response = await fetch(`/api/products?search=${searchTerm}`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="w-full flex relative">
      <input
        onChange={(e) => setSearchTeam(e.target.value)}
        type="text"
        placeholder="Search"
        // rounded-r-none
        className="flex-1 w-full text-[1rem] font-normal py-[0.49rem] px-[0.84rem] rounded-[0.4rem]  bg-[#f9f9f9] border border-[#dee2e6] text-[#565656] outline-none"
      />
      {searchTerm.length > 0 && (
        <div className="absolute top-[103%] overflow-y-auto rounded-[0.4rem] left-0 w-full bg-white border shadow-md z-[5000] h-[50vh] p-2 space-y-2">
          {stateData.map((data) => (
            // <SearchBarProductComponent data={data} />
            <></>
          ))}
        </div>
      )}
      {/* <div className="col-3 !hidden md:!block">
        <select className="form-select !rounded-none py-[0.49rem] px-[0.84rem] bg-[#f9f9f9]  border border-l-0 border-[#dee2e6] text-[#565656] outline-none min-h-full">
          <option value="Item 1">Item 1</option>
          <option value="Item 2">Item 2</option>
          <option value="Item 3">Item 3</option>
          <option value="Item 4">Item 4</option>
          <option value="Item 5">Item 5</option>
        </select>
      </div> */}

      {/* <button className="text-white bg-[#0d6efd] border-[#0d6efd] border py-[0.49rem] px-[0.84rem] rounded-lg rounded-l-none outline-none min-h-full">
        <FaSearch />
      </button> */}
    </div>
  );
};

export default SearchBar;
