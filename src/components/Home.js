import React from 'react'
import { Link } from "react-router-dom"
import Background from "../media/background.jpg"

export default function Home({ bookshelf, setBookshelf }) {
  const bestseller = <ion-icon name="trending-up-sharp"></ion-icon>
  const trophy = <ion-icon name="trophy-sharp"></ion-icon>

  const handleNonfictionBestSellers = (e) => {
    setBookshelf("1001")
  }

  const handleFictionBestSellers = (e) => {
    setBookshelf("1002")
  }

  const handleNonfictionAllTime = (e) => {
    setBookshelf("1003")
  }

  const handleFictionAllTime = (e) => {
    setBookshelf("1004")
  }

  return (
    <div className="Home">
      <div className="left-side">
        <img className="background-img" src={Background} alt="bookshelf" />
      </div>
      <div className="right-side">
        <h1>Welcome</h1>
        <div className="browse-options">
          <p className="intro">Here you will find a searchable catalog of book listings. If you have something specific in mind, please use the search bar in the top left. Otherwise you may explore one of our curated lists by choosing one of the options below.</p>
          <div className="collections">
            <Link to={process.env.PUBLIC_URL + '/bookshelf'}>
              <div className="collections-card" onClick={handleNonfictionBestSellers}>
                <p className="collections-card-title">{bestseller} Nonfiction Best Sellers</p>
                <p className="collections-card-details">From The New York Times' weekly list </p>
              </div>
            </Link>
            <Link to={process.env.PUBLIC_URL + '/bookshelf'}>
              <div className="collections-card" onClick={handleFictionBestSellers}>
                <p className="collections-card-title">{bestseller} Fiction Best Sellers</p>
                <p className="collections-card-details">From The New York Times' weekly list </p>
              </div>
            </Link>
            <Link to={process.env.PUBLIC_URL + '/bookshelf'}>
              <div className="collections-card" onClick={handleNonfictionAllTime}>
                <p className="collections-card-title">{trophy} Nonfiction Greatest of All Time</p>
                <p className="collections-card-details">Using The Greatest Books algorithm</p>
              </div>
            </Link>
            <Link to={process.env.PUBLIC_URL + '/bookshelf'}>
              <div className="collections-card" onClick={handleFictionAllTime}>
                <p className="collections-card-title">{trophy} Fiction Greatest of All Time </p>
                <p className="collections-card-details">Using The Greatest Books algorithm</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
