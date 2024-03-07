import React, { useState, useEffect, useRef } from "react"
import ColorNavbar from "./IndexSections/ColorNavbar"
import ThreeScene from "./PageComponents/ThreeScene"
import Navbar from "./PageComponents/Navbar"
import DemoFooter from "./IndexSections/DemoFooter"
import { Container, Row, Col, Card } from "react-bootstrap"
import ScrollToTopButton from "./ExtraComponents/ScrollToTopButton"
import InstructionsModal from "../Other/InstructionsModal" // Import InstructionsModal correctly
import "../../index.css"
import "../../assets/img/mainquizheader.jpg" // Import the image

const Models = () => {
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [lightIntensity, setLightIntensity] = useState(1)
  const [modelVisibility, setModelVisibility] = useState(true)
  const [viewDirection, setViewDirection] = useState("Front")
  const [isExpanded, setIsExpanded] = useState(false)
  const [isSpace, setIsSpace] = useState(false)
  const wrapper = useRef(null)

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Fullscreen toggle functionality
  const toggleFullScreen = (element) => {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      }
      setIsExpanded(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
      setIsExpanded(false)
    }
  }

  // Keydown event listener for fullscreen toggle
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        const element = document.getElementById("threejs-container")
        toggleFullScreen(element)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  // Component JSX structure
  return (
    <div className="wrapper" ref={wrapper}>
      <ColorNavbar className="higher-z-index" />
      <div className="page-header header-filter">
        <div
          className="page-header-image"
          data-parallax={true}
          style={{
            backgroundImage: `url(${require("../../assets/img/mainquizheader.jpg")})`,
          }}
        />
        <Row>
          <Col>
            <div className="quiz-hero">
              <h1 className="main-text">3d Neuroanatomy Models Page</h1>
              <h3>Interact and Learn</h3>
            </div>
          </Col>
        </Row>
      </div>

      <div className="transition-gradient" />
      <div className="space" />

      <div className="instructions">
        <Row>
          <h3
            style={{
              fontSize: "1.55rem",
              fontFamily: "Bebas Neue",
              textDecoration: "underline",
              lineHeight: "2.5rem",
              textDecorationSkip: ".09rem",
            }}
          >
            Instructions for Use of 3D Viewer:
          </h3>
          <div className="instruction-modal">
            <InstructionsModal />
          </div>
        </Row>
      </div>

      <Container className="main-viewer">
        <Card className="viewer-container-threejs">
          <Card.Header className="navbar-container pb-3 mb-3 lower-z-index">
            <Navbar
              setSelectedGroup={setSelectedGroup}
              setLightIntensity={setLightIntensity}
              setModelVisibility={setModelVisibility}
              setViewDirection={setViewDirection}
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
              isSpace={isSpace}
              setIsSpace={setIsSpace}
            />
          </Card.Header>
          <div id="threejs-container" className="threejs-container">
            <ThreeScene
              selectedGroup={selectedGroup}
              lightIntensity={lightIntensity}
              modelVisibility={modelVisibility}
              viewDirection={viewDirection}
              isExpanded={isExpanded}
              isSpace={isSpace}
            />
          </div>
        </Card>
      </Container>

      <ScrollToTopButton />
      <div className="space" />
      <DemoFooter />
    </div>
  )
}

export default Models
