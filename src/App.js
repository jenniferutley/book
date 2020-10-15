import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Search from "./components/Search"
import BookDetails from "./components/BookDetails"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Route path={process.env.PUBLIC_URL + '/search'} component={Search} />
      <Route path={process.env.PUBLIC_URL + '/details/:id'} component={BookDetails} />
    </BrowserRouter>
  );
}

export default App;
