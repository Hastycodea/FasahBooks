import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faHandshakeAngle,
  faShield,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center  px-[5%] py-[20px] mx-auto bg-gray-100">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon className="text-[#D89A0D] text-3xl" icon={faTruck} />
          <div className="text-xs text-gray-800">
            <h3>INSTANT DELIVERIES</h3>
            <p>Swift dispatch</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon
            className="text-[#D89A0D] text-3xl"
            icon={faHandshakeAngle}
          />
          <div className="text-xs text-gray-800">
            <h3>EXPERT SUPPORT</h3>
            <p>Help when you need it</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon
            className="text-[#D89A0D] text-3xl"
            icon={faShield}
          />
          <div className="text-xs text-gray-800">
            <h3>WIDE VARIETY</h3>
            <p>Thousands of Books</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon className="text-[#D89A0D] text-3xl" icon={faGlobe} />
          <div className="text-xs text-gray-800">
            <h3>QUICK DELIVERY</h3>
            <p>Worldwide Deliveries</p>
          </div>
        </div>
      </div>

      <div className="py-10 bg-black  px-[5%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-xs md:text-sm text-white text-left">
          <h6 className="mb-2 font-semibold">TALK TO US</h6>
          <div className="text-gray-500 space-y-1">
            <p>0723242534/07898738</p>
            <p>fasahbooks@gmail.com</p>
            <p>The Bazzar 1st Floor</p>
          </div>
        </div>
        <div className="text-xs md:text-sm text-white text-left">
          <h6 className="mb-2 font-semibold">ABOUT FASAH</h6>
          <div className="text-gray-500 space-y-1">
            <Link to="/" className="pointer hover:text-[#DB980A] duration-300 ">
              <p>Our Story</p>
            </Link>
            <Link to="/" className="pointer hover:text-[#DB980A] duration-300 ">
              <p>Blog</p>
            </Link>
            <Link to="/" className="pointer hover:text-[#DB980A] duration-300 ">
              <p>Contact Us</p>
            </Link>
          </div>
        </div>
        <div className="text-xs md:text-sm text-white text-left">
          <h6 className="mb-2 font-semibold">USEFUL LINKS</h6>
          <div className="text-gray-500 space-y-1">
            <Link to="/" className="pointer hover:text-[#DB980A] duration-300 ">
              <p>Delivery Policy</p>
            </Link>
            <Link to="/" className="pointer hover:text-[#DB980A] duration-300 ">
              <p>Return Policy</p>
            </Link>
            <Link to="/" className="pointer hover:text-[#DB980A] duration-300 ">
              <p>Gift Card Balance</p>
            </Link>
          </div>
        </div>
        <div className="text-xs md:text-sm text-white text-left">
          <h6 className="mb-2 font-semibold">TALK TO US</h6>
          <div className="text-gray-500 space-y-1">
            <p>0723242534/07898738</p>
            <p>fasahbooks@gmail.com</p>
            <p>The Bazzar 1st Floor</p>
          </div>
        </div>
      </div>
      <p className="bg-[#] text-black text-xs gap-2 flex items-center justify-center py-2">
        {" "}
        &copy; 2026 FASAH BOOKS<span> All rights reserved</span>
      </p>
    </div>
  );
};

export default Footer;
