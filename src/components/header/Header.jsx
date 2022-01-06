import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import facebookLogo from "../../images/f_logo_RGB-Blue_58.png";
import flashingThunderLogo from "../../images/long-logo.png";
// eslint-disable-next-line import/no-cycle
import { Mailto } from "../index";

const Header = () => {
    return (
        <div className="outer_wrapper">
            <Grid xs={12} sm={12} md={5} lg={5} xl={5} className="logo_grid">
                <Link to="/" replace>
                    <img className="header_logo" src={flashingThunderLogo} alt="Flashing Thunder Logo" />
                </Link>
            </Grid>
            <Grid xs={12} sm={12} md={7} lg={7} xl={7} className="link_grid">
                <Link to="/" className="navbar_item" replace>
                    Home
                </Link>
                <Link to="/about" className="navbar_item" replace>
                    About
                </Link>
                <Link to="/products" className="navbar_item" replace>
                    Products
                </Link>
                <Link to="/thunderwear" className="navbar_item" replace>
                    Thunder Wear
                </Link>
                <Link to="/locations" className="navbar_item" replace>
                    Locations
                </Link>
                <Link to="/contact" className="navbar_item" replace>
                    Contact
                </Link>

                <hr className="header_divider" />

                <div className="header_contact_wrapper">
                    <div className="header_phone">641-732-5558</div>

                    <div className="header_mailto">
                        <Mailto label="katie@flashingthunder.com" mailto="mailto:katie@flashingthunder.com" />
                    </div>

                    <a href="https://www.facebook.com/iowaflashingthunder/" target="_blank" rel="noreferrer">
                        <img className="facebook_logo" src={facebookLogo} alt="Facebook Logo" />
                    </a>
                </div>
            </Grid>
        </div>
    );
};

export default Header;
