import React, { useState, useEffect, useRef } from "react"
import axiosInstance from "../../axios" // Import the Axios instance from your configuration
import classnames from "classnames"
import { useNavigate } from "react-router-dom"
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Label, // Import Label here
} from "reactstrap"
import ColorNavbar from "./IndexSections/ColorNavbar"
import DemoFooter from "./IndexSections/DemoFooter"

export default function RegisterPage() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullNameFocus, setFullNameFocus] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [squares1to6, setSquares1to6] = useState("")
  const [squares7and8, setSquares7and8] = useState("")
  const wrapper = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    wrapper.current.scrollTop = 0
    document.body.classList.add("register-page")
    document.documentElement.addEventListener("mousemove", followCursor)
    return function cleanup() {
      document.body.classList.remove("register-page")
      document.documentElement.removeEventListener("mousemove", followCursor)
    }
  }, [])

  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2
    let posY = event.clientY - window.innerWidth / 6
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    )
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    )
  }
  const handleRegistration = async (e) => {
    e.preventDefault()

    try {
      const userData = {
        username: fullName,
        email,
        password,
      }

      console.log("Registration attempt:", userData)

      const response = await axiosInstance.post("/users/register", userData)

      console.log("Entire response data:", response.data)
      console.log(
        "Registration response:",
        `Status: ${response.status} ${response.statusText}`
      )

      // Check for the HTTP status code 201 Created instead of response.data.success
      if (response.status === 201) {
        console.log("Registration successful, navigating to login")
        navigate("/login")
      } else {
        console.log("Registration failed:", response.data.message)
        alert(`Registration unsuccessful: ${response.data.message}`)
      }
    } catch (error) {
      console.error("Registration error:", error)

      if (error.response) {
        // Server responded with an error
        console.error("Server error details:", error.response.data)
        console.error("Server error status:", error.response.status)
        console.error("Server error status text:", error.response.statusText)

        alert(
          `Registration unsuccessful: ${
            error.response.data.message ||
            "An error occurred during registration."
          }`
        )
      } else {
        // Network or other client-side errors
        console.error("Client-side error details:", error)
        alert("An error occurred during registration. Please try again later.")
      }
    }
  }

  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="page-header">
          <div className="page-header-image" />
          <Container>
            <Row>
              <Col className="mx-auto" lg="5" md="12">
                <div
                  className="square square-7"
                  id="square7"
                  style={{ transform: squares7and8 }}
                />
                <div
                  className="square square-8"
                  id="square8"
                  style={{ transform: squares7and8 }}
                />
                <Card className="card-register">
                  <CardHeader>
                    <CardImg
                      alt="..."
                      src={require("../../assets/img/square1.png")}
                    />
                    <CardTitle tag="h4">Register</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form className="form" onSubmit={handleRegistration}>
                      <InputGroup
                        className={classnames({
                          "input-group-focus": fullNameFocus,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Full Name"
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          onFocus={() => setFullNameFocus(true)}
                          onBlur={() => setFullNameFocus(false)}
                        />
                      </InputGroup>
                      <InputGroup
                        className={classnames({
                          "input-group-focus": emailFocus,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                        />
                      </InputGroup>
                      <InputGroup
                        className={classnames({
                          "input-group-focus": passwordFocus,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-lock-circle" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onFocus={() => setPasswordFocus(true)}
                          onBlur={() => setPasswordFocus(false)}
                        />
                      </InputGroup>
                      <FormGroup check className="text-left">
                        <Label check>
                          <Input type="checkbox" />
                          <span className="form-check-sign" />I agree to the
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            terms and conditions
                          </a>
                          .
                        </Label>
                      </FormGroup>
                    </Form>
                  </CardBody>
                  <CardFooter>
                    <Button
                      className="btn-round"
                      color="info"
                      onClick={handleRegistration}
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
          <div className="register-bg" />
          <div
            className="square square-1"
            id="square1"
            style={{ transform: squares1to6 }}
          />
          <div
            className="square square-2"
            id="square2"
            style={{ transform: squares1to6 }}
          />
          <div
            className="square square-3"
            id="square3"
            style={{ transform: squares1to6 }}
          />
          <div
            className="square square-4"
            id="square4"
            style={{ transform: squares1to6 }}
          />
          <div
            className="square square-5"
            id="square5"
            style={{ transform: squares1to6 }}
          />
          <div
            className="square square-6"
            id="square6"
            style={{ transform: squares1to6 }}
          />
        </div>
        <DemoFooter />
      </div>
    </>
  )
}
