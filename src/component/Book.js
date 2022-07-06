import React, { useState } from "react";

const Book = ({ book, books }) => {
  const [open, setOpen] = useState(false);
  const imgNotFound='https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'
  const handleChange = (e) => {
    const mybook = book;
    if (e.target.value === "currentlyReading") {
      console.log("Current Read");
      mybook.cuRead = true;
      mybook.WTRead = false;
      mybook.read = false;
      mybook.none=false;
    } else if (e.target.value === "wantToRead") {
      console.log("want to read");
      mybook.cuRead = false;
      mybook.WTRead = true;
      mybook.read = false;
      mybook.none=false;
    } else if (e.target.value === "read") {
      console.log("Read");
      mybook.cuRead = false;
      mybook.WTRead = false;
      mybook.read = true;
      mybook.none=false;
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
        alert("the booke transform to "+e.target.value+" shelf");
        additem[id]=mybook;
        localStorage.setItem("myBooks", JSON.stringify(additem));
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
              backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : imgNotFound})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={handleChange}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="none" >
              {book.cuRead || book.WTRead || book.read  ? " " : "✔"}None
              </option>
              <option value="currentlyReading" name="currentlyReading" >
                {book.cuRead ? "✔" : " "}Currently Reading
              </option>
              <option value="wantToRead" name="wantToRead"  >
                {book.WTRead ? "✔" : " "}Want to Read
              </option>
              <option value="read" name="read" >
                {book.read ? "✔" : " "}
                Read
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
