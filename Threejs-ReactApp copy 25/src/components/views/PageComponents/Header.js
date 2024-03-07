import React from "react"
import PropTypes from "prop-types"
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Header.css" // Import custom CSS

// Separate Navbar Items into its own functional component
const NavbarItems = ({ navLinks }) => {
  return (
    <Nav>
      {navLinks.map((link, index) => (
        <NavItem key={index}>
          <NavLink className="nav-link custom-nav-link" href={link.href}>
            {link.text}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  )
}

NavbarItems.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
}

// Main Header Component
const Header = () => {
  const navLinks = [
    { href: "index.html", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#Discover", text: "Discover" },
    { href: "#Portfolio", text: "Portfolio" },
    { href: "#team", text: "Team" },
  ]

  return (
    <Navbar id="header" className="fixed-top custom-navbar" expand="lg">
      <Container className="d-flex align-items-center justify-content-lg-between">
        <Navbar.Brand href="index.html" className="logo me-auto me-lg-0">
          Gp<span>.</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bi bi-list mobile-nav-toggle"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="navbar order-last order-lg-0"
        >
          <NavbarItems navLinks={navLinks} />
        </Navbar.Collapse>
        <Button
          href="#about"
          className="custom-get-started-btn"
          variant="outline-light"
        >
          Get Started
        </Button>
      </Container>
    </Navbar>
  )
}

export default Header
