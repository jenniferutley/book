import React, { useState } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Search from "./components/Search"
import Results from "./components/Results"
import BookDetails from "./components/BookDetails"

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchType, setSearchType] = useState("")


  return (
    <BrowserRouter>
      <nav>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchType={searchType} setSearchType={setSearchType} />
        <span className="le-catalogue">le catalogue</span>
        
          <Link className="nav-link" to={process.env.PUBLIC_URL + '/'} >HOME</Link>
          <Link className="nav-link" to={process.env.PUBLIC_URL + '/about'} >ABOUT</Link>
        
      </nav>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
      <Route exact path={process.env.PUBLIC_URL + '/about'} component={About} />
      <Route exact path={process.env.PUBLIC_URL + '/results'} render={() => (<Results searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchType={searchType} />)} />
      <Route path={process.env.PUBLIC_URL + '/details/:id'} component={BookDetails} />


    </BrowserRouter>
  );
}

export default App;