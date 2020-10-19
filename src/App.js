import React, { useState } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import Bookshelf from "./components/Bookshelf"
import Search from "./components/Search"
import Results from "./components/Results"
import BookDetails from "./components/BookDetails"

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchType, setSearchType] = useState("")
  const [bookshelf, setBookshelf] = useState("")

  return (
    <BrowserRouter>
      <nav>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchType={searchType} setSearchType={setSearchType} />
        <Link className="le-catalogue" to={process.env.PUBLIC_URL + '/'} >le catalogue</Link>
        <Link className="nav-link" to={process.env.PUBLIC_URL + '/'} >HOME</Link>
      </nav>
      <Route exact path={process.env.PUBLIC_URL + '/'} render={() => (<Home bookshelf={bookshelf} setBookshelf={setBookshelf} />)} />
      <Route exact path={process.env.PUBLIC_URL + '/results'} render={() => (<Results searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchType={searchType} />)} />
      <Route path={process.env.PUBLIC_URL + '/details/:id'} component={BookDetails} />
      <Route exact path={process.env.PUBLIC_URL + '/bookshelf'} render={() => (<Bookshelf bookshelf={bookshelf} />)} />
    </BrowserRouter>
  );
}

export default App;