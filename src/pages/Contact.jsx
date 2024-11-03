import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="md:px-5 px-0  w-full md:mt-0 mt-3">
      <h1 className="text-4xl font-medium my-5 md:block hidden">Contact Us</h1>
      <div className="flex md:flex-row flex-col border-b border-t py-5 text-gray-500 md:text-lg text-xs md:px-0 px-6  mx-auto  font-light">
        <form
          action=""
          className="flex flex-col shadow-md w-full md:w-[40%] p-3  rounded-lg md:mb-0 mb-6"
        >
      <p className="text-sm mb-3">
        Looking for a specific title, book recommendations, or just want to chat
        about books? Reach out! 📚
      </p>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-gray-100 p-[10px] rounded-[10px] outline-none mb-5 "
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-100 p-[10px] rounded-[10px] outline-none mb-5"
          />
          <label>Phone number</label>
          <input
            type="phone"
            placeholder="Enter you phone number"
            className="bg-gray-100 p-[10px] rounded-[10px] outline-none mb-5"
          />
          <label>Subject</label>
          <input
            type="text"
            placeholder="Enter your message"
            className="bg-gray-100 p-[10px] rounded-[10px] outline-none mb-5"
          />
          <label>Message</label>
          <textarea
            name="message"
            id=""
            className="bg-gray-100 p-[10px] rounded-[10px] outline-none "
          ></textarea>
        </form>
        <div className="flex flex-col  items-center justify-center   py-5 text-gray-500 md:text-lg text-xs md:px-0 px-6  mx-auto  font-light w-full md:w-[55%] shadow-md p-2 rounded-[10px] text-center">
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
          <iframe loading="lazy" allowfullscreen className="w-full h-full mt-4" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Juja%20High%20Point&zoom=10&maptype=roadmap"></iframe>

        </div>
      </div>
    </div>
  );
};

export default Contact;
