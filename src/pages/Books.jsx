import React from "react";
import Products from "../components/Products";
import TopBooks from "../components/TopBooks";

const Books = () => {
  return (
    <div className="mt-5 px-0 md:px-5">
      <h1 className="text-4xl font-medium my-5 md:block hidden">All Books</h1>
      {/* <Products /> */}
      <TopBooks />
    </div>
  );
};

export default Books;
