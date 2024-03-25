import React from "react";
import "./Login.css";
import "../../App.css"
import { Link, NavLink } from "react-router-dom";

import vid from "../../Assets/vid.mp4";
import logo from "../../Assets/logo.png";

import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={vid} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Create And Share Extraordinary Product</h2>
            <p>Embrece the world without limit!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Don't have an account?</span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>

          <form action="" className="form grid">
            <span className="showMessage" >Login Status will go here</span>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input type="text" id="username" placeholder="Enter username" />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input type="text" id="password" placeholder="Enter Password" />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your password? <a href="">Click Here</a>
            </span>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
