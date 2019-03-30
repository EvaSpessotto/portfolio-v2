import * as React from "react"
import "./header.scss"
import { Link } from "gatsby"
import { Navbar, Nav, NavItem } from "reactstrap"

class Header extends React.Component {
  render() {
    return (
      <Navbar className="fixed-top navbar">
        <Link to="/" className="logo">
          Eva Spessotto
        </Link>
        <Nav>
          <NavItem>
            <Link to="/about" className="about">
              A propos
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/contact" className="contact">
              Contact
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Header
