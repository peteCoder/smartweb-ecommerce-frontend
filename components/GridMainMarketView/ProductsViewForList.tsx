import React from "react";
import ListSingleProductComponent from "./ListSingleProductComponent";

const ProductsViewForList = () => {
  return (
    <div className="w-full">
      {/* Products List */}
      <div className="mt-[1rem] w-full">
        {/* Loop Through the GridSingleProductComponent */}
        <div className="flex flex-col w-full gap-2">
          <ListSingleProductComponent />
          <ListSingleProductComponent />
          <ListSingleProductComponent />
        </div>
      </div>
    </div>
  );
};

export default ProductsViewForList;
