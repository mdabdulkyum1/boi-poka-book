import { useEffect, useState } from "react"
import Book from "../Book/Book";


function Books() {
    const [books, setBooks] = useState([]);

    useEffect(()=> {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    } ,[])
  return (
    <div className="my-11">
        <h1 className="text-4xl text-center">Books: {books.length} </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0 my-10">
            {
                books.map((book, idx) => <Book key={idx} book={book}></Book>)
            }
        </div>
    </div>
  )
}

export default Books