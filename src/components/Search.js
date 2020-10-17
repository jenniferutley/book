import React from 'react'
import { Link } from "react-router-dom"

export default function Search({ searchTerm, setSearchTerm, searchType, setSearchType }) {
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const searchIcon = <ion-icon name="search-sharp"></ion-icon>
  
  const handleSearchTypeChange = (e) => {
    console.log("you want to search thusly " + e.target.value)
    switch (e.target.value) {
      case "any":
        setSearchType("")
        break
      case "title":
        setSearchType("intitle:")
        break
      case "author":
        setSearchType("inauthor:")
        break
      case "subject":
        setSearchType("subject:")
        break
      case "isbn":
        setSearchType("isbn:")
        break
      default:
        setSearchType("")
    }
  }

  return (
    <div >
      <form className="search-bar">
        <select name="search-options" id="search-options" onChange={handleSearchTypeChange}>
          <option value="any">any</option>
          <option value="title">title</option>
          <option value="author">author</option>
          <option value="subject">subject</option>
          <option value="isbn">isbn</option>
        </select>
        <input type="text" onChange={handleSearchTermChange} value={searchTerm} />
        <Link to={process.env.PUBLIC_URL + '/results'}><button type="submit">{searchIcon}</button></Link>
      </form>
    </div>
  )
}