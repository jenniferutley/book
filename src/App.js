import React, { useState } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import Search from "./components/Search"
import Results from "./components/Results"
import BookDetails from "./components/BookDetails"

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchType, setSearchType] = useState("")
  

  return (
    <BrowserRouter>
      <nav>
        <h1>Hello, I am nav</h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchType={searchType} setSearchType={setSearchType}/>
        <Link to={process.env.PUBLIC_URL + '/'} >Home</Link>
      </nav>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
      <Route exact path={process.env.PUBLIC_URL + '/results'} render={() => (<Results searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchType={searchType}/>)} />
      <Route path={process.env.PUBLIC_URL + '/details/:id'} component={BookDetails} />
      

    </BrowserRouter>
  );
}

export default App;