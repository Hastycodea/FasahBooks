/* eslint-disable react/jsx-key */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWish } from "../redux/wishSlice";
import { addToCart } from "../redux/cartSlice";

const Wishlist = () => {
  const wishItems = useSelector((state) => state.wish.wishItems);
  const dispatch = useDispatch();

  return (
    <div className="w-[95%] sm:w-[70%] mx-auto">
      <h2 className="text-3xl my-8 pb-4  ">Wishlist</h2>
      {wishItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faHeartCrack} className="text-7xl mb-10" />
          <p className="font-normal text-2xl text-gray-500">
            No products were added to the wishlist
          </p>
        </div>
      ) : (
        <div>
          {wishItems.map((item) => (
            <div className="flex justify-between border-b border-gray-300">
              <div className="flex items-center gap-4 md:gap-11 py-4  text-xs text-gray-500 font-light">
                <p
                  className="hover:rotate-180 transition-all duration-300 cursor-pointer"
                  onClick={() => dispatch(removeFromWish(item))}
                >
                  X
                </p>
                <img src={item.image} alt="" className="w-[100px]" />
                <div className="flex flex-col items-center justify-center">
                  <p>{item.name}</p>
                  <p className="block sm:hidden">{item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-11 text-xs">
                <p className="text-gray-500 font-light hidden sm:block">
                  {item.price}
                </p>
                <p className="hidden md:block">IN STOCK</p>
                <button
                  className="flex btn bg-black text-white sm:px-6 px-2 sm:py-3 py-2 gap-2 hover:bg-blue-400 duration-300"
                  onClick={() => dispatch(addToCart(item))}
                >
                  <p>+</p>
                  <p>Add to Cart</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
