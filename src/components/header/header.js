import React from "react";
import logo from '../../images/11234406421538117460.svg';
import './header.css'

const Header = () => {
 return (
    <div className='header div-row'>
        <div className="logo-area div-row">
            <img src={logo} alt='' />
            <p>Khinkali Search</p>
        </div>
        <div className="login-area div-row">
            <button className="login-button">Login</button>
            <button>Sign Up</button>
        </div>
    </div>
 )
}

export default Header;