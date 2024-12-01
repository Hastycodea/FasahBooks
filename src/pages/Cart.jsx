/* eslint-disable react/jsx-key */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-3xl my-8">Cart</h2>
      <div className="flex">
        {cartItems.length === 0 ? (
          <p>Your Cart is Empty</p>
        ) : (
          <>
            {cartItems.map((item) =>(
              <p>{item.name}</p>

            ) )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
