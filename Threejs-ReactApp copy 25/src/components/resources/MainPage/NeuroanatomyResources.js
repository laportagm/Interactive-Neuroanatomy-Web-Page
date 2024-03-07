import React, { useEffect } from "react"
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap"
import { Link } from "react-router-dom" // Import Link for routing
import DemoFooter from "../../views/IndexSections/DemoFooter"
import ColorNavbar from "../../views/IndexSections/ColorNavbar"
import BootstrapPagination from "../components/BootstrapPagination"
import "../css/NeuroanatomyResources.css"

function FullBackgroundCard({ imageUrl, category, title, route }) {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Col md="6">
      <Link to={route} style={{ textDecoration: "none" }}>
        {/* Wrap the entire card with Link */}
        <Card className="card-blog card-background" data-animation={true}>
          <div
            className="full-background"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <CardBody>
            <div className="content-bottom">
              <h6 className="card-category">{category}</h6>
              <CardTitle tag="h3">{title}</CardTitle>
            </div>
          </CardBody>
        </Card>
      </Link>
    </Col>
  )
}

function NeuroanatomyResources() {
  const wrapper = React.createRef()

  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div
          className="page-header header-filter"
          data-parallax={true}
          style={{
            backgroundImage:
              "url(" + require("assets/img/claudia-ramirez.jpg") + ")",
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h1 className="title">
                  Neuroanatomy Interactive Learning Resources
                </h1>
                <h5 className="description">Serenity in Neural Exploration</h5>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="transition-gradient" />
        <div className="cards">
          <Container>
            <div className="title-1">
              <h3>
                <small>
                  Explore Our Neuroanatomy Learning Resource Pages Below:
                </small>
              </h3>
            </div>
            <Row>
              <FullBackgroundCard
                imageUrl={require("assets/img/matthew-henry.jpg")}
                category="Functional Neuroanatomy"
                title="Exploring the Brainstem: A Gateway to Neural Function"
                route="/brainstem-information"
              />
              <FullBackgroundCard
                imageUrl={require("assets/img/marc-olivier-jodoin.jpg")}
                category="Functional Neuroanatomy"
                title="The Intricacies of Spinal Nerves: A Structural Overview"
                route="/spinal-nerves"
              />
              <FullBackgroundCard
                imageUrl={require("assets/img/waranont.jpg")}
                category="Pending"
                title="Pending Title"
                route="/pending-1"
              />
              <FullBackgroundCard
                imageUrl={require("assets/img/waranont.jpg")}
                category="Pending"
                title="Pending Title"
                route="/pending-2"
              />
            </Row>
          </Container>
          <div className="visually-appealing-spacer2">
            <hr className="section-divider2" />
          </div>
          <BootstrapPagination />
        </div>
        <DemoFooter />
      </div>
    </>
  )
}

export default NeuroanatomyResources
