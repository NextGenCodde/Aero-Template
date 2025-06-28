import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaSearch, FaTh, FaGlobe, FaShoppingBag } from "react-icons/fa";

function NavbarAero() {
  return (
    <Navbar expand="lg" className="aero-navbar">
      <Container style={{ maxWidth: "1440px" }} className="nav-container">
        {/* Left Logo */}
        <Navbar.Brand href="#home" className="aero-logo">
          Aero<span className="dot">.</span>
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Center Menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto aero-nav-links">
            <NavDropdown title="HOME" id="home-dropdown" className="dropdown">
              <NavDropdown.Item href="#home/1">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="#home/2">Home 2</NavDropdown.Item>
              <NavDropdown.Item href="#home/3">Home 3</NavDropdown.Item>
              <NavDropdown.Item href="#home/4">Home 4</NavDropdown.Item>
              <NavDropdown.Item href="#home/5">Home 5</NavDropdown.Item>
              <NavDropdown.Item href="#home/6">Home 6</NavDropdown.Item>
              <NavDropdown.Item href="#home/7">Home 7</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="SHOP" id="shop-dropdown" className="dropdown">
              <NavDropdown.Item href="#shop/1">Shop 1</NavDropdown.Item>
              <NavDropdown.Item href="#shop/2">Shop 2</NavDropdown.Item>
              <NavDropdown.Item href="#shop/3">Shop 3</NavDropdown.Item>
              <NavDropdown.Item href="#shop/4">Shop 4</NavDropdown.Item>
              <NavDropdown.Item href="#shop/5">Shop 5</NavDropdown.Item>
              <NavDropdown.Item href="#shop/6">Shop 6</NavDropdown.Item>
              <NavDropdown.Item href="#shop/7">Shop 7</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="FEATURED"
              id="featured-dropdown"
              className="dropdown"
            >
              <NavDropdown.Item href="#featured/1">Featured 1</NavDropdown.Item>
              <NavDropdown.Item href="#featured/2">Featured 2</NavDropdown.Item>
              <NavDropdown.Item href="#featured/3">Featured 3</NavDropdown.Item>
              <NavDropdown.Item href="#featured/4">Featured 4</NavDropdown.Item>
              <NavDropdown.Item href="#featured/5">Featured 5</NavDropdown.Item>
              <NavDropdown.Item href="#featured/6">Featured 6</NavDropdown.Item>
              <NavDropdown.Item href="#featured/7">Featured 7</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="LAYOUTS"
              id="layouts-dropdown"
              className="dropdown"
            >
              <NavDropdown.Item href="#layouts/1">Layout 1</NavDropdown.Item>
              <NavDropdown.Item href="#layouts/2">Layout 2</NavDropdown.Item>
              <NavDropdown.Item href="#layouts/3">Layout 3</NavDropdown.Item>
              <NavDropdown.Item href="#layouts/4">Layout 4</NavDropdown.Item>
              <NavDropdown.Item href="#layouts/5">Layout 5</NavDropdown.Item>
              <NavDropdown.Item href="#layouts/6">Layout 6</NavDropdown.Item>
              <NavDropdown.Item href="#layouts/7">Layout 7</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="PAGES" id="pages-dropdown" className="dropdown">
              <NavDropdown.Item href="#pages/1">Page 1</NavDropdown.Item>
              <NavDropdown.Item href="#pages/2">Page 2</NavDropdown.Item>
              <NavDropdown.Item href="#pages/3">Page 3</NavDropdown.Item>
              <NavDropdown.Item href="#pages/4">Page 4</NavDropdown.Item>
              <NavDropdown.Item href="#pages/5">Page 5</NavDropdown.Item>
              <NavDropdown.Item href="#pages/6">Page 6</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Right Icons */}
          <div className="aero-icons d-flex align-items-center gap-4">
            <FaSearch className="nav-icon" title="Search" />
            <FaTh className="nav-icon" title="Categories" />
            <FaGlobe className="nav-icon" title="Language" />
            <div className="cart-icon-wrapper position-relative">
              <FaShoppingBag className="nav-icon" title="Cart" />
              <span className="cart-count">0</span>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarAero;
