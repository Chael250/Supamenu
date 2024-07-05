import React from 'react'
import Info from "../templates/info/Info"
import "./Header.css"

const Header = ({ currentPage }) => {
  return (
    <div className={`${currentPage != "landing" ? "header-current" : "header-landing"}`}>
        { currentPage == "landing" ? (<h2>Supa <span>Menu</span></h2>) : (<h2>{ currentPage }</h2>)}
        <Info />
    </div>
  )
}

export default Header