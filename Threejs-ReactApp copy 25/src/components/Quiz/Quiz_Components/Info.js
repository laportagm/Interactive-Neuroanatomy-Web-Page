import React from "react"

// reactstrap components
import { Container, Row, Col } from "reactstrap"

// import primaryImage from "../../../assets/img/feature-blob/primary.png"
// import warningImage from "../../../assets/img/feature-blob/warning.png"
// import successImage from "../../../assets/img/feature-blob/success.png"

export default function Info() {
  return (
    <>
      <Container>
        <Row>
          <div className="info info-hover">
            <div className="icon icon-primary">
              <i className="tim-icons icon-user-run" />
            </div>
            <h2 className="info-title">Engaging Quiz Introduction</h2>
            <h4 className="description">
              Introduce users to the quiz with an engaging summary. Explain the
              topics covered, the format of the quiz, and how it integrates with
              the 3D GLB viewer for an immersive learning experience.
            </h4>
          </div>
          <Col md="4">
            <div className="info info-hover" style={{ marginTop: "-50px" }}>
              <div className="icon icon-warning">
                <i className="tim-icons icon-atom" />
              </div>
              <h2 className="info-title">Dynamic Quiz Questions</h2>
              <h4 className="description">
                Display a series of questions related to the 3D models. Allow
                users to interact with the models to find answers, enhancing
                engagement and learning through interaction.
              </h4>
            </div>
          </Col>
          <Col md="4">
            <div className="info info-hover">
              <div className="icon icon-success">
                <i className="tim-icons icon-gift-2" />
              </div>
              <h2 className="info-title">Instant Feedback and Scoring</h2>
              <p className="description">
                Provide instant feedback on user answers, including correct
                answers and explanations. Offer a scoring system to track
                progress and encourage further interaction with the 3D models.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
