import React from "react";
import HeaderComponentGridListView from "./HeaderComponentGridListView";
import ProductsViewForGrid from "./ProductsViewForGrid";
import ProductsViewForList from "./ProductsViewForList";

const MarketViewGridOrList = () => {
  return (
    <div className="w-full lg:w-[80%] p-0 md:p-[1.25rem] overflow-hidden">
      <HeaderComponentGridListView />

      {/* All products are here */}
      <ProductsViewForGrid />
      {/* <ProductsViewForList /> */}
    </div>
  );
};

export default MarketViewGridOrList;
