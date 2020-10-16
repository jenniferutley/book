import React, { useState } from 'react'
import Search from "./components/Search"
import Home from "./components/Home"
import Results from "./components/Results"

function Main() {
  const [showHome, setShowHome] = useState(true)
  const [showDetails, setShowDetails] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchType, setSearchType] = useState("")
  const [books, setBooks] = useState([])

  const handleShowHome = () => {
    setShowHome(true)
  }  

  return (
    <div>
      <nav>
       <Search showHome={showHome} setShowHome={setShowHome} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchType={searchType} setSearchType={setSearchType} books={books} setBooks={setBooks} />
       <span onClick={handleShowHome}>Home</span>
      </nav>
      {!showHome ? <Results books={books} /> : <Home showDetails={showDetails} setShowDetails={setShowDetails}/>}
    </div>
  );
}

export default Main;
