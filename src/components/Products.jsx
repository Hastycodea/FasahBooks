import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [fiction, setFiction] = useState([]);
  const [nonFiction, setNonFiction] = useState([])

  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/book/${id}`)
  }

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
          `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${import.meta.env.VITE_BOOKS_API}`
      );
      setFiction(res.data.results.books);
      // console.log(res.data.results.books);
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    const fetchNonFiction = async () => {
      const results = await axios.get(
          `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=${import.meta.env.VITE_BOOKS_API}`
      );
      setNonFiction(results.data.results.books);
      // console.log(res.data.results.books);
    };
    fetchNonFiction();
  }, []);

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
    <div className="w-[100%]">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 px-6">
        {books.map((book) => (
          // eslint-disable-next-line react/jsx-key
          <div className="flex flex-col group relative">
            <img
              src={book.image}
              alt=""
              className="h-[280px] w-[100%] object-contain hover:scale-95 duration-300 ease-out"
              onClick={() => handleViewDetails(book.id)}
            />
            <div className="hidden md:group-hover:flex absolute  flex-col space-y-[130px]  md:px-5  md:py-3 top-0 right-0 my-3 md:my:0">
              <div className="flex flex-col space-y-2">
                <FontAwesomeIcon
                  className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600"
                  icon={faHeart}
                />
                <FontAwesomeIcon
                  className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600"
                  icon={faEye}
                />
              </div>
              <FontAwesomeIcon
                className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600 "
                icon={faCartShopping}
              />
            </div>
            <p className="text-sm text-gray-500">{book.name}</p>
            <p className="text-sm text-gray-500">{book.price}</p>
            <div className="flex md:hidden items-center justify-between mx-auto space-x-2 ">
              <FontAwesomeIcon
                className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600"
                icon={faHeart}
              />
              <FontAwesomeIcon
                className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600 "
                icon={faCartShopping}
              />
            </div>
          </div>
        ))}


        {books.map((book) => (
          // eslint-disable-next-line react/jsx-key
          <div className="flex flex-col group relative">
            <img
              src={book.image}
              alt=""
              className="h-[280px] w-[100%] object-contain hover:scale-95 duration-300 ease-out"
            />
            <div className="hidden md:group-hover:flex absolute  flex-col space-y-[130px]  md:px-5  md:py-3 top-0 right-0 my-3 md:my:0">
              <div className="flex flex-col space-y-2">
                <FontAwesomeIcon
                  className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600"
                  icon={faHeart}
                />
                <FontAwesomeIcon
                  className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600"
                  icon={faEye}
                />
              </div>
              <FontAwesomeIcon
                className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600 "
                icon={faCartShopping}
              />
            </div>
            <p className="text-sm text-gray-500">{book.name}</p>
            <p className="text-sm text-gray-500">{book.price}</p>
          </div>
        ))}
      </div>
      <div className="flex  items-center justify-center my-10 ">
        <span className="flex-grow h-px bg-gray-300"></span>
        <p className="text-xl px-4">Best Selling Books</p>
        <span className="flex-grow h-px bg-gray-300"></span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 px-6">
        {books.map((book) => (
          // eslint-disable-next-line react/jsx-key
          <div className="flex flex-col group relative">
            <img
              src={book.image}
              alt=""
              className="h-[280px] w-[100%] object-contain hover:scale-95 duration-300 ease-out"
            />
            <div className="hidden md:group-hover:flex absolute  flex-col space-y-[130px]  md:px-5  md:py-3 top-0 right-0 my-3 md:my:0">
              <div className="flex flex-col space-y-2">
                <FontAwesomeIcon
                  className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600"
                  icon={faHeart}
                />
                <FontAwesomeIcon
                  className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600"
                  icon={faEye}
                />
              </div>
              <FontAwesomeIcon
                className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600 "
                icon={faCartShopping}
              />
            </div>
            <p className="text-sm text-gray-500">{book.name}</p>
            <p className="text-sm text-gray-500">{book.price}</p>
          </div>
        ))}
      </div>


      <div className="flex  items-center justify-center my-10 ">
        <span className="flex-grow h-px bg-gray-300"></span>
        <p className="text-xl px-4">Fiction Books</p>
        <span className="flex-grow h-px bg-gray-300"></span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 px-6">
        {fiction.slice(0, 12).map((book) => (
          // eslint-disable-next-line react/jsx-key
          <div className="flex flex-col group relative">
            <img
              src={book.book_image}
              alt=""
              className="h-[280px] w-[100%] object-contain hover:scale-95 duration-300 ease-out"
            />
            <div className="hidden md:group-hover:flex absolute  flex-col space-y-[130px]  md:px-5  md:py-3 top-0 right-0 my-3 md:my:0">
              <div className="flex flex-col space-y-2">
                <FontAwesomeIcon
                  className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600"
                  icon={faHeart}
                />
                <FontAwesomeIcon
                  className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600"
                  icon={faEye}
                />
              </div>
              <FontAwesomeIcon
                className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600 "
                icon={faCartShopping}
              />
            </div>
            <p className="text-sm text-gray-500">{book.title}</p>
            <p className="text-sm text-gray-500">{book.price}</p>
          </div>
        ))}
      </div>



      <div className="flex  items-center justify-center my-10 ">
        <span className="flex-grow h-px bg-gray-300"></span>
        <p className="text-xl px-4">Non Fiction Books</p>
        <span className="flex-grow h-px bg-gray-300"></span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 px-6">
        {nonFiction.slice(0, 12).map((book) => (
          // eslint-disable-next-line react/jsx-key
          <div className="flex flex-col group relative">
            <img
              src={book.book_image}
              alt=""
              className="h-[280px] w-[100%] object-contain hover:scale-95 duration-300 ease-out"
            />
            <div className="hidden md:group-hover:flex absolute  flex-col space-y-[130px]  md:px-5  md:py-3 top-0 right-0 my-3 md:my:0">
              <div className="flex flex-col space-y-2">
                <FontAwesomeIcon
                  className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600"
                  icon={faHeart}
                />
                <FontAwesomeIcon
                  className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600"
                  icon={faEye}
                />
              </div>
              <FontAwesomeIcon
                className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600 "
                icon={faCartShopping}
              />
            </div>
            <p className="text-sm text-gray-500">{book.title}</p>
            <p className="text-sm text-gray-500">{book.price}</p>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Products;
