/* eslint-disable react/jsx-key */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-3xl my-8 pb-4 border-b border-gray-300 ">Cart</h2>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg -mb-2">X</p>
          <FontAwesomeIcon icon={faCartShopping} className="text-5xl mb-10" />
          <p className="font-normal text-2xl text-gray-500">
            Your cart is currently empty
          </p>
        </div>
      ) : (
        <div className="md:flex justify-between">
          <div className="md:w-[65%]">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="md:flex items-center justify-between  my-4 pb-4 border-b border-gray-300"
              >
                <div className="flex flex-col-reverse md:flex-row gap-8 items-center mb-5 md:mb-0  ">
                  <p
                    className="hidden md:block transform hover:rotate-180 duration-300 transition-all cursor-pointer text-2xl text-gray-500"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    X
                  </p>
                  <div className="relative">
                    <p
                      className="my-auto absolute inset-0  -translate-x-1/2 md:hidden transform hover:rotate-180 duration-300 transition-all cursor-pointer text-2xl text-gray-500"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      X
                    </p>
                    <img
                      src={item.image}
                      alt=""
                      className="w-[30vw] md:w-[100px] h-auto"
                    />
                  </div>
                  <p className="hidden md:block">{item.name}</p>
                </div>
                <div>
                  <p className="flex mb-5 md:hidden justify-center">
                    {item.name}
                  </p>
                </div>
                <div className="flex justify-center  items-center gap-6 text-sm md:text-base">
                  <p>{item.price}</p>
                  <div className="flex items-center justify-center gap-2">
                    <p
                      onClick={() => dispatch(decreaseQuantity(item))}
                      className="cursor-pointer w-6 h-6 bg-blue-200 rounded-sm flex items-center justify-center"
                    >
                      -
                    </p>
                    <p className="w-[10px] flex items-center justify-center">
                      {item.quantity}
                    </p>
                    <p
                      onClick={() => dispatch(increaseQuantity(item))}
                      className="cursor-pointer w-6 h-6 bg-blue-200 rounded-sm flex items-center justify-center"
                    >
                      +
                    </p>
                  </div>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-[30%]  ">
            <h2 className="flex mb-10 mt-10 md:mt-0">Cart Totals</h2>
            <div className="grid grid-cols-2 grid-cols-12 text-sm font-light border-b border-gray-300 pb-5">
              <div className="col-span-4">
                <p className="font-medium">Subtotal</p>
              </div>
              <div className="col-span-8">
                <p>KES 3,340</p>
              </div>
            </div>
            <div className="grid grid-cols-12 text-sm font-light border-b border-gray-300 py-5">
              <div className="col-span-4">
                <p className="font-medium">Shipping</p>
              </div>
              <div className="col-span-8 leading-loose text-gray-500">
                <label className="flex gap-2">
                  <input type="radio" name="option" />
                  <p>Nairobi CBD free</p>
                </label>
                <label className="flex gap-2">
                  <input type="radio" name="option" />
                  <p>Rest of Nairobi, Central, Nyanza, Western, Nakuru, Naivasha, Eldoret, Coast (Not Lamu): KES 300</p>
                </label>
                <label className="flex gap-2">
                  <input type="radio" name="option" />
                  <p>Turkana & North Eastern Region: KES 400</p>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-12 text-sm font-light border-b border-gray-300 py-5">
              <div className="col-span-4">
                <p className="font-medium">Subtotal</p>
              </div>
              <div className="col-span-8">
                <p className="font-medium text-3xl">KES 3,340</p>
              </div>
            </div>
            <button className="bg-black text-white w-full py-2">Proceed To Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
