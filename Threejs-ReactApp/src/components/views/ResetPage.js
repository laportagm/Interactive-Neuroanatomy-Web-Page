import React, { useState, useEffect, useRef } from "react"
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

export default function ResetPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [emailFocus, setEmailFocus] = useState(false)
  const [error, setError] = useState("")
  const wrapper = useRef(null)

  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    wrapper.current.scrollTop = 0
    document.body.classList.add("reset-page")
    return function cleanup() {
      document.body.classList.remove("reset-page")
    }
  }, [])

  const handleResetRequest = async (e) => {
    e.preventDefault()
    // Implement the logic to handle the password reset request.
    // This usually involves sending an email to the user with a reset link.
    try {
      // Here you would call your backend API to initiate the password reset.
      console.log("Password reset email sent to:", email)
      // Show a success message or navigate the user to a confirmation page.
    } catch (err) {
      // Log the error and set error state to display an error message.
      console.error("Error sending password reset email:", err)
      setError("Failed to send password reset email. Please try again.")
    }
  }

  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="page-header">
          <Container>
            <Col className="mx-auto" lg="5" md="8">
              <Card className="card-login">
                <Form className="form" onSubmit={handleResetRequest}>
                  <CardHeader>
                    <CardImg
                      alt="..."
                      src={require("../../assets/img/shape.png")}
                    />
                    <CardTitle tag="h4">Reset Password</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <h4 className="description text-center">
                      Enter your email address to reset your password.
                    </h4>
                    <InputGroup
                      className={classnames("input-lg", {
                        "input-group-focus": emailFocus,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Your email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        aria-label="Your email"
                      />
                    </InputGroup>
                    {error && <div className="text-danger">{error}</div>}
                    <Button
                      block
                      className="btn-round"
                      color="warning"
                      type="submit"
                      size="lg"
                    >
                      Request Reset
                    </Button>
                  </CardBody>
                  <CardFooter>
                    <div className="pull-left ml-3 mb-3">
                      <h6>
                        <Button
                          className="link footer-link"
                          color="transparent"
                          onClick={() => navigate("/login")}
                        >
                          Back to Sign in
                        </Button>
                      </h6>
                    </div>
                    <div className="pull-right mr-3 mb-3">
                      <h6>
                        <Button
                          className="link footer-link"
                          color="transparent"
                          onClick={(e) => e.preventDefault()} // Replace with an actual help link or function
                        >
                          Need Help?
                        </Button>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  )
}
