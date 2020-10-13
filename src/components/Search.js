import React, { useState } from 'react'
import Book from "./Book"
import axios from "axios"

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("")
  const [books, setBooks] = useState([])

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm)
      .then(res => {
        setBooks(res.data.items)
        // console.log(res.data.items)
      })
      .catch((err) => {
        console.log(err)
      })
      setSearchTerm("")
  }

  return (
    <div>
      <h1>I am search.</h1>
      <form onSubmit={handleOnSubmit}>
        <input type="text" onChange={handleSearchTermChange} /><input type="submit" value="search" />
      </form>
      <div className="book-container">{books.length > 0 && books.map((book) => <Book key={book.etag} {...book} />)}</div>
      
    </div>
  )
}