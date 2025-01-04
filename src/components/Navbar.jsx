import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faXTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faChevronDown,
  faPhone,
  faBars,
  faMagnifyingGlass,
  faUser,
  faHeart,
  faCartShopping,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.length;

  const wishItems = useSelector((state) => state.wish.wishItems);
  const wishTotalItems = wishItems.length;

  return (
    <div className="px-2 md:px-5 w-full md:static sticky top-0 z-10 bg-white py-2">
      <div className="md:flex hidden justify-between items-center text-sm text-gray-600 border-b border-gray-200 py-3">
        <div className="flex space-x-3 items-center">
          <FontAwesomeIcon
            className="hover:text-[#DB980A] duration-300 cursor-pointer"
            icon={faXTwitter}
          />
          <FontAwesomeIcon
            className="hover:text-[#DB980A] duration-300 cursor-pointer"
            icon={faWhatsapp}
          />
          <FontAwesomeIcon icon={faClock} />
          <p>Mon - Fri: 9am - 5pm | Sat 9am - 3pm</p>
        </div>
        <div className="flex space-x-2 items-center hover:text-[#DB980A] duration-300 cursor-pointer ">
          <FontAwesomeIcon icon={faPhone} />
          <p>+254 710 594179</p>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between py-3">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="" className="w-24 h-auto" />
          </Link>
          <div className="flex mx-5 pb-3  justify-between items-center border-b border-gray-200 focus-within:border-gray-600 transition-colors duration-300">
            <input
              type="text"
              placeholder="Product Search"
              className="p-1.5 outline-none"
            />
            <FontAwesomeIcon
              className=" hover:text-[#DB980A] duration-300 text-2xl cursor-pointer"
              icon={faMagnifyingGlass}
            />
          </div>
        </div>
        <div className="flex items-center space-x-3 text-2xl text-gray-600 ">
          <Link to="/user">
            <div>
              <FontAwesomeIcon
                className="hover:text-[#DB980A] duration-300"
                icon={faUser}
              />
            </div>
          </Link>
          <Link to="/wishlist">
            <div className="relative">
              <FontAwesomeIcon
                className="hover:text-[#DB980A] duration-300"
                icon={faHeart}
              />
              <p className="absolute -top-2 -right-2 z-50 bg-blue-400   rounded-full h-5 w-5 flex items-center justify-center text-white text-[12px] ">
                {wishTotalItems}
              </p>
            </div>
          </Link>
          <Link to="/cart">
            <div>
              <FontAwesomeIcon
                className="hover:text-[#DB980A] duration-300"
                icon={faCartShopping}
              />
              <p className="absolute top-[78px] right-4 z-50 bg-blue-400   rounded-full h-5 w-5 flex items-center justify-center text-white text-[12px] ">
                {totalItems}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex  items-center border-b text-sm">
        <div className="flex space-x-3 items-center p-3 bg-black text-white">
          <FontAwesomeIcon icon={faBars} />
          <p>Browse Categories</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <ul className="flex space-x-10 justify-center text-sm font- w-9/12">
          <Link to="/">
            <li className="hover:text-[#DB980A] duration-300 cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="books">
            <li className="hover:text-[#DB980A] duration-300 cursor-pointer">
              All Books
            </li>
          </Link>
          <Link to="gift">
            <li className="hover:text-[#DB980A] duration-300 cursor-pointer">
              Gift Card
            </li>
          </Link>
          <Link to="about">
            <li className="hover:text-[#DB980A] duration-300 cursor-pointer">
              About Us
            </li>
          </Link>
          <Link to="contact">
            <li className="hover:text-[#DB980A] duration-300 cursor-pointer">
              Contact Us
            </li>
          </Link>
          <Link to="add_product">
            <li className="hover:text-[#DB980A] duration-300 cursor-pointer">Add Product</li>
          </Link>
        </ul>
      </div>

      {/* mobile navigation icon */}
      <div className="">
        <div className="flex pt-1 justify-between items-center md:hidden">
          <div onClick={toggleNav}>
            {nav ? (
              <FontAwesomeIcon icon={faClose} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}{" "}
            <span> MENU</span>
          </div>
          <Link to="/">
            <img src={logo} alt="" className="w-12 h-auto" />
          </Link>
          <div className="text-gray-800 space-x-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </div>
        </div>
      </div>

      {/* mobile navigation menu */}
      {/* <div className={ nav ? 'fixed md:hidden top-12 left-0  w-full h-[50%] z-10 ease-in duration-300 bg-white' : 'ease-out fixed md:hidden '}> */}
      <div
        className={
          nav
            ? "fixed md:hidden top-12 left-0  w-full h-[50%] z-10 ease-in duration-300 bg-white opacity-100"
            : "hidden"
        }
      >
        <div className="flex space-x-2 text-[10px] text-gray-500 items-center justify-center py-2 border-t">
          <FontAwesomeIcon icon={faPhone} />
          <p>+254 710 594179</p>
        </div>

        <ul className="flex flex-col p-3 space-y-4 justify-center text-xs border-b border-t">
          <Link to="/">
            <li className="hover:text-[#DB980A] duration-300 cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="books">
            <li className="hover:text-[#DB980A] duration-300 cursor-pointer">
              All Books
            </li>
          </Link>
          <Link to="gift">
            <li className="hover:text-[#DB980A] duration-300 cursor-pointer">
              Gift Card
            </li>
          </Link>
          <Link to="about">
            <li className="hover:text-[#DB980A] duration-300 cursor-pointer">
              About Us
            </li>
          </Link>
          <Link to="contact">
            <li className="hover:text-[#DB980A] duration-300 cursor-pointer">
              Contact Us
            </li>
          </Link>
        </ul>

        <div className="flex flex-col px-3 py-3 space-y-4 text-sm border-b">
          <div className="flex space-x-2 items-center">
            <Link to="/user">
              <FontAwesomeIcon icon={faUser} />
            </Link>{" "}
            <p className="text-xs">My Account</p>
          </div>
          <div className="flex space-x-2 items-center">
            <Link to="/wishlist">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <p className="text-xs">Wishlist</p>
          </div>
        </div>
        <div className="p-3 flex space-x-3 items-center justify-center">
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 p-3">
          <FontAwesomeIcon icon={faClock} />
          <p>Mon - Fri: 9am - 5pm | Sat 9am - 3pm</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
