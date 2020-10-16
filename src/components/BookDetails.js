import React, { useState, useEffect } from 'react'
import axios from "axios"

export default function BookDetails() {
  const [details, setDetails] = useState([])

  const volumeId = window.location.href.split("/").pop()  

  useEffect(() => {
    axios.get("https://www.googleapis.com/books/v1/volumes/" + volumeId)
      .then(res => {
        setDetails(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [volumeId]) 

  return (
    <div>
      {details.volumeInfo &&
        <div>
          {details.volumeInfo.imageLinks ? <img src={details.volumeInfo.imageLinks.thumbnail.replace("&zoom=1", "&zoom=2")} alt="cover" /> : ""}
          <h1>{details.volumeInfo.title}</h1>
          <h2>{details.volumeInfo.subtitle}</h2>
          <p>{details.volumeInfo.authors.map((author, index) => <span key={index} className="author-span">{author}</span>)}</p>        
          <p dangerouslySetInnerHTML={{__html: details.volumeInfo.description}}></p>
          <p>{details.volumeInfo.categories ?  details.volumeInfo.categories.map((category, index) => <span key={index} className="category-span">{category}</span>) : ""}</p>

          

          
          <p>Publication Date: {details.volumeInfo.publishedDate}</p>
          <p>Page Count: {details.volumeInfo.pageCount}</p>
          <p>Publisher: {details.volumeInfo.publisher}</p>
          {details.volumeInfo.industryIdentifiers ? <p>ISBN-13: {details.volumeInfo.industryIdentifiers[1].identifier}</p> : ""}
          {details.volumeInfo.averageRating ? <p>User Rating: {details.volumeInfo.averageRating}/5 (based on {details.volumeInfo.ratingsCount > 1 ? details.volumeInfo.ratingsCount + " ratings)" : details.volumeInfo.ratingsCount + " rating)"}</p> : ""}
          <p></p>
        </div>}
    </div>
  )
}
