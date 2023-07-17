import CategoriesSmallSelector from "@/components/CategoriesSmallSelector";
import CenterLayout from "@/components/CenterLayout";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RecommendedItemsWithoutCart from "@/components/RecommendedItemsWithoutCart";
import SavedItemsWithCart from "@/components/SavedItemsWithCart";
import { customerElectronicCategories } from "@/public/images/consumer_electronics";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";

const ProductList = () => {
  return (
    <>
      <Navbar />

      <div
        style={{
          backgroundImage: `url("/images/categories/cat-banner.jpeg")`,
        }}
        className="h-[60vh] bg-cover bg-center"
      >
        <div className="h-full max-w-[540px] md:max-w-[960px] xl:max-w-[1320px] mx-auto overflow-hidden p-[1rem] flex items-center ">
          <div className="text-white max-w-[460px] my-6 space-y-3">
            <h2 className="font-bold  text-[calc(1.475rem+2.7vw)] leading-[40px] md:leading-[68px]">
              Best products & brands in our store
            </h2>
            <p className="text-[0.8rem] md:text-[1rem]">
              Trendy Products, Factory Prices, Excellent Service
            </p>
            <div className="flex gap-2 items-center flex-wrap">
              <Link
                href="/"
                className="inline-block text-center rounded-[.4rem] bg-[#ff8100] hover:bg-[#d96e00] hover:border-[#cc6700] border-[#ff8100] border py-[0.43rem] px-[0.84rem] text-white"
              >
                Purchase now
              </Link>

              <Link
                href={"/"}
                className="inline-block text-center rounded-[.4rem] bg-white border-white border py-[0.43rem] px-[0.84rem] text-[#1C1C1C]"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f9fa] w-full py-[40px]">
        <CenterLayout noMarginTopBottom={true} customBg={true} noPadding={true}>
          {/*  */}
          <div className="w-full h-full flex flex-wrap justify-center">
            {customerElectronicCategories.map((category) => (
              <CategoriesSmallSelector data={category} key={category.id} />
            ))}
          </div>
        </CenterLayout>
      </div>

      <div className="bg-white w-full">
        <CenterLayout noMarginTopBottom={true} customBg={true} noPadding={true}>
          {/*  */}
          <div className="py-[40px]">
            <h2 className="my-2 font-[400] px-4 text-black text-[calc(1.1rem+0.6vw)]">
              Recommended items
            </h2>
            {/* Prooducts List -- justify-center sm:justify-normal */}
            <div className="flex w-full flex-wrap items-center sm:items-start">
              <RecommendedItemsWithoutCart />
              <RecommendedItemsWithoutCart />
              <RecommendedItemsWithoutCart />
              <RecommendedItemsWithoutCart />
              <RecommendedItemsWithoutCart />
            </div>
          </div>
        </CenterLayout>
      </div>
      <CenterLayout>
        <div className="w-full min-h-[40vh]">
          <div className="flex items-center space-x-3 mb-5 text-[calc(1.15rem+0.3vw)]">
            <FaHeart className="text-[rgb(157,161,167)]  font-black" />
            <h3 className="text-black md:text-[calc(1.1rem+0.3vw)]">
              Your saved items
            </h3>
          </div>
          <div className="flex flex-row  flex-wrap gap-">
            {/* Items */}
            <SavedItemsWithCart />
            <SavedItemsWithCart />
            <SavedItemsWithCart />
          </div>
        </div>
      </CenterLayout>
      <Footer />
    </>
  );
};

export default ProductList;
