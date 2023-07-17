import React from "react";
import MarketViewFilter from "./MarketViewFilter";
import CenterLayout from "../CenterLayout";
import MarketViewGridOrList from "./MarketViewGrid";

const GridMainMarketView = () => {
  return (
    <CenterLayout customBg={true} noPadding={true}>
      <div className="flex flex-col lg:flex-row gap-2 min-h-[70vh] mb-7">
        <MarketViewFilter />
        {/* GridView or ListView here */}
        <MarketViewGridOrList />

      </div>
    </CenterLayout>
  );
};

export default GridMainMarketView;
