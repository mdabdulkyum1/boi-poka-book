import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Book({ book }) {
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
        <Link to="/listed-books">
              <div className="card bg-base-100 w-96 mx-auto  shadow-xl border p-6">
      <figure className="px-10 py-9 bg-base-300 rounded-lg">
        <img src={image} alt={bookName} className="rounded-xl h-[160px]" />
      </figure>

      <div className="card-body items-start">
        <div className="flex gap-2">
            {
                tags.map(t => <button className="btn bg-green-50 text-green-600">{t}</button>)
            }
        </div>

        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <div className="border-t border-dashed border-gray-400 w-full my-3"></div>
        <div className="w-full flex justify-between items-center">
          <p>{category}</p>
          <div className="flex items-center gap-2">
            <span className="text-xl">{rating}</span>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
        </Link>
  );
}

Book.propTypes = {};

export default Book;
