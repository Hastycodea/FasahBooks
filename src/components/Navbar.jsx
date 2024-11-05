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

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

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
        <div className="space-x-3 text-2xl text-gray-600 ">
          <Link to="/user">
            <FontAwesomeIcon
              className="hover:text-[#DB980A] duration-300"
              icon={faUser}
            />
          </Link>
          <Link to="/wishlist">
            <FontAwesomeIcon
              className="hover:text-[#DB980A] duration-300"
              icon={faHeart}
            />
          </Link>
          <Link to="/cart">
            <FontAwesomeIcon
              className="hover:text-[#DB980A] duration-300"
              icon={faCartShopping}
            />
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
