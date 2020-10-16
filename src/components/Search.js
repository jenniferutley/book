import React, { useState } from 'react'
import Book from "./Book"
import axios from "axios"

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchType, setSearchType] = useState("")
  const [books, setBooks] = useState([])

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSearchTypeChange = (e) => {
    console.log("you want to search thusly " + e.target.value)
    switch (e.target.value) {
      case "any":
        setSearchType("")
        break
      case "title":
        setSearchType("+intitle")
        break
      case "author":
        setSearchType("+inauthor")
        break
      case "subject":
        setSearchType("+subject")
        break
      case "isbn":
        setSearchType("+isbn")
        break
      default:
        setSearchType("")
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (searchTerm === "") {
      alert("Please enter a search term.")
    }
    else {
      axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + searchType + "&maxResults=12")
        .then(res => {
          setBooks(res.data.items)
          console.log(res.data.items)
        })
        .catch((err) => {
          console.log(err)
        })
      setSearchTerm("")
    }
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <select name="search-options" id="search-options" onChange={handleSearchTypeChange}>
          <option value="any">any</option>
          <option value="title">title</option>
          <option value="author">author</option>
          <option value="subject">subject</option>
          <option value="isbn">isbn</option>
        </select>
        <input type="text" onChange={handleSearchTermChange} value={searchTerm} /><input type="submit" value="search" />
      </form>

      {books === undefined && <div><p>No results.</p></div>}
      {books && <div className="book-container">{books.map((book) => <Book key={book.etag} {...book} />)}</div>}
      
    </div>
  )
}