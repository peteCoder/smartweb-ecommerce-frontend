import React from "react";
import CenterLayout from "../CenterLayout";

interface NewsLetterProps {
  children: React.ReactNode;
}

const NewsLetter: React.FC<NewsLetterProps> = ({ children }) => {
  return (
    <div className="bg-[#EFF2F4] border mt-10">
      <div className="w-full min-h-[190px]">
        <CenterLayout customBg={true} noPadding={true}>
          <div className="w-full h-full text-center space-y-4">
            <h1 className="text-[#1C1C1C] text-[20px]">
              Subscribe on our newsletter
            </h1>
            <p className="text-[#606060] ">
              Get daily news on upcoming offers from many suppliers all over the
              world
            </p>
            <div className="flex items-center gap-4 justify-center flex-col md:flex-row mt-4">
              <div className="w-[274px] h-[40px] relative overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  className="hidden md:block h-[25px] w-[25px] absolute top-[50%] -translate-y-[50%] pl-1"
                >
                  <path
                    d="M20.1666 5.50002C20.1666 4.49169 19.3416 3.66669 18.3333 3.66669H3.66665C2.65831 3.66669 1.83331 4.49169 1.83331 5.50002V16.5C1.83331 17.5084 2.65831 18.3334 3.66665 18.3334H18.3333C19.3416 18.3334 20.1666 17.5084 20.1666 16.5V5.50002ZM18.3333 5.50002L11 10.0834L3.66665 5.50002H18.3333ZM18.3333 16.5H3.66665V7.33335L11 11.9167L18.3333 7.33335V16.5Z"
                    fill="#8B96A5"
                  />
                </svg>
                <input
                  placeholder="Email"
                  type="text"
                  className=" w-full h-full outline-none pl-2 md:pl-7 pr-2"
                />
              </div>
              <button className="my-4 text-[15px] rounded-[5px] text-white bg-[#0d6efd] hover:bg-[#0b5ed7] border-[#0d6efd] hover:border-[#0b5ed7] border py-[0.49rem] px-[0.84rem]">
                Subscribe
              </button>
            </div>
          </div>
        </CenterLayout>
      </div>
      {children}
      <div className="w-full min-h-[68px] flex items-center justify-between">
        <CenterLayout customBg={true} noPadding={true}>
          <div className="w-full h-full text-[14px]">
            <p>© 2023 Ecommerce. </p>
          </div>
        </CenterLayout>
      </div>
    </div>
  );
};

export default NewsLetter;
