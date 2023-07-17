import React from "react";
import GridSingleProductComponent from "./GridSingleProductComponent";


const ProductsViewForGrid = () => {
  return (
    <div className="w-full">
      {/* Products List */}
      <div className="mt-[1rem] w-full">
        {/* Loop Through the GridSingleProductComponent */}
        <div className="flex w-full flex-wrap items-center sm:items-start">
          <GridSingleProductComponent />
          <GridSingleProductComponent />
          <GridSingleProductComponent />
          <GridSingleProductComponent />
          <GridSingleProductComponent />
          <GridSingleProductComponent />
        </div>
      </div>
    </div>
  );
};

export default ProductsViewForGrid;
