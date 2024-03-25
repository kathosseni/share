import React from "react";
import Sidebar from "./Components/SideBar Section/Sidebar";
import Body from "./Components/Body Section/Body";
import "../../App.css"
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboardPage flex">
      <div className="container flex">
        <Sidebar />
        <Body />
        
      </div>
    </div>
  );
};

export default Dashboard;
