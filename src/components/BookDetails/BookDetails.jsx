import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();

  const { bookId } = useParams();
  const id = parseInt(bookId);

  const book = books.find((book) => book.bookId === id);

  if(!book){
    return <><h1>Page Not found hello</h1></>
  }

  const {
    bookId: bId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing
  } = book;

  return (
    <div className="flex flex-col md:flex-row p-8 bg-gray-100 rounded-lg shadow-md">
      <div className="md:w-1/3 mb-4 md:mb-0">
        <img
          src={image}
          alt="Book cover of 'The Catcher in the Rye'"
          className="shadow-lg rounded-lg w-full"
        />
      </div>
      <div className="md:w-2/3 md:pl-8">
        <h1 className="text-3xl font-bold">{bookName}</h1>
        <p className="text-lg mt-2">By: {author}</p>
        <p className="text-lg mt-2 border-t border-b border-gray-400 py-2">
          {category}:
        </p>

        <div className="mt-4">
          <p className="font-bold">Review:</p>
          <p className="mt-2 text-gray-700">{review}</p>
        </div>

        <div className="mt-4">
          <p className="font-bold">Tags:</p>
          <div className="mt-2 flex">
            {tags.map((t,idx) => (
              <span key={idx} className="flex gap-2 bg-green-200 text-green-800 text-sm px-2 py-1 rounded-full mr-2">
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Book details presented in a table layout */}
        <div className="mt-4 w-full lg:w-2/4 ">
          <table className="min-w-full bg-gray-100 border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 border-b border-gray-300">
                <th className="text-left p-4 font-bold text-gray-800">
                  Detail
                </th>
                <th className="text-left p-4 font-bold text-gray-800">Info</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="p-4 font-bold text-gray-800 text-left">
                  Number of Pages:
                </td>
                <td className="p-4 text-gray-700 text-left">{totalPages}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-4 font-bold text-gray-800 text-left">
                  Publisher:
                </td>
                <td className="p-4 text-gray-700 text-left">
                  {publisher}
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-4 font-bold text-gray-800 text-left">
                  Year of Publishing:
                </td>
                <td className="p-4 text-gray-700 text-left">{yearOfPublishing}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-4 font-bold text-gray-800 text-left">
                  Rating:
                </td>
                <td className="p-4 text-gray-700 text-left">{rating}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-col md:flex-row">
          <button className="bg-black text-white px-4 py-2 rounded mr-2 mb-2 md:mb-0">
            Read
          </button>
          <button className="bg-teal-500 text-white px-4 py-2 rounded">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
