import Link from "next/link";
import { FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

interface GridSingleProductComponentProps {}

const GridSingleProductComponent: React.FC<
  GridSingleProductComponentProps
> = ({}) => {
  return (
    <div className="flex-strategy min-h-[300px] w-full sm:w-1/2 px-1 py-3 lg:px-3 md:w-1/2 lg:w-1/3 ">
      <div className="rounded-md overflow-hidden bg-white border">
        <img
          className="sm:h-[220px] mx-auto md:w-[220px] rounded-md object-contain p-2 "
          src="/images/consumer_electronics/elect2.png"
          alt=""
        />
        <hr />
        <div className=" m-0 p-2 lg:p-4">
          <div className="flex flex-wrap justify-between gap-2">
            <div className="flex flex-col">
              <p className="font-bold text-[1rem] md:text-[1.2rem] text-black">
                {" "}
                $32.00{" "}
              </p>
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
            </div>

            <div className="">
              <button className="flex items-center gap-2 text-[15px] rounded-[5px] border-[#dee2e6] bg-white  border py-[0.46rem] px-[0.8rem] hover:border-[#c1c9d0] hover:text-[#0d6efd] text-[#6c757d]">
                <FaHeart className="text-[20px]" />
              </button>
            </div>
          </div>

          <Link
            href={"/products/2"}
            className=" text-[rgb(86,86,86)] my-3 inline-block cursor-pointer text-[0.8rem] md:text-[0.9rem] font-normal hover:text-[#0d6efd]"
          >
            Apple iPhone 8 64GB 128GB 256GB ATT T-Mobile
          </Link>

          <button className="flex items-center text-[0.8rem] md:text-[0.9rem] py-[0.41rem] px-[0.82rem] group space-x-[3px] lg:space-x-[5px] bg-white hover:bg-[rgb(249,250,251)] border border-[rgb(222,226,230)] hover:border-[rgb(193,201,208)] rounded-md text-[rgb(13,110,253)]">
            {" "}
            <HiShoppingCart
              className="opacity-[0.4] group-hover:opacity-[1]"
              size={23}
            />{" "}
            <span className="">Move to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridSingleProductComponent;
