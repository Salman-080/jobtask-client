'use client';
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import { VscThreeBars } from "react-icons/vsc";

import { PiHandbagLight } from "react-icons/pi";
import { useState } from "react";

const Navbar = () => {
  const [listPopup, setPopup] = useState(false);

  const popUpFunction = () => {
    setPopup(!listPopup);
  };
  return (
    <div className="nav_parent">
      <div className="navbar">
        <p>Logo</p>
        <ul>
          <li className="dropdown">
            Courses
            <IoIosArrowDown className="arrowNav"></IoIosArrowDown>
          </li>
          <li className="dropdown">
            Instructors<IoIosArrowDown className="arrowNav"></IoIosArrowDown>
          </li>
          <li className="dropdown">
            Blogs<IoIosArrowDown className="arrowNav"></IoIosArrowDown>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="navbarEnd">
          <PiHandbagLight className="cartIcon"></PiHandbagLight>
          <button className="button">Login</button>
        </div>
      </div>

      <div className="Snavbar">
        <div className="S_Start_Nav">
          <VscThreeBars onClick={()=>popUpFunction()} className="threeDot"></VscThreeBars>
          <p>Logo</p>
        </div>

        <div className="navbarEnd">
          <PiHandbagLight  className="cartIcon"></PiHandbagLight>
          <button className="button">Login</button>
        </div>

        {listPopup && (
          <div className="SListPopup">
            <ul className="s_ul">
              <li className="">
                Courses
                <IoIosArrowDown className=""></IoIosArrowDown>
              </li>
              <li className="">
                Instructors<IoIosArrowDown className=""></IoIosArrowDown>
              </li>
              <li className="">
                Blogs<IoIosArrowDown className=""></IoIosArrowDown>
              </li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
