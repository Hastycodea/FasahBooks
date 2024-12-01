/* eslint-disable react/jsx-key */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-3xl my-8 pb-4 border-b border-gray-300 ">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your Cart is Empty</p>
      ) : (
        <div className="md:flex justify-between">
          <div className="md:w-[65%]">
            {cartItems.map((item) => (
              <div className="md:flex items-center justify-between  my-4 pb-4 border-b border-gray-300">
                <div className="flex gap-8 items-center  ">
                  <p className="transform hover:rotate-180 duration-300 transition-all cursor-pointer text-2xl text-gray-500">X</p>
                  <img src={item.image} alt="" className="w-[100px] h-auto" />
                  <p>{item.name}</p>
                </div>
                <div className="flex gap-6">
                  <p>{item.price}</p>
                  <div className="flex gap-2">
                    <p>-</p>
                    <p>2</p>
                    <p>+</p>
                  </div>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[35%] ">
            <h2 className="flex  justify-center">Cart Totals</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
