import React, { useContext } from "react"
import { UserContext } from "./Profile/UserContext" // Adjust this path to where your UserContext is located

// Import components from 'reactstrap'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap"

// Import additional components and assets
import ColorNavbar from "./IndexSections/ColorNavbar"
import DemoFooter from "./IndexSections/DemoFooter"
import "../../assets/img/dots.png" // Make sure paths to assets are correct
import "../../assets/img/path4.png"
import "../../assets/img/mike.jpg"

const carouselItems = [
  {
    altText: "",
    caption: "Big City Life, United States",
    src: require("../../assets/img/denys.jpg"), // Adjust paths as necessary
  },
  {
    altText: "",
    caption: "Somewhere Beyond, United States",
    src: require("../../assets/img/fabien-bazanegue.jpg"),
  },
  {
    altText: "",
    caption: "Stocks, United States",
    src: require("../../assets/img/mark-finn.jpg"),
  },
]

export default function ProfilePage() {
  const { userData } = useContext(UserContext)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [animating, setAnimating] = React.useState(false)
  const wrapper = React.useRef(null)

  React.useEffect(() => {
    // Existing effect logic
  }, [])

  const onExiting = () => {
    setAnimating(true)
  }

  const onExited = () => {
    setAnimating(false)
  }

  const next = () => {
    if (animating) return
    const nextIndex =
      activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex =
      activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="page-header">
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">
                  {userData.firstName} {userData.lastName}
                </h1>
                <p className="profile-description">
                  {/* Dynamic description based on userData */}
                </p>
                <Button color="primary">Primary Button</Button>
                {/* Other content */}
              </Col>
              <Col lg="6" md="6">
                {/* Card Example */}
                <Card>
                  <CardHeader>
                    <h4 className="title">Card Title</h4>
                  </CardHeader>
                  <CardBody>
                    <p>Card body content goes here.</p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={carouselItems}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {carouselItems.map((item, index) => {
              return (
                <CarouselItem
                  onExiting={onExiting}
                  onExited={onExited}
                  key={index}
                >
                  <img src={item.src} alt={item.altText} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{item.caption}</h5>
                  </div>
                </CarouselItem>
              )
            })}
          </Carousel>
        </div>
        {/* Other sections of the profile page */}
        <DemoFooter />
      </div>
    </>
  )
}
