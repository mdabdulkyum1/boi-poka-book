import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Book({ book }) {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
  } = book;

  return (
    <Link to={`books/${bookId}`}>
      <div className="card bg-base-100 w-full sm:w-80 md:w-96 mx-auto shadow-xl border p-6">
        <figure className="px-10 py-9 bg-base-300 rounded-lg">
          <img src={image} alt={bookName} className="rounded-xl h-40 w-auto" />
        </figure>

        <div className="card-body items-start">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <button key={index} className="btn bg-green-50 text-green-600 text-sm">
                {tag}
              </button>
            ))}
          </div>

          <h2 className="card-title text-lg font-semibold">{bookName}</h2>
          <p className="text-gray-600">By: {author}</p>
          <div className="border-t border-dashed border-gray-400 w-full my-3"></div>
          <div className="w-full flex justify-between items-center">
            <p className="text-sm text-gray-500">{category}</p>
            <div className="flex items-center gap-2">
              <span className="text-lg">{rating}</span>
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

Book.propTypes = {
  book: PropTypes.shape({
    bookName: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Book;
