import bookImg from "../../assets/books.jpg";
import Books from "../Books/Books";
function Home() {
  return (
    <>
      <section className="hero bg-base-200 py-24 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bookImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-6xl font-bold">
              Books to freshen up <br /> your bookshelf
            </h1>
            <button className="btn btn-success text-white mt-12">
              View The List
            </button>
          </div>
        </div>
      </section>
    <Books></Books>
    </>
  );
}

export default Home;
