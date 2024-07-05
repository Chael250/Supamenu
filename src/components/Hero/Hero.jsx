import React from 'react'
import { Link } from "react-router-dom"
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero-container'>
        <h1 className='register'>Register your restaurant on Supa menu</h1>
        <p>For free and get more revenue!</p>
        <div className='link-container'>
            <Link to={'/signup'} className='link1'>Register your restaurant</Link>
            <Link to={'/login'} className='link2'>Restaurant already registered? Sign In</Link>
        </div>
    </div>
  )
}

export default Hero