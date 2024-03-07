import React from "react"
import { Container } from "reactstrap"

const MainContent = () => {
  return (
    <Container>
      <section id="main">
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center"></div>
          </div>
        </section>
        <div className="inner-page"></div>
        <div id="info-panel">
          <h1 id="info-title">3D Model Viewer Page</h1>
          <h4 id="info-subtitle">
            {" "}
            Welcome to our 3D Model Viewer Page. This interactive space enables
            you to explore a variety of GLB models in an immersive environment.
          </h4>
          <h5 id="info-subtitle"> **Additional Information**</h5>
        </div>
      </section>
    </Container>
  )
}

export default MainContent
