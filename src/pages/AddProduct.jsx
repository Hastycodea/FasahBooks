import axios from "axios";
import React, { useState } from "react";


// Make sure to be specific on OnChange and OnSumbit
// And for the backend ensure you return the updated item, not the parameter
const AddProduct = () => {
  const [book, setBook] = useState({
    bookName: "",
    bookPrice: "",
    bookDescription: "",
  });
  const [image, setImage] = useState(null);

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  // handle image change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageFile", image);
    formData.append(
      "book",
      new Blob([JSON.stringify(book)], { type: "application/json" })
    );

    axios
      .post("http://localhost:3030/books", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("Book added successfully");
      })
      .catch((error) => {
        console.log("Book not added", error);
        console.log("Payload", formData)
        alert("Error adding product");
      });
  };

  return (
    <div className="p-4 ">
      <h1 className="uppercase text-2xl flex justify-center text-gray-500 mb-3">
        Add a new book
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" space-y-4 p-2 text-gray-600 shadow-md"
      >
        <div className="flex md:flex-row flex-col items-center">
          <label className=" md:text-right w-11/12 md:w-1/3">Book Name</label>
          <input
            type="text"
            name="bookName"
            value={book.bookName}
            onChange={handleInputChange}
            placeholder="Enter book's name"
            className="p-2 outline-none shadow-sm bg-gray-100 rounded-sm cols-span-2 md:ml-2 w-11/12 md:w-1/3"
          />
        </div>
        <div className="flex md:flex-row flex-col items-center">
          <label className=" md:text-right w-11/12 md:w-1/3">Book Price</label>
          <input
            type="number"
            name="bookPrice"
            value={book.bookPrice}
            onChange={handleInputChange}
            placeholder="Enter book's price"
            className="p-2 outline-none shadow-sm bg-gray-100 rounded-sm cols-span-2 md:ml-2 w-11/12 md:w-1/3"
          />
        </div>
        <div className="flex md:flex-row flex-col items-center">
          <label className=" md:text-right w-11/12 md:w-1/3">
            Book Description
          </label>
          <input
            type="text"
            name="bookDescription"
            value={book.bookDescription}
            onChange={handleInputChange}
            placeholder="Enter book's description"
            className="p-2 outline-none shadow-sm bg-gray-100 rounded-sm cols-span-2 md:ml-2 w-11/12 md:w-1/3"
          />
        </div>
        <div className="flex md:flex-row flex-col items-center">
          <label className="md:text-right w-11/12 md:w-1/3">Book Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            placeholder="Enter book's price"
            className="p-2 outline-none shadow-sm bg-gray-100 rounded-sm cols-span-2 md:ml-2 w-11/12 md:w-1/3"
          />
        </div>
        <div className="flex md:flex-row flex-col items-center">
          <label className="text-right w-11/12 md:w-1/3"></label>
          <button type="submit" className="bg-blue-600 text-white rounded-lg p-2  flex justify-center w-11/12 md:w-1/3 ml-2 mb-3">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
