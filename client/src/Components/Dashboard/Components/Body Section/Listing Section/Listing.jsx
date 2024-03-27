import React from 'react'
import "./Listing.css"

import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

import img2 from '../../../Assets/img2.png'

const Listing = () => {
  return (
    <div className='listingSection'>
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src={img2} alt="" />

        </div>
      </div>
    </div>
  )
}

export default Listing