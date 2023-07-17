import React from "react";



const AddAndMinusFromCart = ({ hasQtyText }: AddAndMinusFromCartProps) => {
  return (
    <div className="space-y-1">
      {hasQtyText && <label htmlFor="">Quantity</label>}
      <div className="flex items-center">
        <button className="cart-btn btn-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#999"
            viewBox="0 0 24 24"
          >
            <path d="M19 13H5v-2h14v2z"></path>
          </svg>
        </button>

        <button className="cart-qty">14</button>

        <button className="cart-btn btn-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#999"
            viewBox="0 0 24 24"
          >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AddAndMinusFromCart;
