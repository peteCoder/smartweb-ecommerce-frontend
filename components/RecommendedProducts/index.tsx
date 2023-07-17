import React from "react";
import CenterLayout from "../CenterLayout";
import { recommendedProducts } from "@/public/images/re_products";
import ReProduct from "./ReProduct";

const RecommendedProducts = () => {
  return (
    <CenterLayout noPadding={true} customBg={true}>
      <h2 className="text-2xl text-[#1C1C1C] my-5">Recommended Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-6 gap-6">
        {recommendedProducts.map((product, _) => (
          <ReProduct {...product} key={product.id} />
        ))}
      </div>
    </CenterLayout>
  );
};

export default RecommendedProducts;
