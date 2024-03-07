import React, { useState, useEffect } from "react"
import axiosInstance from "../../axios" // Import the Axios instance from your configuration
import { useNavigate } from "react-router-dom"
import classnames from "classnames"
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap"
import ColorNavbar from "./IndexSections/ColorNavbar"
import DemoFooter from "./IndexSections/DemoFooter"

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailFocus, setEmailFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    document.body.classList.add("login-page")
    return function cleanup() {
      document.body.classList.remove("login-page")

      window.scrollTo(0, 0)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError("")

    console.log("Login attempt:", { email, password }) // Log the credentials being submitted

    try {
      const response = await axiosInstance.post("/users/login", {
        email,
        password,
      })

      console.log("Entire response data:", response.data) // Log the entire response data
      console.log("Login response:", response) // Log the response from the server

      console.log("Login response message:", response.data.message)
      console.log("Expected message:", "Logged in successfully.")
      console.log(
        "Are messages strictly equal:",
        response.data.message === "Logged in successfully."
      )

      // Compare lengths to see if there is a hidden character
      console.log(
        "Response message length:",
        response.data.message.length,
        "Expected message length:",
        "Logged in successfully.".length
      )

      // Use a less strict comparison (consider using .includes as a temporary workaround)
      if (response.data.message.includes("Logged in successfully.")) {
        console.log("Login successful, navigating to account settings")
        navigate("/account-settings")
      } else {
        console.log("Login failed:", response.data.message)
        setError("Invalid login credentials.")
      }
    } catch (error) {
      console.error("Login error:", error) // Log any errors that occur during the process
      setError(
        error.response?.data?.message || "An error occurred during login."
      )
    } finally {
      setIsSubmitting(false)
      console.log("Login process complete, submitting state set to false")
    }
  }

  return (
    <React.Fragment>
      <ColorNavbar />
      <div className="page-header">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="page-header-image" />
        <Container>
          <Col className="mx-auto" lg="5" md="8">
            <Card className="card-login">
              <Form className="form" onSubmit={handleLogin}>
                <CardHeader>
                  <CardImg
                    alt="..."
                    src={require("assets/img/square-purple-1.png")}
                  />
                  <CardTitle tag="h4">Login</CardTitle>
                </CardHeader>
                <CardBody>
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
                      placeholder="Email..."
                      type="email"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
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
                      placeholder="Password..."
                      type="password"
                      onFocus={() => setPasswordFocus(true)}
                      onBlur={() => setPasswordFocus(false)}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password" // Add this line
                      required
                    />
                  </InputGroup>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    block
                    className="btn-round"
                    color="primary"
                    size="lg"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? "Processing..." : "Login"}
                  </Button>
                </CardFooter>
                <div className="pull-left ml-3 mb-3">
                  <h6>
                    <a
                      className="link footer-link"
                      href="#register"
                      onClick={(e) => {
                        e.preventDefault()
                        navigate("/register") // Redirect to the registration page
                      }}
                    >
                      Create Account
                    </a>
                  </h6>
                </div>
                <div className="pull-right mr-3 mb-3">
                  <h6>
                    <a
                      className="link footer-link"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault()
                        navigate("/reset-page") // Redirect to the reset password page
                      }}
                    >
                      Need Help?
                    </a>
                  </h6>
                </div>
              </Form>
              {error && (
                <div className="text-center text-danger mt-2">{error}</div>
              )}
            </Card>
          </Col>
        </Container>
      </div>
      <DemoFooter />
    </React.Fragment>
  )
}
