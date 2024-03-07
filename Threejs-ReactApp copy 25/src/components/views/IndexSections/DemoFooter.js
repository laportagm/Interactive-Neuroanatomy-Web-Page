import React from "react"
import { Link } from "react-router-dom"

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap"

export default function DemoFooter() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <Row text-center>
                <h1 className="title">INV</h1>
              </Row>
            </Col>
            <Col md="3" xs="6">
              <Nav>
                <NavItem>
                  <NavLink to="/index" tag={Link}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/landing-page" tag={Link}>
                    Landing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/register-page" tag={Link}>
                    Register
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/profile-page" tag={Link}>
                    Profile
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3" xs="6">
              <Nav>
                <NavItem>
                  <NavLink href="*" target="_blank">
                    Contact Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="*" target="_blank">
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="*" tag={Link} target="_blank">
                    Pending
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="*" target="_blank">
                    Pending
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <h2 className="title text-align-center">Follow us:</h2>
              <div className="btn-wrapper profile text-align-center">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="*"
                  id="tooltip39661217"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip39661217">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple ml-1"
                  color="default"
                  href="/"
                  id="tooltip206037619"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip206037619">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple ml-1"
                  color="default"
                  href="/"
                  id="tooltip750293512"
                  target="_blank"
                >
                  <i className="fab fa-dribbble" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip750293512">
                  Follow us
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}
