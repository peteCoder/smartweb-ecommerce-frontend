import React from "react";

const OrderForm = () => {
  return (
    <div
      className="bg-white min-w-full md:min-w-[30rem] min-h-[300px]
        border border-[rgba(0,0,0,0.15)] text-[#565656] rounded-[0.4rem]
    "
    >
      <div className="flex flex-col p-[20px] w-full h-full">
        <h2 className="text-[#1C1C1C] text-[18px] font-bold tracking-wide">
          Send quote to suppliers
        </h2>
        <div className="w-full pt-2 space-y-4">
          <input
            placeholder="What item you need?"
            className="w-full h-[40px] border-[#DEE2E7] border focus:outline-none p-[10px] rounded-[5px] placeholder:text-[#1C1C1C] placeholder:text-[15px]"
            type="text"
          />
          <textarea
            className="w-full border-[#DEE2E7] border focus:outline-none p-[10px] rounded-[5px] placeholder:text-[#1C1C1C] placeholder:text-[15px] resize-none"
            placeholder="Type more details"
          ></textarea>

          <div className="w-full flex gap-5 flex-col sm:flex-row">
            <input
              className="py-[0.49rem]  px-[0.84rem] border border-[#dee2e7] w-full md:w-[111px] placeholder:text-[#1C1C1C] text-[#1C1C1C] rounded-[5px] outline-none min-h-full"
              placeholder="Quantity"
              type="number"
            />

            <select className="py-[0.49rem]  px-[0.84rem] border border-[#dee2e7] w-full md:w-[111px] text-[#1C1C1C] rounded-[5px] outline-none min-h-full">
              <option value="Pcs">Pcs</option>
              <option value="Kg">Kg</option>
              <option value="Grams">Grams</option>
            </select>
          </div>
          <button className="gap-2 my-4 text-[15px] rounded-[5px] text-white bg-[#0d6efd] hover:bg-[#0b5ed7] border-[#0d6efd] hover:border-[#0b5ed7] border py-[0.49rem] px-[0.84rem]">
            Send inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
