import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <Link to="/" className="footer-link" replace>
                    Home
                </Link>
                <span className="footer-link-divider"> | </span>

                <Link to="/about" className="footer-link" replace>
                    About
                </Link>
                <span className="footer-link-divider"> | </span>

                <Link to="/products" className="footer-link" replace>
                    Products
                </Link>
                <span className="footer-link-divider"> | </span>

                <Link to="/thunderwear" className="footer-link" replace>
                    Thunder Wear
                </Link>
                <span className="footer-link-divider"> | </span>

                <Link to="/locations" className="footer-link" replace>
                    Locations
                </Link>
                <span className="footer-link-divider"> | </span>

                <Link to="/contact" className="footer-link" replace>
                    Contact
                </Link>
                <span className="footer-link-divider"> | </span>

                <Link to="/admin" className="footer-link" replace>
                    Admin
                </Link>
            </div>

            <div>
                <p className="footer-address-and-number">
                    700 East Van Buren Street, Mitchell, Iowa 50461 - phone: 641-732-5558
                </p>
            </div>
        </div>
    );
};

export default Footer;
