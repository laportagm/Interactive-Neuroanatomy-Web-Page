import React from "react"

// reactstrap components
import { Container, Row, Col } from "reactstrap"

export default function Content() {
  return (
    <>
      <div className="section section-content" data-background-color="black">
        <Container>
          <Row>
            <Col lg="6">
              <div className="image-container">
                <img
                  alt="..."
                  className="img img-raised rounded img-comments rellax"
                  data-rellax-speed="1"
                  src={require("../../../assets/img/presentation-page/content.png")}
                />
                <img
                  alt="..."
                  className="img img-raised rounded img-blog rellax"
                  data-rellax-speed="4"
                  src={require("../../../assets/img/presentation-page/content1.png")}
                />
              </div>
            </Col>
            <Col className="ml-auto mr-auto" lg="6">
              <div className="section-description">
                <h1 className="title">Enhanced Interaction Spaces</h1>
                <h5 className="category text-danger mb-5">
                  <strong>FOR GREATER USER ENGAGEMENT IN 3D</strong>
                </h5>
                <p className="description">
                  {`Tailored for complex user interactions, our 3D GLB viewer includes specialized spaces for things like detailed models, annotations, and multi-view scenarios. These areas are not only functional but also seamlessly blend with our Space Gray aesthetic.`}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  )
}
