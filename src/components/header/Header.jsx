import React from "react";
import { Link } from "react-router-dom";
import facebookLogo from '../../images/f_logo_RGB-Blue_58.png'
import flashingThunderLogo from '../../images/long-logo.png'
import { Mailto } from '../index'
import Grid from '@mui/material/Grid';


const Header = () => {
    return (
        <div className="header">
            <div className="header-top">
                <div className="header-top__logo">
                    <Link to="/" replace={true}>
                        <img className="header-logo" src={flashingThunderLogo} alt="Flashing Thunder Logo"></img>
                    </Link> 
                </div>
                <div className="header-top__navbar">
                    <div className="header-top__navigation">
                        <div className="navbar">
                            <Link to="/" className="navbar-item" replace={true}>Home</Link>
                            <Link to="/about" className="navbar-item" replace={true}>About</Link>
                            <Link to="/products" className="navbar-item" replace={true}>Products</Link>
                            <Link to="/thunderwear" className="navbar-item" replace={true}>Thunder Wear</Link>
                            <Link to="/locations" className="navbar-item" replace={true}>Locations</Link>
                            <Link to="/contact" className="navbar-item" replace={true}>Contact</Link>
                        </div>
                    </div>
                    <hr className="header-top__seperator" />
                </div>
            </div>
            
            <div className="header-bottom">
                <div className="header-bottom__phone">
                    641-732-5558
                </div>
                <div className="header-bottom__email">
                    <Mailto label="katie@flashingthunder.com" mailto="mailto:katie@flashingthunder.com" />
                </div>
                <div>
                    <a href="https://www.facebook.com/iowaflashingthunder/" target="_blank" rel="noreferrer">
                        <img className="facebook-logo" src={facebookLogo} alt="Facebook Logo"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
