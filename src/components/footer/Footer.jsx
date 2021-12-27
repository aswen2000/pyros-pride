import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <a href="/" className="footer-link">Home</a>
                <span  className="footer-link-divider"> | </span>

                <a href="/about" className="footer-link">About</a>
                <span  className="footer-link-divider"> | </span>

                <a href="/products" className="footer-link">Products</a>
                <span  className="footer-link-divider"> | </span>

                <a href="/thunderwear" className="footer-link">Thunder Wear</a>
                <span  className="footer-link-divider"> | </span>

                <a href="/locations" className="footer-link">Locations</a>
                <span  className="footer-link-divider"> | </span>
                
                <a href="/contact" className="footer-link">Contact</a>
                <span  className="footer-link-divider"> | </span>

                <a href="/admin" className="footer-link">Admin</a>
            </div>

            <div>
                <p className="footer-address-and-number">700 East Van Buren Street, Mitchell, Iowa 50461 - phone: 641-732-5558</p>
            </div>

        </div>

    );
}

export default Footer;