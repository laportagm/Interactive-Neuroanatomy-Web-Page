import React, { useEffect, useRef } from "react"
import { Parallax } from "react-parallax"
import ColorNavbar from "./IndexSections/ColorNavbar"
import Info from "./PresentationSections/Info"
import BasicComponents from "./PresentationSections/BasicComponents"
import Content from "./PresentationSections/Content"
import DemoFooter from "./IndexSections/DemoFooter"
import ScrollToTopButton from "./ExtraComponents/ScrollToTopButton"

// Import necessary CSS
import "../../view-css/HomePage.css"

const resetScrollPosition = () => {
  document.documentElement.scrollTop = 0
  document.scrollingElement.scrollTop = 0
  document.body.classList.add("presentation-page")
}

const HomePage = () => {
  const wrapperRef = useRef(null)

  useEffect(() => {
    resetScrollPosition()
    wrapperRef.current.scrollTop = 0

    // Enable smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth"

    // Cleanup function to remove class and reset scroll behavior on unmount
    return () => {
      document.body.classList.remove("presentation-page")
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return (
    <div className="homepage">
      <ColorNavbar />
      <div className="header-section">
        <Parallax
          bgImage={require("../../assets/img/homepage.jpg")}
          strength={78}
        >
          <div className="parallax-bg">
            {/* Background image for Parallax 1 */}
          </div>
          <header className="page-header header-filter">
            <div className="content-center">
              <small className="page-hero">
                3D Viewer/Interactive Neuroanatomy
              </small>
              <h3 className="under-hero">
                Explore Detailed Accurate Neuroanatomy Models.
              </h3>
            </div>
          </header>
        </Parallax>
      </div>

      <div className="content-section">
        <Parallax
          id="parallax2"
          bgImage={require("../../assets/img/26.jpg")}
          strength={181}
        >
          <div className="parallax-bg">
            {/* Background image for Parallax 2 */}
          </div>
          <div className="wrapper" ref={wrapperRef}>
            <div className="visually-appealing-spacer"></div>
            <div className="visually-appealing-spacer"></div>

            <div className="info-component">
              <Info />
            </div>
            <div className="basic-components">
              <BasicComponents />
            </div>
            <div className="content-component">
              <Content />
            </div>
            <div className="scroll-to-top-button">
              <ScrollToTopButton />
            </div>
          </div>
        </Parallax>
      </div>

      <DemoFooter id="footer" classname="footer" />
    </div>
  )
}

export default HomePage
