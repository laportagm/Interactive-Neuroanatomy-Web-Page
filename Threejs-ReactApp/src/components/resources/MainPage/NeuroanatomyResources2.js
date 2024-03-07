import React from "react"
import {
  Card,
  CardBody,
  CardTitle,
  CardLink,
  Container,
  Row,
  Col,
} from "reactstrap"
import DemoFooter from "../../views/IndexSections/DemoFooter"
import ColorNavbar from "../../views/IndexSections/ColorNavbar"
import BootstrapPagination from "../components/BootstrapPagination"
import "../css/NeuroanatomyResources.css"

function FullBackgroundCard({ imageUrl, category, title }) {
  return (
    <Col md="6">
      <Card className="card-blog card-background" data-animation={true}>
        <div
          className="full-background"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <CardBody>
          <div className="content-bottom">
            <h6 className="card-category">{category}</h6>
            <CardLink href="#pablo" onClick={(e) => e.preventDefault()}>
              <CardTitle tag="h3">{title}</CardTitle>
            </CardLink>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

function NeuroanatomyResources() {
  // You need to define the 'wrapper' ref. Assuming you have it defined elsewhere.
  const wrapper = React.createRef()

  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="page-header header-filter">
          <div
            className="page-header-image"
            data-parallax={true}
            style={{
              backgroundImage:
                "url(" + require("assets/img/claudia-ramirez.jpg") + ")",
            }}
          />
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
      </div>
      <div className="cards">
        <Container>
          <div className="title-1">
            <h3>
              <small>
                Explore Our Neuroanatomy Learning Resource Pages Below:{" "}
              </small>
            </h3>
          </div>
          <Row>
            <FullBackgroundCard
              imageUrl={require("assets/img/waranont.jpg")}
              category="Pending"
              title="Pending Ttile"
            />
            <FullBackgroundCard
              imageUrl={require("assets/img/waranont.jpg")}
              category="Pending"
              title="Pending Ttile"
            />
            <FullBackgroundCard
              imageUrl={require("assets/img/waranont.jpg")}
              category="Pending"
              title="Pending Ttile"
            />
            <FullBackgroundCard
              imageUrl={require("assets/img/waranont.jpg")}
              category="Pending"
              title="Pending Ttile"
            />
          </Row>
        </Container>
        {/* Visually Appealing Spacer */}
        <div className="visually-appealing-spacer2">
          <hr className="section-divider2" />
        </div>
        {/* Center the pagination */}
        <BootstrapPagination />
      </div>
      <DemoFooter />
    </>
  )
}

export default NeuroanatomyResources
