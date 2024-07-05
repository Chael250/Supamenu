import React from 'react'
import "./SideBar.css"
import { FaChartPie, FaEye, FaReceipt, FaUser } from "react-icons/fa"
import { AiFillSetting } from 'react-icons/ai'

const SideBar = () => {
  return (
    <div className='sidebar-container'>
        <div className='horizontal-line'></div>
        <div className='right-side'>
            <div className='right-title'>
                <h1 className>Supa <span>Menu</span></h1>
            </div>
            <div className='right-select'>
                <div className='overview'>
                    <FaEye className='overview-icon'/>
                    <p className='overview-desc'>Overview</p>
                </div>
                <div className='client'>
                    <FaChartPie className='client-icon'/>
                    <p className='client-desc'>Clients</p>
                </div>
                <div className='users'>
                    <FaUser className='users-icon'/>
                    <p className='users-desc'>Users</p>
                </div>
            </div>
            <div className='right-settings'>
                <div className='settings'>
                    <AiFillSetting className='settings-icon'/>
                    <p className='settings-desc'>Settings</p>
                </div>
                <div className='myAccount'>
                    <FaReceipt className='myAccount-icon'/>
                    <p className='myAccount-desc'>My account</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar