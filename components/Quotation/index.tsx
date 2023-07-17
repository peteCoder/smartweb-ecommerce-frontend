import React from "react";
import CenterLayout from "../CenterLayout";
import OrderForm from "../OrderForm.tsx";

const Quotation = () => {
  return (
    <CenterLayout customBg={true} noPadding={true}>
      <div
        className="w-full h-full relative min-h-[900px] md:min-h-[700px] lg:min-h-[400px] bg-center"
        style={{
          backgroundImage: "url('/images/consumer_electronics/electBg.png')",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(128deg, #2C7CF1 0%, rgba(0, 209, 255, 0.50) 100%)",
          }}
          className="absolute space-y-5 lg:space-y-0 top-0 bottom-0 left-0 right-0 z-10 flex flex-col justify-center lg:justify-between lg:flex-row p-4 md:p-[49px]"
        >
          <div className="pr-3 flex flex-col gap-4">
            <h2 className="text-[28px] md:text-[32px] font-bold text-white max-w-[440px]">
              An easy way to send requests to all suppliers
            </h2>
            <p className="text-[15px] md:text-[16px] text-white max-w-[390px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="flex justify-center items-center self-start lg:self-center">
            <OrderForm />
          </div>
        </div>
      </div>
    </CenterLayout>
  );
};

export default Quotation;
