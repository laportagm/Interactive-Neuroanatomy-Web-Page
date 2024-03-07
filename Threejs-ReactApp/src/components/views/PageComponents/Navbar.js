import React from "react"
import ControlBar from "./ControlBar"
import { Navbar, Container, ButtonGroup, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../../view-css/CustomNavbar.css"

const CustomNavbar = ({
  setSelectedGroup,
  setLightIntensity,
  setModelVisibility,
  resetScene,
  setViewDirection,
  isExpanded,
  setIsExpanded,
  isSpace,
  setIsSpace,
}) => {
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded)
  }

  const handleSpaceClick = () => {
    setIsSpace(!isSpace)
  }

  return (
    <>
      <Container>
        <Navbar
          id="threejsToolbar"
          expand="lg"
          bg="dark"
          variant="dark"
          className={`rounded-top ${isExpanded ? "full-screen" : ""}`}
        >
          <Container
            fluid
            className="d-flex justify-content-between align-items-center custom-container"
          >
            <Navbar.Brand as="div" className="custom-brand">
              3D Viewer
            </Navbar.Brand>
            <div className="custom-control-bar">
              <ControlBar
                setSelectedGroup={setSelectedGroup}
                setLightIntensity={setLightIntensity}
                setModelVisibility={setModelVisibility}
                resetScene={resetScene}
                setViewDirection={setViewDirection}
              />
            </div>
            <div className="custom-button-group">
              <ButtonGroup>
                <Button
                  id="Expand"
                  variant="outline-light"
                  size="sm"
                  onClick={handleExpandClick}
                >
                  <i
                    className={`fas ${
                      isExpanded ? "fa-compress" : "fa-expand"
                    }`}
                  ></i>{" "}
                  Expand
                </Button>
                <Button
                  id="Space"
                  variant="outline-light"
                  size="sm"
                  onClick={handleSpaceClick}
                >
                  <i
                    className={`fas ${
                      isSpace ? "fa-globe" : "fa-space-shuttle"
                    }`}
                  ></i>{" "}
                  Space
                </Button>
              </ButtonGroup>
            </div>
          </Container>
        </Navbar>
      </Container>
    </>
  )
}

export default CustomNavbar
