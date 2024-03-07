import React from "react"
import { Link } from "react-router-dom"
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap"

export default function ColorNavbar() {
  // State to manage the color of the navbar based on the scroll position
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent")

  React.useEffect(() => {
    // Function to change the navbar color on scroll
    const changeNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("bg-info") // Change to 'bg-info' color when scrolled more than 299px
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent") // Change back to transparent when scrolled less than 300px
      }
    }

    // Adding the scroll event listener when the component mounts
    window.addEventListener("scroll", changeNavbarColor)

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", changeNavbarColor)
    }
  }, [])

  return (
    <>
      <Navbar className={`fixed-top ${navbarColor}`} expand="lg">
        <Container fluid>
          <div className="navbar-translate">
            <Link to="/" style={{ color: "white" }}>
              Neuroanatomy Navigator: Interactive 3D Viewer
            </Link>
            <button className="navbar-toggler" id="navigation">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#navigation">
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="#" onClick={(e) => e.preventDefault()}>
                    <span></span>
                  </Link>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button className="navbar-toggler" id="navigation">
                    <i className="tim-icons icon-simple-remove"></i>
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" nav>
                  <i
                    aria-hidden={true}
                    className="tim-icons icon-bullet-list-67"
                  ></i>
                  <p>Models</p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem to="/" tag={Link}>
                    <i className="tim-icons icon-app"></i>
                    Home
                  </DropdownItem>
                  <DropdownItem to="/Models" tag={Link}>
                    <i className="tim-icons icon-settings"></i>
                    Neuroanatomy Models
                  </DropdownItem>
                  <DropdownItem to="*" tag={Link}>
                    <i className="tim-icons icon-align-left-2"></i>
                    Pending
                  </DropdownItem>
                  <DropdownItem to="*" tag={Link}>
                    <i className="tim-icons icon-user-run"></i>
                    Pending
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" nav>
                  <i aria-hidden={true} className="tim-icons icon-paper"></i>
                  <p>Quizzes</p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem to="/quiz" tag={Link}>
                    <i className="tim-icons icon-app"></i>
                    Quiz Yourself
                  </DropdownItem>
                  <DropdownItem to="/brainstem-information" tag={Link}>
                    <i className="tim-icons icon-settings"></i>
                    Brainstem Test
                  </DropdownItem>
                  <DropdownItem to="*" tag={Link}>
                    <i className="tim-icons icon-align-left-2"></i>
                    Pending
                  </DropdownItem>
                  <DropdownItem to="*" tag={Link}>
                    <i className="tim-icons icon-user-run"></i>
                    Pending
                  </DropdownItem>
                  <DropdownItem to="/neuroanatomy-guide#" tag={Link}>
                    <i className="tim-icons icon-paper"></i>
                    Learn How To Create...
                  </DropdownItem>
                  <DropdownItem to="*" tag={Link}>
                    <i className="tim-icons icon-money-coins"></i>
                    Pending/About Us
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" nav>
                  <i
                    aria-hidden={true}
                    className="tim-icons icon-book-bookmark"
                  ></i>
                  <p>Knowledge Base</p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem to="/neuroanatomy-resources" tag={Link}>
                    <i className="tim-icons icon-bulb-63"></i>
                    Resources
                  </DropdownItem>
                  <DropdownItem to="*" tag={Link}>
                    <i className="tim-icons icon-align-center"></i>
                    Pending
                  </DropdownItem>
                  <DropdownItem to="*" tag={Link}>
                    <i className="tim-icons icon-chart-bar-32"></i>
                    Pending
                  </DropdownItem>
                  <DropdownItem to="*" tag={Link}>
                    <i className="tim-icons icon-square-pin"></i>
                    Pending
                  </DropdownItem>
                  <DropdownItem to="*" tag={Link}>
                    <i className="tim-icons icon-paper"></i>
                    Pending
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to="/login">
                  <Button className="nav-link" color="default" size="sm">
                    <p>Login / Sign Up</p>
                  </Button>
                </Link>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  )
}
