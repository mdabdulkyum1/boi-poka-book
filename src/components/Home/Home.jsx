import bookImg from "../../assets/books.jpg";
import Books from "../Books/Books";
function Home() {
  return (
    <>
   <section className="hero bg-base-200 py-12 md:py-24 rounded-2xl">
  <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start">
    <img 
      src={bookImg} 
      alt="Bookshelf" 
      className="max-w-full h-auto rounded-lg shadow-2xl lg:max-w-sm" 
    />
    <div className="text-center lg:text-left lg:pl-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        Books to freshen up <br /> your bookshelf
      </h1>
      <button className="btn btn-success text-white mt-6 md:mt-8 lg:mt-12">
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
