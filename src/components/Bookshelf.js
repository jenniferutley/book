import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

export default function Bookshelf({ bookshelf }) {
  const [bookshelfBooks, setBookshelfBooks] = useState([])
  
  useEffect(() => {
    axios.get("https://www.googleapis.com/books/v1/users/111309485386799978367/bookshelves/" + bookshelf + "/volumes?")
      .then(res => {
        setBookshelfBooks(res.data.items)
        console.log(res.data.items)            
      })
      .catch((err) => {
        console.log(err)
      })
  }, [bookshelf])

  return (
    <div className="Results">
      {bookshelfBooks ?
        <div className="book-container">
          {bookshelfBooks.map((book, index) =>
            <Link className="book-link" to={process.env.PUBLIC_URL + '/details/' + book.id} key={index}>
              <div className="book-card">
                {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail} alt="cover" /> : ""}
                <p className="book-title">{book.volumeInfo.title}</p>
                <p className="book-author">{book.volumeInfo.authors ? "by " + book.volumeInfo.authors[0] : ""}</p>                
                <span className="book-published">{book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate.substring(0, 4) : ""}</span>
                <span className="book-pages">{book.volumeInfo.pageCount ?  " / " + book.volumeInfo.pageCount + " pages" : ""} </span>                
              </div>
            </Link>
          )}
        </div> : <p className="no-results">No results.</p>}
    </div>
  )
}


