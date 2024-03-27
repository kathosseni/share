import React from "react";
import "./Top.css";

import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import user3 from "../../../Assets/user3.png";
import img1 from "../../../Assets/img1.png";
import vid from "../../../Assets/vid.mp4";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Share.</h1>
          <p>Hello KathOsn, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={user3} alt="Admin Image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rigthCard flex">
          <h1>Create and share extraordinary products</h1>
          <p>
            The world's fast growing industry today are tech and digital
            connection
          </p>

          <div className="buttons flex">
            <button className="btn">Explore More </button>
            <button className="btn transparent">Top Seller</button>
          </div>

          <div className="videoDiv">
            <video src={vid} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard fle">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Files</small>
                </span>
                <span>
                  This Month <br /> <small>175 Files</small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={img1} alt="Image Name" />
            </div>

            {/* <div className="sideBarCard">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>Help center</h3>
                <p>
                  Having trouble in Share, please contact us for more questions.
                </p>
                <button className="btn"> Go to help center</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;