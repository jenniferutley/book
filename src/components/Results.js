import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

export default function Results({ searchTerm, setSearchTerm, searchType }) {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchType + searchTerm + "&maxResults=15")
      .then(res => {
        setBooks(res.data.items)
        console.log(res.data.items)
        console.log("https://www.googleapis.com/books/v1/volumes?q=" + searchType + searchTerm + "&maxResults=15")              
      })
      .catch((err) => {
        console.log(err)
      })
  }, [searchTerm, setSearchTerm, searchType])

  return (
    <div className="Results">
      {books ?
        <div className="book-container">
          {books.map((book, index) =>
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


