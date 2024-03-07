import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap"
import ColorNavbar from "./IndexSections/ColorNavbar"
import DemoFooter from "./IndexSections/DemoFooter"
import "./ExtraComponents/css/NeuroanatomyGuide.css"
import "./ExtraComponents/css/Arrow.css"
import ScrollToTopButton from "./ExtraComponents/ScrollToTopButton"

const NeuroanatomyGuide = () => {
  const [isImageOpen, setIsImageOpen] = useState(false)

  const toggleImage = () => {
    setIsImageOpen(!isImageOpen)
  }

  return (
    <>
      <ColorNavbar />
      <div className="page-header header-filter">
        <div
          className="page-header-image"
          data-parallax={true}
          style={{
            backgroundImage:
              "url(" +
              require("../../assets/img/SegmentationInfographic.jpg") +
              ")",
          }}
        />
        <div className="content-center brand">
          <h1 className="text-warning">How Did We Create our 3D Models</h1>
        </div>
      </div>
      <div className="transition-gradient" />

      <div className="visually-appealing-spacer2"></div>

      <div className="title-section">
        <h2>How Did We Create our 3D Models?</h2>
        <p>
          Embark on a journey through the intricate process of creating highly
          detailed 3D models of human neuroanatomy. This guide illuminates each
          step of our methodology, from the initial data acquisition to the
          final touches that bring these models to life. Whether for medical
          education, research, or technological applications, our process
          ensures accuracy and realism. Let's explore how these digital
          masterpieces are crafted.
        </p>
      </div>

      <Container id="page-transition-info">
        <div className="visually-appealing-spacer2"></div>

        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle tag="h1">Introduction</CardTitle>
                <CardText>
                  Creating realistic 3D models of human neuroanatomy is an
                  intricate process that involves multiple stages, from data
                  acquisition to detailed refinement. This guide provides a
                  comprehensive overview of the steps and software tools
                  involved in crafting these detailed models, essential in
                  medical education and research.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <div className="visually-appealing-spacer2"></div>

        <div className="arrow-down">
          <div className="arrow-bar"></div>
          <div className="arrow-head"></div>
        </div>

        <Row>
          <Col xs="auto">
            <Button onClick={toggleImage}>
              {isImageOpen ? "Close Image" : "Open Image"}
            </Button>
          </Col>
          <Col>
            {isImageOpen && (
              <img
                src={require("../../assets/img/InteractiveButton1.jpg")}
                alt="3D Model Display"
                style={{ maxWidth: "100%" }}
              />
            )}
          </Col>
        </Row>
        <div className="visually-appealing-spacer2"></div>

        <div className="visually-appealing-spacer2"></div>

        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle tag="h2">1. Data Gathering</CardTitle>
                <CardText>
                  Collect detailed medical images of human neuroanatomy. Utilize
                  MRI and CT scans to capture accurate anatomical data. Employ
                  imaging software, like 3D Slicer, for initial data
                  visualization and organization.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <div className="visually-appealing-spacer2"></div>

        <div className="arrow-down">
          <div className="arrow-bar"></div>
          <div className="arrow-head"></div>
        </div>

        <Row>
          <Col>
            {isImageOpen && (
              <img
                src={require("../../assets/img/InteractiveButton1.jpg")}
                alt="3D Model Display"
                style={{ maxWidth: "100%" }}
              />
            )}
          </Col>
          <Col xs="auto">
            <Button onClick={toggleImage}>
              {isImageOpen ? "Close Image" : "Open Image"}
            </Button>
          </Col>
        </Row>

        <div className="visually-appealing-spacer2"></div>

        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle tag="h2">2. Segmentation</CardTitle>
                <CardText>
                  Delineate distinct anatomical structures for 3D modeling. Use
                  specialized software (e.g., 3D Slicer) for precise
                  segmentation. Identify and create regions of interest within
                  the images as a precursor to 3D modeling.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <div className="visually-appealing-spacer2"></div>

        <div className="arrow-down">
          <div className="arrow-bar"></div>
          <div className="arrow-head"></div>
        </div>

        <Row>
          <Col xs="auto">
            <Button onClick={toggleImage}>
              {isImageOpen ? "Close Image" : "Open Image"}
            </Button>
          </Col>
          <Col>
            {isImageOpen && (
              <img
                src={require("../../assets/img/InteractiveButton1.jpg")}
                alt="3D Model Display"
                style={{ maxWidth: "100%" }}
              />
            )}
          </Col>
        </Row>
        <div className="visually-appealing-spacer2"></div>

        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle tag="h2">
                  3. Grayscale Heightmap Generation
                </CardTitle>
                <CardText>
                  Transform segmented images into a format suitable for 3D
                  modeling. Convert segmented images to grayscale heightmaps
                  using tools like ImageJ/FIJI. These heightmaps are crucial as
                  they depict elevation variations in the neuroanatomy.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <div className="visually-appealing-spacer2"></div>

        <div className="arrow-down">
          <div className="arrow-bar"></div>
          <div className="arrow-head"></div>
        </div>

        <Row>
          <Col>
            {isImageOpen && (
              <img
                src={require("../../assets/img/InteractiveButton1.jpg")}
                alt="3D Model Display"
                style={{ maxWidth: "100%" }}
              />
            )}
          </Col>
          <Col xs="auto">
            <Button onClick={toggleImage}>
              {isImageOpen ? "Close Image" : "Open Image"}
            </Button>
          </Col>
        </Row>

        <div className="visually-appealing-spacer2"></div>

        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle tag="h2">4. Initial 3D Model Creation</CardTitle>
                <CardText>
                  Develop a preliminary 3D model from the heightmaps. Transform
                  grayscale heightmaps into 3D STL files using heightmap to STL
                  converters. This stage serves as a foundation for advanced
                  refinement in 3D modeling software.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <div className="visually-appealing-spacer2"></div>

        <div className="arrow-down">
          <div className="arrow-bar"></div>
          <div className="arrow-head"></div>
        </div>

        <Row>
          <Col xs="auto">
            <Button onClick={toggleImage}>
              {isImageOpen ? "Close Image" : "Open Image"}
            </Button>
          </Col>
          <Col>
            {isImageOpen && (
              <img
                src={require("../../assets/img/InteractiveButton1.jpg")}
                alt="3D Model Display"
                style={{ maxWidth: "100%" }}
              />
            )}
          </Col>
        </Row>
        <div className="visually-appealing-spacer2"></div>

        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle tag="h2">5. Refinement</CardTitle>
                <CardText>
                  Enhance the initial model to achieve realistic detail. Utilize
                  Blender for detailed refinement, adding textures and
                  anatomical details. Optionally, employ Nomad Sculpt for
                  additional sculpting and detailing.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <div className="visually-appealing-spacer2"></div>

        <div className="arrow-down">
          <div className="arrow-bar"></div>
          <div className="arrow-head"></div>
        </div>

        <Row>
          <Col>
            {isImageOpen && (
              <img
                src={require("../../assets/img/InteractiveButton1.jpg")}
                alt="3D Model Display"
                style={{ maxWidth: "100%" }}
              />
            )}
          </Col>
          <Col xs="auto">
            <Button onClick={toggleImage}>
              {isImageOpen ? "Close Image" : "Open Image"}
            </Button>
          </Col>
        </Row>

        <div className="visually-appealing-spacer2"></div>

        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle tag="h2">6. Texture Enhancement</CardTitle>
                <CardText>
                  Improve the model’s texture for a more realistic appearance.
                  Use software like Photoshop for texture map enhancement. Focus
                  on creating realistic color textures and enhancing surface
                  visual quality.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <div className="visually-appealing-spacer2"></div>

        <div className="arrow-down">
          <div className="arrow-bar"></div>
          <div className="arrow-head"></div>
        </div>

        <Row>
          <Col xs="auto">
            <Button onClick={toggleImage}>
              {isImageOpen ? "Close Image" : "Open Image"}
            </Button>
          </Col>
          <Col>
            {isImageOpen && (
              <img
                src={require("../../assets/img/InteractiveButton1.jpg")}
                alt="3D Model Display"
                style={{ maxWidth: "100%" }}
              />
            )}
          </Col>
        </Row>
        <div className="visually-appealing-spacer2"></div>

        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle tag="h2">7. Quality Assurance</CardTitle>
                <CardText>
                  Ensure the model's accuracy and realism. Perform comprehensive
                  checks in Blender for accuracy. Consult with medical
                  professionals to rectify any discrepancies.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <div className="visually-appealing-spacer2"></div>

        <div className="arrow-down">
          <div className="arrow-bar"></div>
          <div className="arrow-head"></div>
        </div>

        <Row>
          <Col>
            {isImageOpen && (
              <img
                src={require("../../assets/img/InteractiveButton1.jpg")}
                alt="3D Model Display"
                style={{ maxWidth: "100%" }}
              />
            )}
          </Col>
          <Col xs="auto">
            <Button onClick={toggleImage}>
              {isImageOpen ? "Close Image" : "Open Image"}
            </Button>
          </Col>
        </Row>

        <div className="visually-appealing-spacer2"></div>

        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle tag="h2">8. Final Model Export</CardTitle>
                <CardText>
                  Prepare the model for application across various platforms.
                  Export the model in formats like STL, OBJ, or FBX for broad
                  compatibility. Optimize the model for performance in different
                  rendering software and platforms.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <div className="visually-appealing-spacer2"></div>

        <div className="arrow-down">
          <div className="arrow-bar"></div>
          <div className="arrow-head"></div>
        </div>

        <Row>
          <Col xs="auto">
            <Button onClick={toggleImage}>
              {isImageOpen ? "Close Image" : "Open Image"}
            </Button>
          </Col>
          <Col>
            {isImageOpen && (
              <img
                src={require("../../assets/img/InteractiveButton1.jpg")}
                alt="3D Model Display"
                style={{ maxWidth: "100%" }}
              />
            )}
          </Col>
        </Row>
        <div className="visually-appealing-spacer2"></div>

        <Card>
          <CardBody>
            <CardTitle tag="h3">Conclusion</CardTitle>
            <CardText>
              The creation of realistic 3D models of human neuroanatomy is a
              meticulous and multi-step process. By leveraging tools such as
              Blender, Nomad Sculpt, Photoshop, ImageJ/FIJI, 3D Slicer, and
              heightmap to STL converters, these models become invaluable
              resources in medical fields, offering a detailed and accurate
              representation of the human nervous system.
            </CardText>
          </CardBody>
        </Card>
      </Container>
      <div className="visually-appealing-spacer2"></div>
      <div className="visually-appealing-spacer2"></div>
      <DemoFooter />
      <ScrollToTopButton />
    </>
  )
}

export default NeuroanatomyGuide
