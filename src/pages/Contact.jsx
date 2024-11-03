import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="md:px-5 px-0  w-full">
      <h1 className="text-4xl font-medium my-5 md:block hidden">Contact Us</h1>
      <div className="flex border-b border-t py-5 text-gray-500 md:text-lg text-xs md:px-0 px-6  mx-auto  font-light">
        <form action="" className="flex flex-col shadow-md w-[60%] p-3 space-y-1 rounded">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" className="bg-gray-100 p-[10px] rounded-[10px] outline-none " />
            <label>Email</label>
            <input type="email" placeholder="Enter your email" className="bg-gray-100 p-[10px] rounded-[10px] outline-none "/>
            <label>Phone number</label>
            <input type="phone" placeholder="Enter you phone number" className="bg-gray-100 p-[10px] rounded-[10px] outline-none "/>
            <label>Subject</label>
            <input type="text" placeholder="Enter your message" className="bg-gray-100 p-[10px] rounded-[10px] outline-none "/>
            <label>Message</label>
            <textarea name="message" id="" className="bg-gray-100 p-[10px] rounded-[10px] outline-none "></textarea>
        </form>
        <div className="flex flex-col  items-center justify-center   py-5 text-gray-500 md:text-lg text-xs md:px-0 px-6  mx-auto  font-light">
          <p className="flex md:text-center ">
            <FontAwesomeIcon icon={faLocationPin} className="mr-2" />
            Prudential Building, Ground Floor. Mama Ngina St, Next to Imax.
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            books@prestigebookshop.com
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +254 710 594179
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
