import React from 'react'
import { Link } from "react-router-dom"


export default function Book({ id, volumeInfo }) {
  return (
    <div className="Book">
      {volumeInfo.authors && <div>
      <Link to={process.env.PUBLIC_URL + '/details/'+id}>
        {volumeInfo.imageLinks ? <img src={volumeInfo.imageLinks.thumbnail.replace("&zoom=1", "&zoom=2")} alt="cover" /> : ""}
        <h2>{volumeInfo.title}</h2>
        <p>by {volumeInfo.authors.map((author, index) => <span key={index} className="author-span">{author}</span>)}</p>
        <p>{volumeInfo.publishedDate ? volumeInfo.publishedDate.substring(0, 4) : ""}</p>
        <p>{volumeInfo.pageCount} pages</p>
      </Link>
      </div>}
    </div>
  )
}
