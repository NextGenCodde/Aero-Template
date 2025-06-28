import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-main">
        <div className="footer-col footer-brand">
          <div className="footer-logo">Aero<span className="dot">.</span></div>
          <p className="footer-desc">
            We are a team of designers and developers who creates high quality premium Shopify themes.
          </p>
          <ul className="footer-contact">
            <li><FaMapMarkerAlt className="footer-icon red" /> <span>Address :</span> No 40 Baria Sreet 133/2, NewYork, USA.</li>
            <li><FaPhoneAlt className="footer-icon red" /> <span>Phone :</span> (012) 800 456 789</li>
            <li><FaEnvelope className="footer-icon red" /> <span>Email :</span> support@masstechnologist</li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-title">MAIN MENU</div>
          <ul className="footer-links">
            <li>Home</li>
            <li>Shop</li>
            <li>Featured</li>
            <li>Layouts</li>
            <li>Pages</li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-title">ABOUT US</div>
          <ul className="footer-links">
            <li>Contact US</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-title">NEED HELP</div>
          <ul className="footer-links">
            <li>Search</li>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Our Blog</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-title">ABOUT US</div>
          <ul className="footer-links">
            <li>Contact US</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          Copyright © 2024 <span className="footer-red">MassTechnologist.Com</span>. All Rights Reserved.
        </div>
        <div className="footer-social">
          <FaFacebookF />
          <FaTwitter />
          <FaPinterestP />
          <FaGooglePlusG />
          <FaInstagram />
        </div>
        <div className="footer-payments">
          <img src="https://aero-theme.myshopify.com/cdn/shop/files/payment.png?v=1613507059" alt="Visa" />

        </div>
      </div>
    </footer>
  );
}

export default Footer;
