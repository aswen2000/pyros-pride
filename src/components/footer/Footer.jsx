import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                {/* <a href="/" className="footer-link">Home</a> */}
                <Link to="/" className="footer-link">Home</Link>
                <span  className="footer-link-divider"> | </span>

                {/* <a href="/about" className="footer-link">About</a> */}
                <Link to="/about" className="footer-link">About</Link>
                <span  className="footer-link-divider"> | </span>

                {/* <a href="/products" className="footer-link">Products</a> */}
                <Link to="/products" className="footer-link">Products</Link>
                <span  className="footer-link-divider"> | </span>

                {/* <a href="/thunderwear" className="footer-link">Thunder Wear</a> */}
                <Link to="/thunderwear" className="footer-link">Thunder Wear</Link>
                <span  className="footer-link-divider"> | </span>

                {/* <a href="/locations" className="footer-link">Locations</a> */}
                <Link to="/locations" className="footer-link">Locations</Link>
                <span  className="footer-link-divider"> | </span>
                
                {/* <a href="/contact" className="footer-link">Contact</a> */}
                <Link to="/contact" className="footer-link">Contact</Link>
                <span  className="footer-link-divider"> | </span>

                {/* <a href="/admin" className="footer-link">Admin</a> */}
                <Link to="/admin" className="footer-link">Admin</Link>
            </div>

            <div>
                <p className="footer-address-and-number">700 East Van Buren Street, Mitchell, Iowa 50461 - phone: 641-732-5558</p>
            </div>

        </div>

    );
}

export default Footer;