import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div>
      <h1 className="text-4xl font-medium my-5 md:block hidden">Contact Us</h1>
      <div className="flex flex-col items-center justify-center border-b border-t py-5 text-gray-500 md:text-lg text-xs md:px-0 px-6  mx-auto text-center font-light">
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
  );
};

export default Contact;
