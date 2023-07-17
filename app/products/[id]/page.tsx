import AddAndMinusFromCart from "@/components/AddAndMinusFromCart";
import CenterLayout from "@/components/CenterLayout";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PopularDetailCategory from "@/components/PopularDetailCategory";
import ProductDetailTab from "@/components/ProductDetailTab";
import SimilarSmallItems from "@/components/SimilarItems/SimilarSmallItems";
import React from "react";

import {
  FaStar,
  FaStarHalfAlt,
  FaShoppingBasket,
  FaHeart,
} from "react-icons/fa";

const ProductDetail = () => {
  return (
    <>
      <Navbar />
      <div className="py-[1rem] bg-[#f8f9fa] text-[#565656]">
        <CenterLayout customBg={true} noPadding={true}>
          Navigation
        </CenterLayout>
      </div>
      <div className="w-full h-full bg-white min-h-[60vh]">
        <CenterLayout customBg={true} noPadding={true}>
          <div className="flex py-[40px] flex-col md:flex-row">
            {/* First Column */}
            <div className="md:w-1/2 px-3 flex-1">
              <div className="p-[0.25rem] mb-[1rem] border border-[#dee2e6] rounded-[0.4rem]">
                <img
                  className="md:min-h-[400px] w-full max-w-full object-contain lg:object-cover border border-[#dee2e6] rounded-[0.4rem]"
                  src="/images/consumer_electronics/elect4.png"
                  alt=""
                />
              </div>
              {/* Smaller Images */}
              <div className="w-full">
                <div className="w-full flex items-center flex-wrap gap-2 lg:gap-4 justify-center">
                  {/* First Image */}
                  <div className="h-[60px] w-[60px] flex items-center justify-center p-[0.25rem] mb-[1rem] border border-[#dee2e6] rounded-[0.4rem]">
                    <img
                      className="w-full max-w-full cursor-pointer object-contain lg:object-cover border border-[#dee2e6] rounded-[0.4rem] overflow-hidden"
                      alt=""
                      src="/images/re_products/p4.png"
                    />
                  </div>
                  <div className="h-[60px] w-[60px] flex items-center justify-center p-[0.25rem] mb-[1rem] border border-[#dee2e6] rounded-[0.4rem]">
                    <img
                      className="w-full max-w-full cursor-pointer object-contain lg:object-cover border border-[#dee2e6] rounded-[0.4rem] overflow-hidden"
                      alt=""
                      src="/images/re_products/p4.png"
                    />
                  </div>
                  <div className="h-[60px] w-[60px] flex items-center justify-center p-[0.25rem] mb-[1rem] border border-[#dee2e6] rounded-[0.4rem]">
                    <img
                      className="w-full max-w-full cursor-pointer object-contain lg:object-cover border border-[#dee2e6] rounded-[0.4rem] overflow-hidden"
                      alt=""
                      src="/images/re_products/p4.png"
                    />
                  </div>
                  <div className="h-[60px] w-[60px] flex items-center justify-center p-[0.25rem] mb-[1rem] border border-[#dee2e6] rounded-[0.4rem]">
                    <img
                      className="w-full max-w-full cursor-pointer object-contain lg:object-cover border border-[#dee2e6] rounded-[0.4rem] overflow-hidden"
                      alt=""
                      src="/images/re_products/p4.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Second Column */}
            <div className="md:w-1/2 px-3 flex-1">
              {/* Title */}
              <h3 className="text-[#212529]  sm:text-[calc(1.2rem+0.3vw)] mb-[0.3rem] font-bold md:text-[1.5rem]">
                Smart Camera for Men Women, 2022 Fitness Tracker 1.69" Touch
                Screen and Waterproof, Android OS
              </h3>
              {/*  Ratings */}
              <div className="my-[1rem] text-[14px] md:text-[16px]">
                <div className="flex items-center flex-wrap gap-2">
                  <div className="text-[#ff8100] flex items-center gap-1">
                    <div id="star" className="flex items-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                    <span className="font-[600]">4.5</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#9DA1A7]">
                    <span>•</span>
                    <div className="flex items-center gap-2">
                      <FaShoppingBasket />
                      <span>154 orders</span>
                    </div>
                    <span>•</span>
                  </div>
                  <span className="text-green-600">in stock</span>
                </div>
              </div>
              {/* Price and Description */}
              <div className="space-y-3">
                <div className="text-[#212529]">
                  <span className="text-[1.5rem] font-[600]">$75.00</span>{" "}
                  <span className="text-[#9DA1A7]">/per box</span>
                </div>
                <div className="text-[#565656] text-[14px] md:text-[16px]">
                  Modern look and quality demo item Smartwatch Fitness Watch 25
                  Sports IP68 is a streetwear-inspired collection that continues
                  to break away from the conventions of mainstream fashion. Made
                  in Italy, these black and brown for men.
                </div>

                <div className="w-full">
                  <dl className="w-full row">
                    {/* Product Properties and values */}
                    <dt className="col-3">Type:</dt>
                    <dd className="col-9">Regular</dd>
                    <dt className="col-3">Type:</dt>
                    <dd className="col-9">Regular</dd>
                    <dt className="col-3">Type:</dt>
                    <dd className="col-9">Regular</dd>
                    <dt className="col-3">Type:</dt>
                    <dd className="col-9">Regular</dd>
                  </dl>
                  <hr />
                </div>

                <div className="flex items-center justify-between lg:justify-start gap-5 flex-wrap">
                  <div className="lg:col-3 space-y-1">
                    <label htmlFor="">Size</label>
                    <select className="form-select" name="" id="">
                      <option value="Small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                    </select>
                  </div>
                  <AddAndMinusFromCart hasQtyText={true} />
                </div>

                <div className="text-white flex items-center flex-wrap gap-1 md:gap-3">
                  <div className="">
                    <button className="inline-block text-center rounded-[.4rem] bg-[#ff8100] hover:bg-[#d96e00] hover:border-[#cc6700] border-[#ff8100] border py-[0.43rem] px-[0.84rem] text-white">
                      Buy now
                    </button>
                  </div>
                  <div className="">
                    <button className="flex items-center gap-2 my-4 text-[15px] rounded-[5px] text-white bg-[#0d6efd] hover:bg-[#0b5ed7] border-[#0d6efd] hover:border-[#0b5ed7] border py-[0.49rem] px-[0.84rem] ">
                      <FaShoppingBasket /> Add to cart
                    </button>
                  </div>
                  <div className="">
                    <button className="flex items-center gap-2 my-4 text-[15px] rounded-[5px] border-[#dee2e6] bg-white  border py-[0.43rem] px-[0.84rem] hover:border-[#c1c9d0] hover:text-[#0d6efd] text-[#212529]">
                      <FaHeart />
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CenterLayout>
        {/* Continue from the tab */}
        <div className="">
          <CenterLayout customBg={true} noPadding={true}>
            <div className="flex flex-col lg:flex-row bg-white gap-8 min-h-[70vh] mb-7">
              <div className="w-full lg:w-[65%]">
                <ProductDetailTab />
              </div>
              <div className="w-full lg:w-[35%] p-[1.25rem] rounded-[1.5rem] border shadow-sm">
                <h2 className="text-[1.4rem] text-[rgb(33,37,41)] mb-5">
                  Similar items
                </h2>
                <div className="flex flex-col">
                  <div className="space-y-5">
                    {/* First Item */}
                    <SimilarSmallItems />
                    <SimilarSmallItems />
                    <SimilarSmallItems />
                    <SimilarSmallItems />
                  </div>
                </div>
              </div>
            </div>
          </CenterLayout>
        </div>
      </div>

      <CenterLayout customBg={true} noPadding={true}>
        <div className="">
          <h2 className="text-[rgb(33,37,41)] text-[600] text-[calc(1.3rem+0.6vw)] my-3">
            Popular Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <PopularDetailCategory />
            <PopularDetailCategory />
            <PopularDetailCategory />
            <PopularDetailCategory />
          </div>
        </div>
      </CenterLayout>
      <Footer />
    </>
  );
};

export default ProductDetail;
