import React from 'react'
import { Link } from "react-router-dom"
import Background from "../media/background1.jpg"

export default function Home({bookshelf, setBookshelf}) {
  const bestseller = <ion-icon name="trending-up-sharp"></ion-icon>
  const book = <ion-icon name="book-sharp"></ion-icon>
  const review = <ion-icon name="chatbubbles-sharp"></ion-icon>

  const handleNBestSellers = (e) => {
    setBookshelf("1001")
  }

  const handleFBestSellers = (e) => {
    setBookshelf("1002")
  }

  return (
    <div className="Home">
      <img className="background-img" src={Background} alt="ladder in front of bookshelf" />
      <div className="right-side">
        <h1>Welcome</h1>
        <div className="browse-options">
          <p>Here you will find an extensive catalog of book listings. If you have something specific in mind, please use the search bar in the top left. Otherwise you may explore one of our curated lists by choosing one of the options below.</p>
          <div className="collections">
            
            <Link to={process.env.PUBLIC_URL + '/bookshelf'}><p className="collections-card" onClick={handleNBestSellers}>{bestseller} Nonfiction Best Sellers</p></Link>
            <Link to={process.env.PUBLIC_URL + '/bookshelf'}><p className="collections-card" onClick={handleFBestSellers}>{bestseller} Fiction Best Sellers</p></Link>
            <p className="collections-card">{book} Greatest of All Time</p>
            <p className="collections-card">{review} Most Reviewed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
