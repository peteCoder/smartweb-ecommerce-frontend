import React from "react";

const CenterLayout: React.FC<CenterLayoutProps> = ({
  children,
  noPadding,
  customBg,
  noMarginTopBottom,
}) => {
  return (
    <div
      className={`w-full ${
        noMarginTopBottom ? "" : "my-[1rem]"
      }  text-[#565656] font-normal z-10`}
    >
      <div className="px-[0.625rem]">
        <div
          className={`max-w-[540px] md:max-w-[960px] xl:max-w-[1320px] mx-auto overflow-hidden rounded-[0.4rem] 
          relative  ${noPadding ? "" : "p-[1rem]"} ${
            customBg
              ? ""
              : "bg-white shadow-md border-[rgba(86,86,86,0.12)] border"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CenterLayout;
