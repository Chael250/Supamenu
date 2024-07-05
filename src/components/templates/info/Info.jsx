import React from 'react'
import { FaSearch, FaBell} from "react-icons/fa"
import User from "../../../assets/user.png"
import "./Info.css"

const Info = () => {
  return (
    <div className="info-container">
        <div className='icons'>
            <button className='btn1'>
                <FaSearch />
            </button>
            <button className='btn2'>
                <span className='circle'></span>
                <FaBell />
            </button>
        </div>
        <div className="user-info">
            <p className='username'>GANZA Chael</p>
            <img src={ User } alt="user" className='user-picture'/>
        </div>
    </div>
  )
}

export default Info