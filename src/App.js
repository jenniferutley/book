import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Main from "./Main"
import Home from "./components/Home"
import Results from "./components/Results"
import BookDetails from "./components/BookDetails"

function App() {
  return (
    <BrowserRouter>
      <Main />
      {/* <Route path={process.env.PUBLIC_URL + '/details/:id'} component={BookDetails} /> */}
    </BrowserRouter>
  );
}

export default App;