import React from 'react'
import "./Landing.css"
import Header from "../../components/header/Header"
import Hero from '../../components/Hero/Hero'
import Working from '../../components/Working/Working'
import Footer from '../../components/footer/Footer'

const Landing = () => {
  return (
    <div className={``}>
        <Header currentPage={"landing"}/>
        <div className='hero-wrapper'>
          <Hero />
        </div>
        <Working />
        <Footer />
    </div>
  )
}

export default Landing