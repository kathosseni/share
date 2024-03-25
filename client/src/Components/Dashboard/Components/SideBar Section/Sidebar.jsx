import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'

import logo from "../../Assets/logo.png"

import { IoMdSpeedometer } from 'react-icons/io'
import { MdDeliveryDining } from 'react-icons/md'
import { MdOutlineExplore } from 'react-icons/md'
import { BsTrophy } from 'react-icons/bs'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { MdOutlinePermContactCalendar } from 'react-icons/md'
import { BsCreditCard2Front } from 'react-icons/bs'
import { BsQuestionCircle } from 'react-icons/bs'



const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className='logoDiv flex'>
        <img src={logo} alt="Image Name" />
        <h2>Share.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link to={"#"} className='menuLink'>
              <IoMdSpeedometer className='icon' />
              <span className='smallText'>
                Dash board
              </span>
            </Link>
          </li>

          <li className="listItem">
            <Link to={"#"} className='menuLink'>
              <MdDeliveryDining className='icon' />
              <span className='smallText'>
                My orders
              </span>
            </Link>
          </li>

          <li className="listItem">
            <Link to={"#"} className='menuLink'>
              <MdOutlineExplore className='icon' />
              <span className='smallText'>
                Explore
              </span>
            </Link>
          </li>

          <li className="listItem">
            <Link to={"#"} className='menuLink'>
              <BsTrophy className='icon' />
              <span className='smallText'>
                Products
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link to={"#"} className='menuLink'>
              <AiOutlinePieChart className='icon' />
              <span className='smallText'>
                Charts
              </span>
            </Link>
          </li>

          <li className="listItem">
            <Link to={"#"} className='menuLink'>
              <BiTrendingUp className='icon' />
              <span className='smallText'>
                Trends
              </span>
            </Link>
          </li>

          <li className="listItem">
            <Link to={"#"} className='menuLink'>
              <MdOutlinePermContactCalendar className='icon' />
              <span className='smallText'>
                Contact
              </span>
            </Link>
          </li>

          <li className="listItem">
            <Link to={"#"} className='menuLink'>
              <BsCreditCard2Front className='icon' />
              <span className='smallText'>
                Billings
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className='icon' />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help center</h3>
          <p>
            Having trouble in Share, please contact us for more questions.
          </p>
          <button className='btn'> Go to help center</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar