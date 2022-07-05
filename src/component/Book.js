import React, { useState } from "react";

const Book = ({ book, books }) => {
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const mybook = book;
    if (e.target.value === "currentlyReading") {
      console.log("Current Read");
      mybook.cuRead = true;
      mybook.WTRead = false;
      mybook.read = false;
    } else if (e.target.value === "wantToRead") {
      console.log("want to read");
      mybook.cuRead = false;
      mybook.WTRead = true;
      mybook.read = false;
    } else if (e.target.value === "read") {
      console.log("Read");
      mybook.cuRead = false;
      mybook.WTRead = false;
      mybook.read = true;
    } else {
      console.log("wrong");
    }
    setOpen(!open);
    if (books) {
      let id = books.findIndex((id) => id.id === book.id);
      books[id] = mybook;
      localStorage.setItem("myBooks", JSON.stringify(books));
      document.location.reload(true);
    } else {
      let additem = localStorage.getItem("myBooks")
        ? JSON.parse(localStorage.getItem("myBooks"))
        : [];
      let id = additem.findIndex((id) => id.id === book.id);
      if (additem[id] && additem[id].id === book.id) {
        alert("Choose other!");
      } else {
        additem.push(mybook);
        localStorage.setItem("myBooks", JSON.stringify(additem));
      }
    }
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book && book.imageLinks.smallThumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={handleChange}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="none" selected={false}>
                None
              </option>
              <option value="currentlyReading" selected={book.cuRead}>
                {book.cuRead ? "✔" : " "}Currently Reading
              </option>
              <option value="wantToRead" selected={book.WTRead}>
                {book.WTRead ? "✔" : " "}Want to Read
              </option>
              <option value="read" selected={book.read}>
                {book.read ? "✔" : " "}Read
              </option>
            </select>
          </div>
        </div>
        <div className="book-title">{book && book.title}</div>
        <div className="book-authors">{book && book.authors}</div>
      </div>
    </li>
  );
};

export default Book;
