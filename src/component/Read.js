import React from 'react'
import Book from './Book'

const Read = ({books}) => {
  return (
    <div className='bookshelf'>
      <div className='bookshelf-title'>
        <h2>Read</h2>
       
      </div>
      <ol className='books-grid'>
        {books && books.filter(book=>book.read === true).map((book)=>{
          return <Book book={book} books={books} key={book.id}/>
        })}
      </ol>
    </div>
  )
}

export default Read