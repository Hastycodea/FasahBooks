import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const SingleBook = () => {
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

  const { name } = useParams();
  const book = books.find((book) => book.name === name);

  const dispatch = useDispatch()

  const handleAddToCart = (book) => {
    dispatch(addToCart(book))
  }

  return (
    <div className="md:flex justify-between md:w-[80%] mx-auto my-11">
      <div className="md:flex gap-8">
        <img src={book.image} alt="" className="mx-auto md:mx-0 mb-4 md:mb-0" />
        <div className="w-[95%] md:w-[100%] mx-auto md:mx-0">
          <p>{book.name}</p>
          <p className="text-3xl my-4">{book.price}</p>
          <p className="font-light text-gray-500 mb-4 md:w-[450px] leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            adipisci ratione voluptas. Porro voluptate rem quisquam, soluta quo
            sequi blanditiis quibusdam nemo ad nesciunt molestias provident
            exercitationem voluptatibus quaerat est nostrum ab! Ipsa dolores
            sint eos ipsam quibusdam veniam dolorem, voluptatibus perferendis
            vitae modi ullam! Inventore saepe eveniet veritatis quisquam rerum
            voluptate, odit, error iste unde velit mollitia deleniti provident!
          </p>
          <button onClick={() => handleAddToCart(book)} className="btn bg-black text-white py-3 px-10 w-[100%] hover:bg-blue-500 hover:text-white duration-300 transition-all ">
            + Add to Cart
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <p>Basket</p>
        <p className="font-light text-gray-500">No products in the Cart</p>
      </div>
    </div>
  );
};

export default SingleBook;
