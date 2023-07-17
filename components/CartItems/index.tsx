import Link from "next/link";
import React from "react";
import AddAndMinusFromCart from "../AddAndMinusFromCart";
import CartSingleItem from "./CartSingleItem";

const CartItemsPage = () => {
  const arrayOfProductsinCart = [1, 2, 3, 4];
  return (
    <div className="w-full lg:w-[65%] bg-white rounded-lg p-[1.25rem] md:p-[1.5rem] overflow-hidden">
      <h2 className="mb-[1.5rem] text-black text-[1rem] md:text-[calc(1.275rem+0.3vw)] font-[600]">
        Shopping Cart
      </h2>

      {arrayOfProductsinCart.map((item, index) => (
        <>
          <CartSingleItem key={item} item={item}/>
          {index !== arrayOfProductsinCart.length - 1 && (
            <hr className="mb-4 mt-4" />
          )}
        </>
      ))}
    </div>
  );
};

export default CartItemsPage;
