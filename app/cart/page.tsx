import CenterLayout from "@/components/CenterLayout";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SimilarSmallItems from "@/components/SimilarItems/SimilarSmallItems";
import ProductDetailTab from "@/components/ProductDetailTab";
import Link from "next/link";
import CartItems from "@/components/CartItems";
import CartShippingForm from "@/components/CartShipping";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <CenterLayout customBg={true}>
          <div className="flex flex-col lg:flex-row gap-8 min-h-[70vh] mb-7">
            {/* First Column */}
            <CartItems />

            {/* Second Column */}
            <div className="w-full lg:w-[35%] md:p-[1.25rem]">
              {/* First Form */}
              <div className="flex flex-col space-y-3">
                <div className="bg-white p-[1.5rem] space-y-4 rounded-[0.5rem] overflow-hidden">
                  <div className="flex justify-between gap-3">
                    <span className="text-[#9da1a7]">Subtotal:</span>
                    <span className="break-all">$100</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#9da1a7]">Discount:</span>
                    <span className="break-all text-red-600">- $400</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#9da1a7]">Tax:</span>
                    <span className="break-all text-green-600">+ $140</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#9da1a7]">Shipping:</span>
                    <span className="break-all text-green-600">+ $170</span>
                  </div>
                  <hr />
                  <div className="flex justify-between gap-3 text-[1.3rem]">
                    <span className="text-[#9da1a7]">Total:</span>
                    <span>$357.90</span>
                  </div>
                  <button className="gap-2 my-4 text-[16px] md:text-[18px] rounded-[5px] text-white bg-[#00a524] hover:bg-[#00a524] border-[#00a51e] hover:border-[#00a524c9] w-full border py-[1rem] px-[1rem]">
                    Checkout
                  </button>

                  <div className="flex justify-center items-center gap-2">
                    <img
                      className="w-[50px]"
                      src="/images/cart/america_express.svg"
                      alt=""
                    />
                    <img
                      className="w-[50px]"
                      src="/images/cart/paypal.svg"
                      alt=""
                    />
                    <img
                      className="w-[50px]"
                      src="/images/cart/verve.svg"
                      alt=""
                    />
                    <img
                      className="w-[50px]"
                      src="/images/cart/visa.svg"
                      alt=""
                    />
                  </div>
                </div>

                {/* <div className="bg-white p-[1.5rem] space-y-4 rounded-[0.5rem]">
                  <h3 className="text-black text-[1.1rem] font-[600] ">
                    Shipping Details{" "}
                  </h3>
                  <CartShippingForm />
                </div> */}
                {/* Second Total including discount */}
                <div className=""></div>
              </div>
            </div>
          </div>
        </CenterLayout>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
