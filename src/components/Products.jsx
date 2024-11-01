import React from "react";

const Products = () => {
  const books = [
    {
      id: 1,
      image: "/a.jpg",
      name: "How to Influence People",
      price: "KES 2,500",
    },
    {
      id: 2,
      image: "/b.jpg",
      name: "The Power of Habit",
      price: "KES 2,800",
    },
    {
      id: 3,
      image: "/c.jpg",
      name: "Atomic Habits",
      price: "KES 3,000",
    },
    {
      id: 4,
      image: "/d.jpg",
      name: "Think and Grow Rich",
      price: "KES 2,700",
    },

    {
      id: 6,
      image: "/f.jpeg",
      name: "The Art of War",
      price: "KES 1,500",
    },
    {
      id: 7,
      image: "/g.jpg",
      name: "Start With Why",
      price: "KES 3,200",
    },
  ];

  return (
    <div className="w-[100%]" >
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 px-6">
        {books.map((book) => (
          // eslint-disable-next-line react/jsx-key
          <div className="flex flex-col">
            <img
              src={book.image}
              alt=""
              className="h-[280px] w-[100%] object-contain"
            />
            <p className="text-sm text-gray-500">{book.name}</p>
            <p className="text-sm text-gray-500">{book.price}</p>
          </div>
        ))}
        {books.map((book) => (
          // eslint-disable-next-line react/jsx-key
          <div className="flex flex-col">
            <img
              src={book.image}
              alt=""
              className="h-[280px] w-[100%] object-contain"
            />
            <p className="text-sm text-gray-500">{book.name}</p>
            <p className="text-sm text-gray-500">{book.price}</p>
          </div>
        ))}
      </div>
      <div className="flex  items-center justify-center my-10 ">
        <span className="flex-grow h-px bg-gray-300"></span>
        <p className="text-xl px-4">
          Best Selling Books
        </p>
        <span className="flex-grow h-px bg-gray-300"></span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 px-6">
        {books.map((book) => (
          // eslint-disable-next-line react/jsx-key
          <div className="flex flex-col">
            <img
              src={book.image}
              alt=""
              className="h-[280px] w-[100%] object-contain"
            />
            <p className="text-sm text-gray-500">{book.name}</p>
            <p className="text-sm text-gray-500">{book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
