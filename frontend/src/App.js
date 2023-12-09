import React, { useState } from "react";
import "./App.css";
//import Nav from "./UI/navbar/Navbar";
import Form from "./UI/Form/form";
//import Home from "./pages/Home/Home";
//import SignupForm from "./pages/SignupPage";
import SideBar from "./UI/SideBar/SideBar";
//import ControlPanal from "./pages/ControlPanal/ControlPanal";
import InnerLIst from "./pages/InnerLIst/InnerLIst";

function App() {
  const [homeIsActive, updateHomeIsActive] = useState(true);
  const [innerPlayListIsActive, updateInnerPlayListIsActive] = useState(false);

  const homeClick = () => {
    updateHomeIsActive(true);
    updateInnerPlayListIsActive(false);
  };

  const innerListClick = () => {
    updateHomeIsActive(false);
    updateInnerPlayListIsActive(true);
  };

  return (
    
    <div className="App">
      <div className="container">
        <SideBar viewHomeLefter={homeClick}></SideBar>
{/* <Nav /> */}
        {homeIsActive ? <InnerLIst innerListLefter={innerListClick} /> : ""}
      </div>
      <div className ="form">
        <Form />
      </div>
      {/* <ControlPanal></ControlPanal> */}
    </div>
  );
}

export default App;
