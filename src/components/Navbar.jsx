import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="px-5 w-[100vw]  ">
      <div className="md:flex hidden justify-between items-center text-sm text-gray-600 border-b border-gray-200 py-3">
        <div className="flex space-x-3 items-center">
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faWhatsapp} />
          <FontAwesomeIcon icon={faClock} />
          <p>Mon - Fri: 9am - 5pm | Sat 9am - 3pm</p>
        </div>
        <div className="flex space-x-2 items-center">
          <FontAwesomeIcon icon={faPhone} />
          <p>+254 710 594179</p>
        </div>
      </div>
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center">
          <img src={logo} alt="" className="w-24 h-auto" />
          <div className="flex mx-5 pb-3  justify-between items-center border-b border-gray-200">
            <input
              type="text"
              placeholder="Product Search"
              className="p-1.5 outline-none"
            />
            <FontAwesomeIcon className="text-2xl" icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className="hidden md:flex space-x-3 text-2xl text-gray-600 ">
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
      <div className="hidden md:flex  items-center border-b text-sm">
        <div className="flex space-x-3 items-center p-3 bg-black text-white">
          <FontAwesomeIcon icon={faBars} />
          <p>Browse Categories</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <ul className="flex space-x-10 justify-center text-sm font- w-9/12">
          <li>Home</li>
          <li>All Books</li>
          <li>Gift Card</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
