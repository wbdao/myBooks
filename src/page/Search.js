import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "../component/Book";

const Search = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    const searchBook = async () => {
      try {
        const res = await BooksAPI.search(search, 30);
        setBooks(res);
      } catch (err) {
        console.log(err);
      }
    };
    search && searchBook();
  }, [search]);  
  return (
    <div>
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onKeyUp={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.error || search==="" ? (
            <h1>Not Results</h1>
          ) : (
            books &&
            books.map((book) => {
              const mybooks=JSON.stringify('myBooks')?JSON.parse(localStorage.getItem('myBooks')):[];
              const cuBook= mybooks[mybooks.findIndex((id)=>id.id===book.id)]
              if(cuBook){
                return <Book book={cuBook && cuBook} key={book && book.id}/>;
              }else{
                return <Book book={book && book} key={book && book.id}/>;

              }
            })
          )}
        </ol>
      </div>
    </div>
  );
};

export default Search;
