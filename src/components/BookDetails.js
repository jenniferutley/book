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
    <div className="Book-Details">
      {details.volumeInfo ?
        <div>
          <div className="details-container">
            {details.volumeInfo.imageLinks ? <img src={details.volumeInfo.imageLinks.thumbnail.replace("&zoom=1", "&zoom=2")} alt="cover" /> : ""}
            <div className="inner-details-container">
              <p className="details-title">{details.volumeInfo.title}</p>
              <p className="details-subtitle">{details.volumeInfo.subtitle}</p>
              {details.volumeInfo.authors ? <p className="details-author">{details.volumeInfo.authors.map((author, index) => <span key={index} className="author-span">{author}</span>)}</p> : ""}
              {details.volumeInfo.categories ? <p>{details.volumeInfo.categories.map((category, index) => <span key={index} className="category-span">{category}</span>)}</p> : ""}
              <p className="details-publication-date"><b>Publication Date:</b> {details.volumeInfo.publishedDate}</p>
              <p><b>Page Count:</b> {details.volumeInfo.pageCount}</p>
              <p><b>Publisher:</b> {details.volumeInfo.publisher}</p>
              {details.volumeInfo.averageRating ? <p><b>User Rating:</b> {details.volumeInfo.averageRating}/5 (based on {details.volumeInfo.ratingsCount > 1 ? details.volumeInfo.ratingsCount + " ratings)" : details.volumeInfo.ratingsCount + " rating)"}</p> : ""}
              {details.volumeInfo.industryIdentifiers ? <p><b>ISBN-13:</b> {details.volumeInfo.industryIdentifiers[1].identifier}</p> : ""}              
              <p></p>
            </div>
          </div>
          <p className="details-description" dangerouslySetInnerHTML={{ __html: details.volumeInfo.description }}></p>
        </div> : ""}

    </div>
  )
}
