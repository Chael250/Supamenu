import React from 'react'
import "./Dashboard.css"
import SideBar from '../../components/SideBar/SideBar'
import Header from "../../components/header/Header"
import { Link } from "react-router-dom"
import AddClient from '../Addclient/AddClient'
import { FaEye, FaFilter, FaSort } from 'react-icons/fa'

const Dashboard = () => {
  return (
    <div className='dash-container'>
      <SideBar />
      <div className='dash-right'>
        <Header currentPage={"overview"}/>
        <div className='new-client'>
          <p className='new-client-para'>New Client</p>
          <input type="text" placeholder='Add a new client' className='new-client-input'/>
          <Link to={'/addclient'} className='dash-btn'>Add</Link>
          <hr className='new-client-hr'/>
        </div>
        <div className='view-client-container'>
          <div className='view-client-title-container'>
            <div className='view-client-title'>
              <p>View all clients</p>
            </div>
            <div className='view-client-title-sort-container'>
              <div className='view-client-title-sort'>
                <FaSort />
                <p>Sort</p>
              </div>
              <div className='view-client-title-filter'>
                <FaFilter />
                <p>Filter</p>
              </div>
            </div>
          </div>
          <div className='view-client-details'>
            <div className='view-client-details-client'>
              <p>Client details</p>
            </div>
            <div className='view-client-details-sales'>
              <p>Sales</p>
            </div>
            <div className='view-client-details-report'>
              <p>Detailed report</p>
            </div>
            <div className='view-client-details-category'>
              <p>Categories</p>
            </div>
          </div>
          <div className='view-client-info'>
            <div>
              <p>Soy Restaurant</p>
            </div>
            <div className='view-client-info-sales'>
             <p>2345678 Frw</p>
             <p className='view-client-info-sales-date'>on 24.09.2024</p>
            </div>
            <div className="view-client-info-detailed">
              <FaEye />
            </div>
            <div className='view-client-info-category'>
              <button type='button' className='view-client-info-category-btn'>Resto</button>
            </div>
          </div>
          <div className='view-client-info'>
          <div>
              <p>Soy Restaurant</p>
            </div>
            <div className='view-client-info-sales'>
             <p>2345678 Frw</p>
             <p className='view-client-info-sales-date'>on 24.09.2024</p>
            </div>
            <div className="view-client-info-detailed">
              <FaEye />
            </div>
            <div className='view-client-info-category'>
              <button type='button' className='view-client-info-category-btn'>Resto</button>
            </div>
          </div>
          <div className='view-client-info'>
          <div>
              <p>Soy Restaurant</p>
            </div>
            <div className='view-client-info-sales'>
             <p>2345678 Frw</p>
             <p className='view-client-info-sales-date'>on 24.09.2024</p>
            </div>
            <div className="view-client-info-detailed">
              <FaEye />
            </div>
            <div className='view-client-info-category'>
              <button type='button' className='view-client-info-category-btn'>Resto</button>
            </div>
          </div>
          <div className='view-client-info'>
          <div>
              <p>Soy Restaurant</p>
            </div>
            <div className='view-client-info-sales'>
             <p>2345678 Frw</p>
             <p className='view-client-info-sales-date'>on 24.09.2024</p>
            </div>
            <div className="view-client-info-detailed">
              <FaEye />
            </div>
            <div className='view-client-info-category'>
              <button type='button' className='view-client-info-category-btn'>Resto</button>
            </div>
          </div>
          <div className='view-client-info'>
          <div>
              <p>Soy Restaurant</p>
            </div>
            <div className='view-client-info-sales'>
             <p>2345678 Frw</p>
             <p className='view-client-info-sales-date'>on 24.09.2024</p>
            </div>
            <div className="view-client-info-detailed">
              <FaEye />
            </div>
            <div className='view-client-info-category'>
              <button type='button' className='view-client-info-category-btn'>Resto</button>
            </div>
          </div>
          <div className='view-client-info'>
          <div>
              <p>Soy Restaurant</p>
            </div>
            <div className='view-client-info-sales'>
             <p>2345678 Frw</p>
             <p className='view-client-info-sales-date'>on 24.09.2024</p>
            </div>
            <div className="view-client-info-detailed">
              <FaEye />
            </div>
            <div className='view-client-info-category'>
              <button type='button' className='view-client-info-category-btn'>Resto</button>
            </div>
          </div>
          <div className='view-client-info'>
          <div>
              <p>Soy Restaurant</p>
            </div>
            <div className='view-client-info-sales'>
             <p>2345678 Frw</p>
             <p className='view-client-info-sales-date'>on 24.09.2024</p>
            </div>
            <div className="view-client-info-detailed">
              <FaEye />
            </div>
            <div className='view-client-info-category'>
              <button type='button' className='view-client-info-category-btn'>Resto</button>
            </div>
          </div>
          <div className='view-client-info'>
          <div>
              <p>Soy Restaurant</p>
            </div>
            <div className='view-client-info-sales'>
             <p>2345678 Frw</p>
             <p className='view-client-info-sales-date'>on 24.09.2024</p>
            </div>
            <div className="view-client-info-detailed">
              <FaEye />
            </div>
            <div className='view-client-info-category'>
              <button type='button' className='view-client-info-category-btn'>Resto</button>
            </div>
          </div>
          <div className='view-client-info'>
          <div>
              <p>Soy Restaurant</p>
            </div>
            <div className='view-client-info-sales'>
             <p>2345678 Frw</p>
             <p className='view-client-info-sales-date'>on 24.09.2024</p>
            </div>
            <div className="view-client-info-detailed">
              <FaEye />
            </div>
            <div className='view-client-info-category'>
              <button type='button' className='view-client-info-category-btn'>Resto</button>
            </div>
          </div>
          <div className='view-client-info'>
          <div>
              <p>Soy Restaurant</p>
            </div>
            <div className='view-client-info-sales'>
             <p>2345678 Frw</p>
             <p className='view-client-info-sales-date'>on 24.09.2024</p>
            </div>
            <div className="view-client-info-detailed">
              <FaEye />
            </div>
            <div className='view-client-info-category'>
              <button type='button' className='view-client-info-category-btn'>Resto</button>
            </div>
          </div>
          <div className='view-client-info'>
          <div>
              <p>Soy Restaurant</p>
            </div>
            <div className='view-client-info-sales'>
             <p>2345678 Frw</p>
             <p className='view-client-info-sales-date'>on 24.09.2024</p>
            </div>
            <div className="view-client-info-detailed">
              <FaEye />
            </div>
            <div className='view-client-info-category'>
              <button type='button' className='view-client-info-category-btn'>Resto</button>
            </div>
          </div>
          <div className='view-client-info'>
          <div>
              <p>Soy Restaurant</p>
            </div>
            <div className='view-client-info-sales'>
             <p>2345678 Frw</p>
             <p className='view-client-info-sales-date'>on 24.09.2024</p>
            </div>
            <div className="view-client-info-detailed">
              <FaEye />
            </div>
            <div className='view-client-info-category'>
              <button type='button' className='view-client-info-category-btn'>Resto</button>
            </div>
          </div>
          <div className='view-client-info'>
          <div>
              <p>Soy Restaurant</p>
            </div>
            <div className='view-client-info-sales'>
             <p>2345678 Frw</p>
             <p className='view-client-info-sales-date'>on 24.09.2024</p>
            </div>
            <div className="view-client-info-detailed">
              <FaEye />
            </div>
            <div className='view-client-info-category'>
              <button type='button' className='view-client-info-category-btn'>Resto</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard