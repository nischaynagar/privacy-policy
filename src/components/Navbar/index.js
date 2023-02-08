import React from 'react'
import Logo from '../assests/images/logo.svg';
import menuIcon from "../assests/images/icon-menu.svg";
import "./style.css";

export default function Navbar(props) {
  return (
    <>
      <header className="primary-header">
        <div className="container mobile-width">
          <div className="nav-wrapper" id='nav-wrapper' >
            <div className="logo cursor-pointer" >
              <img src={Logo} alt =""/>
              <p className='header-title'>MATRIX LABS</p>
            </div>
            <div className='navbar-optionbtns'>
                <button className='highlighted'>Home</button>
                <button>Services</button>
                <button>Projects</button>
            </div>
            <div  className="QuotaBtn">Get a Quote</div>
            <img className='menu-icon' src={menuIcon} alt="menu-icon"/>
          </div>
        </div>
      </header>
    </>
  )
}
