import React from "react";
import CurrentlyReading from "../component/CurrentlyReading";
import WantToRead from "../component/WantToRead";
import Read from "../component/Read";
import Add from '../icons/add.svg'
import { Link } from "react-router-dom";

const Home = () => {
  let mybooks=JSON.stringify('myBooks')?JSON.parse(localStorage.getItem('myBooks')):[];
  return (
    <div>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <CurrentlyReading books={mybooks}/>
          <WantToRead books={mybooks}/>
          <Read books={mybooks}/>
        </div>
      <div className="open-search">
        <Link to="/search">
          <img src={Add} alt="ADD"/>
        </Link>
      </div>
    </div>
  );
};

export default Home;
