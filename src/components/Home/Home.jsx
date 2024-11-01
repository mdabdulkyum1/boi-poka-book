import bookImg from '../../assets/books.jpg'
function Home() {
  return (
    <div className="hero bg-base-200 py-24 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bookImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-6xl font-bold">Books to freshen up <br /> your bookshelf</h1>
          <button className="btn btn-success text-white mt-12">View The List</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
