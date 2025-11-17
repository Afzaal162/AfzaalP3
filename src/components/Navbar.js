import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Modern Logo */}
      <div className="logo">
        <Link to="/" onClick={handleLinkClick}>
          FoodXone
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>

      {/* Navigation Links */}
      <div className={`menu-container ${menuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>

          {/* Services Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => window.innerWidth > 768 && setServicesOpen(false)}
            onMouseLeave={() => window.innerWidth > 768 && setServicesOpen(false)}
          >
            <span className="dropbtn" onClick={() => setServicesOpen(!servicesOpen)}>
              Shop ▼
            </span>

            <ul className={`dropdown-content ${servicesOpen ? "active" : ""}`}>
              <li><Link to="/shop" onClick={handleLinkClick}>Shopping</Link></li>
              <li><Link to="/wish" onClick={handleLinkClick}>Wishlist</Link></li>
              <li><Link to="/product" onClick={handleLinkClick}>Single Product</Link></li>
              <li><Link to="/order" onClick={handleLinkClick}>Place Order</Link></li>


            </ul>
          </li>

          <li><Link to="/blog" onClick={handleLinkClick}>Blog</Link></li>

          <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>

          {/* Cart Icon */}
          <li className="cart-icon">
            <Link to="/cart" onClick={handleLinkClick} className="cart-link">
            </Link>
          </li>
        </ul>
      </div>

    </nav>
  );
}
