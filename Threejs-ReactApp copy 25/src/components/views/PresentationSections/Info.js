import React from "react"

// reactstrap components
import { Container, Row, Col } from "reactstrap"

import primaryImage from "../../../assets/img/feature-blob/primary.png"
import warningImage from "../../../assets/img/feature-blob/warning.png"
import successImage from "../../../assets/img/feature-blob/success.png"

export default function Info() {
  return (
    <>
      <Container>
        <Row>
          <Col md="4">
            <div className="info info-hover">
              <div className="icon icon-primary">
                <img alt="..." className="bg-blob" src={primaryImage} />
                <i className="tim-icons icon-user-run" />
              </div>
              <h2 className="info-title">
                Extensive Range of Modular Elements
              </h2>
              <h4 className="description">
                Each interactive feature within the 3D GLB viewer is designed as
                a modular element. These elements are visually consistent,
                offering a seamless user experience.
              </h4>
            </div>
          </Col>
          <Col md="4">
            <div className="info info-hover" style={{ marginTop: "-50px" }}>
              <div className="icon icon-warning">
                <img alt="..." className="bg-blob" src={warningImage} />
                <i className="tim-icons icon-atom" />
              </div>
              <h2 className="info-title">Interactive and Immersive Scenes</h2>
              <h4 className="description">
                Creating an engaging user experience is as simple as layering
                together various immersive scenes. From showcasing intricate GLB
                models to providing interactive options like zoom and rotate,
                each scene is built for easy customization and high user
                engagement.
              </h4>
            </div>
          </Col>
          <Col md="4">
            <div className="info info-hover">
              <div className="icon icon-success">
                <img alt="..." className="bg-blob" src={successImage} />
                <i className="tim-icons icon-gift-2" />
              </div>
              <h2 className="info-title">
                Variety of Pre-Configured Environments
              </h2>
              <p className="description">
                Each example environment is optimized for responsiveness across
                varied devices and is ready for immediate integration.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
