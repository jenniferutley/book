import React from 'react'
import Background from "../media/background1.jpg"

export default function Home() {

  const bestseller = <ion-icon name="trending-up-sharp"></ion-icon>
  const book = <ion-icon name="book-sharp"></ion-icon>
  const review = <ion-icon name="chatbubbles-sharp"></ion-icon>

  return (
    <div className="Home">
      <img className="background-img" src={Background} alt="ladder in front of bookshelf" />
      <div className="right-side">
        <h1>Welcome</h1>
        <div className="browse-options">
          <p>Here you will find an extensive catalog of book listings. If you have something specific in mind, please use the search bar in the top left. Otherwise you may explore one of our curated lists by choosing one of the options below.</p>
          <div className="collections">
            <p className="collections-card">{bestseller} Best Sellers</p>
            <p className="collections-card">{book} Greatest of All Time</p>
            <p className="collections-card">{review} Most Reviewed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
