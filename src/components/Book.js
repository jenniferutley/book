import React from 'react'

export default function Book({ volumeInfo }) {
  return (
    <div className="Book">
        {volumeInfo.imageLinks ? <img src={volumeInfo.imageLinks.thumbnail.replace("&zoom=1&edge=curl&source=gbs_api", "&zoom=2&edge=curl&source=gbs_api")} alt="cover" /> : ""}
        <h2>{volumeInfo.title}</h2>
        <p>by {volumeInfo.authors}</p>
        <p>{volumeInfo.publishedDate ? volumeInfo.publishedDate.substring(0, 4) : ""}</p>
        <p>{volumeInfo.pageCount} pages</p>
    </div>
  )
}
