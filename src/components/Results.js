import React, {useState, useEffect} from 'react'
import axios from "axios"

export default function Results({ searchTerm, setSearchTerm, searchType }) {
  const [books, setBooks] = useState([])
  
  useEffect(() => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + searchType + "&maxResults=12")
        .then(res => {
          setBooks(res.data.items)
          console.log(res.data.items)
          
        })
        .catch((err) => {
          console.log(err)
        })
      // setSearchTerm("")      
    }, [searchTerm, setSearchTerm, searchType])


  console.log("RESULTS HERE!")
  console.log(books)
  console.log(searchTerm)
  return (
    <div className="Results">
      <div className="book-container">
        {books.map((book, index) =>
          <div key={index} className="Book">            
              {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail.replace("&zoom=1", "&zoom=2")} alt="cover" /> : ""}
              <p>{book.volumeInfo.title}</p>
              <p>{book.volumeInfo.authors ? book.volumeInfo.authors.map((author, index) => <span key={index} className="author-span">{author}</span>) : ""}</p>
              <p>{book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate.substring(0, 4) : ""}</p>
              <p>{book.volumeInfo.pageCount ? book.volumeInfo.pageCount + " pages" : ""} </p>            
          </div>
        )}
      </div>
    </div>
  )
}


