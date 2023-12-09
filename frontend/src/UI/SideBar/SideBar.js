import React from "react";
import classes from "./SideBar.module.css";

const SideBar = (props) => {




  return (
    <div className={classes.side}>
      <div className={classes.sidebar}>
        <div className={`${classes.links} ${classes.box}`}>
          <ul>
            <li>
              <h3 onClick={props.viewHomeLefter}>Home</h3>
            </li>
            <li>
              <h3>Search</h3>
            </li>
            <li>
              <h3><a href = "form.js">Add Car</a></h3>
            </li>
            <li>
              <h3>SignIn</h3>
            </li>
             <li>
              <h3>SignUp</h3>
            </li>
          </ul>
        </div>

        {/* <div className={`${classes.lists} ${classes.box}`}>
          <h3>Your Library</h3>
        </div> */}
      </div>
    </div>
  );
};

export default SideBar;
