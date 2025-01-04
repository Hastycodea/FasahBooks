import React from "react";

const AddProduct = () => {
  return (
    <div className="p-4 ">
        <h1 className="uppercase text-2xl flex justify-center text-gray-500 mb-3">Add a new book</h1>
      <form action="" className=" space-y-4 p-2 text-gray-600 shadow-md">
        <div className="flex md:flex-row flex-col items-center">
          <label className=" md:text-right w-11/12 md:w-1/3">Book Name</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter book's name"
            className="p-2 outline-none shadow-sm bg-gray-100 rounded-sm cols-span-2 md:ml-2 w-11/12 md:w-1/3"
          />
        </div>
        <div className="flex md:flex-row flex-col items-center">
          <label className=" md:text-right w-11/12 md:w-1/3">Book Name</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter book's name"
            className="p-2 outline-none shadow-sm bg-gray-100 rounded-sm cols-span-2 md:ml-2 w-11/12 md:w-1/3"
          />
        </div>
        <div className="flex md:flex-row flex-col items-center">
          <label className="md:text-right w-11/12 md:w-1/3">Book Image</label>
          <input
            type="file"
            name=""
            id=""
            placeholder="Enter book's price"
            className="p-2 outline-none shadow-sm bg-gray-100 rounded-sm cols-span-2 md:ml-2 w-11/12 md:w-1/3"
             
          />
        </div>
        <div className="flex md:flex-row flex-col items-center">
          <label className="text-right w-11/12 md:w-1/3"></label>
          <button className="bg-blue-600 text-white rounded-lg p-2  flex justify-center w-11/12 md:w-1/3 ml-2 mb-3">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
