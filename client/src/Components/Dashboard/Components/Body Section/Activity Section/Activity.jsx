import React from 'react'
import "./Activity.css"

import { BsArrowRightShort } from 'react-icons/bs'

import user1 from '../../../Assets/user0.png'
import user2 from '../../../Assets/user3.png'
import user3 from '../../../Assets/user2.png'
import user4 from '../../../Assets/user1.png'
import user5 from '../../../Assets/user5.png'

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className="btn flex">
          See All 
          <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="setContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="custumerDetails">
            <span className="name">Ola Bens</span>
            <small>Share a new Doc</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Image" />
          <div className="custumerDetails">
            <span className="name">Sao Doe</span>
            <small>Share a new Doc</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        
        <div className="singleCustomer flex">
          <img src={user3} alt="Customer Image" />
          <div className="custumerDetails">
            <span className="name">Yel Light</span>
            <small>Share a new Doc</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt="Customer Image" />
          <div className="custumerDetails">
            <span className="name">Kath Dev</span>
            <small>Share a new Doc</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user5} alt="Customer Image" />
          <div className="custumerDetails">
            <span className="name">Sao Zer</span>
            <small>Share a new Doc</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity