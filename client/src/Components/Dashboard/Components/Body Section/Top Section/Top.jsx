import React from 'react'
import "./Top.css"

import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdNotificationsOutline } from 'react-icons/md'



const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Share.</h1>
          <p>Hello KathOsn, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard'/>
          <BiSearchAlt classname='icon' />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className='icon'/>
          <MdNotificationsOutline className='icon'/>
          <div className="adminImage">
            <img src="" alt="Admin Image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top