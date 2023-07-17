import React from "react";
import CenterLayout from "../CenterLayout";
import { goodDealProducts } from "@/public/images/deals";

const Deals = () => {
  return (
    <CenterLayout noPadding={true}>
      <div className="w-full flex flex-col lg:flex-row">
        <div className="min-h-[300px] p-[1rem] lg:p-[1.5rem] lg:w-[25%]">
          {/*  */}
          <div className="">
            <h3 className="md:text-[1.7rem] text-[calc(1.3rem+0.6vw)] font-[600] text-[#212529] mb-2">
              Deals and offers
            </h3>
            <p className="mb-[1rem]">Hygiene equipments</p>
            <div className="flex items-center flex-wrap lg:flex-nowrap gap-4 lg:gap-2">
              {/* Items  Start*/}
              <div className="text-center mr-[5px]">
                <div className="bg-[#565656] py-[7px] px-[3x] inline-block min-w-[44px] text-white text-[22px] text-center rounded-[6px] ">
                  04
                </div>
                <div className="text-[0.8rem] mt-1">Days</div>
              </div>
              <div className="text-center mr-[5px]">
                <div className="bg-[#565656] py-[7px] px-[3x] inline-block min-w-[44px] text-white text-[22px] text-center rounded-[6px] ">
                  12
                </div>
                <div className="text-[0.8rem] mt-1">Hours</div>
              </div>
              <div className="text-center mr-[5px]">
                <div className="bg-[#565656] py-[7px] px-[3x] inline-block min-w-[44px] text-white text-[22px] text-center rounded-[6px] ">
                  58
                </div>
                <div className="text-[0.8rem] mt-1">Min</div>
              </div>
              <div className="text-center mr-[5px]">
                <div className="bg-[#565656] py-[7px] px-[3x] inline-block min-w-[44px] text-white text-[22px] text-center rounded-[6px] ">
                  02
                </div>
                <div className="text-[0.8rem] mt-1">Sec</div>
              </div>
              {/* Items End */}
            </div>
          </div>
        </div>
        <div className="min-h-[300px] lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {goodDealProducts.map((product) => (
            <div
              className="min-h-[300px] p-[0.5rem] border-[rgba(86,86,86,0.12)] border"
              key={product.id}
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-[130px] w-auto mx-auto p-[.6rem]"
              />

              <div className="p-[1rem] text-center mt-5 text-sm flex items-center justify-center flex-col">
                <p>{product.name}</p>
                <p className="bg-[#ff2748] text-white w-fit text-center text-[0.8rem] px-3 rounded-xl mt-1">
                  -{product.discount}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CenterLayout>
  );
};

export default Deals;
