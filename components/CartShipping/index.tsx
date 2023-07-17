import React from "react";

const CartShippingForm = () => {
  return (
    <form className="space-y-2">
      <input
        placeholder="Name"
        className="w-full h-[40px] border-[#DEE2E7] border focus:outline-none p-[10px] rounded-[5px] placeholder:text-[#1C1C1C] placeholder:text-[15px]"
        type="text"
      />
      <input
        placeholder="Phone"
        className="w-full h-[40px] border-[#DEE2E7] border focus:outline-none p-[10px] rounded-[5px] placeholder:text-[#1C1C1C] placeholder:text-[15px]"
        type="text"
      />
      <input
        placeholder="Country"
        className="w-full h-[40px] border-[#DEE2E7] border focus:outline-none p-[10px] rounded-[5px] placeholder:text-[#1C1C1C] placeholder:text-[15px]"
        type="text"
      />
      <input
        placeholder="State"
        className="w-full h-[40px] border-[#DEE2E7] border focus:outline-none p-[10px] rounded-[5px] placeholder:text-[#1C1C1C] placeholder:text-[15px]"
        type="text"
      />
      <input
        placeholder="City"
        className="w-full h-[40px] border-[#DEE2E7] border focus:outline-none p-[10px] rounded-[5px] placeholder:text-[#1C1C1C] placeholder:text-[15px]"
        type="text"
      />
      <textarea
        className="w-full border-[#DEE2E7] border focus:outline-none p-[10px] rounded-[5px] placeholder:text-[#1C1C1C] placeholder:text-[15px] resize-none"
        placeholder="Address"
      ></textarea>

      <button className="gap-2 my-4 text-[16px] md:text-[18px] rounded-[5px] text-white bg-[#00a524] hover:bg-[#00a524] border-[#00a51e] hover:border-[#00a524c9] w-full border py-[1rem] px-[1rem]">
        Place Order
      </button>
    </form>
  );
};

export default CartShippingForm;
