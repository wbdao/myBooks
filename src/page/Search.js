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
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.error ? (
            <h1>Not Found</h1>
          ) : (
            books &&
            books.map((book) => {
              return <Book book={book && book} key={book && book.id} />;
            })
          )}
        </ol>
      </div>
    </div>
  );
};

export default Search;
