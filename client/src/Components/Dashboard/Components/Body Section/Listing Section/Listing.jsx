import React from 'react'
import "./Listing.css"

import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'

import img1 from '../../../Assets/img2.png'
import img2 from '../../../Assets/img4.png'
import img3 from '../../../Assets/img5.png'
import img4 from '../../../Assets/img7.png'
import user1 from '../../../Assets/user0.png'
import user2 from '../../../Assets/user5.png'
import user3 from '../../../Assets/user1.png'
import user4 from '../../../Assets/user4.png'

const Listing = () => {
  return (
    <div className='listingSection'>
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="setContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src={img1} alt="Image Name" />
          <h3>Fill Open</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={img2} alt="Image Name" />
          <h3>Files Tampted</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={img3} alt="Image Name" />
          <h3>Over Vue</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src={img4} alt="Image Name" />
          <h3>Annual Vince</h3>
        </div>
      </div>

      <div className="sharing flex">
        <div className="topSharing">
          <div className="heading flex">
            <h3>Top Sharing</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Image" />
              <img src={user2} alt="User Image" />
              <img src={user3} alt="User Image" />
              <img src={user4} alt="User Image" />
            </div>

            <div className="cardText">
              <span>
                14.657 Docs <br />
                <small>
                  21 Sharings <span className='date'>7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSharing">
          <div className="heading flex">
            <h3>Featured Sharing</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user3} alt="User Image" />
              <img src={user4} alt="User Image" />
              <img src={user1} alt="User Image" />
              <img src={user2} alt="User Image" />
            </div>

            <div className="cardText">
              <span>
                39.800 Docs <br />
                <small>
                  26 Sharings <span className='date'>7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing