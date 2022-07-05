import React from 'react'
import Book from './Book'

const WantToRead = ({books}) => {
  return (
    <div className='bookshelf'>
    <div className='bookshelf-title'>
      <h2>Want To Reading</h2>
     
    </div>
    <ol className='books-grid'>
      {books && books.filter(book=>book.WTRead === true).map((book)=>{
        return <Book book={book} books={books} key={book.id}/>
      })}
    </ol>
  </div>
  )
}

export default WantToRead