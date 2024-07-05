import React from 'react'
import { Link } from "react-router-dom"
import "./Signup.css"

const Signup = () => {
  return (
    <div className='form-container'>
        <div className='title-container'>
            <h1 className='form-title'>Supa<span className='menu'>Menu</span></h1>
        </div>
        <form className='form'>
            <h2 className='form-header'>Sign Up</h2>
            <div className='first-name'>
                <label htmlFor="first" className='first-name-label'>First Name</label>
                <input type="text" id="first" className='first-name-input' placeholder='GANZA' required/>
            </div>
            <div className='last-name'>
                <label htmlFor="last" className='last-name-label'>Last Name</label>
                <input type="text" id="last" className='last-name-input' placeholder='Chael' required/>
            </div>
            <div className='phone'>
                <label htmlFor="phone" className='phone-label'>Phone</label>
                <input type="tel" id="phone" className='phone-input' placeholder='0788332323'/>
            </div>
            <div className='email'>
                <label htmlFor="email" className='email-label'>Email</label>
                <input type="email" id="email" className='email-input' placeholder='ganzac@gmail.com' />
            </div>
            <div className='password'>
                <label htmlFor="password" className='password-label'>Password</label>
                <input type="password" id="password" className='password-input' placeholder='chael@2024' />
            </div>
            <button type="submit" className='form-btn'>Sign Up</button>
            <h2 className='form-already'>Already have an account <Link to={"/login"} className='form-already-login'>Login</Link></h2>
        </form>
    </div>
  )
}

export default Signup