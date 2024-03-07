// QuizContentInfo.js
import React from "react"
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap"

const QuizContentInfo = () => {
  return (
    <Container className="mt-4 mb-4">
      <Row>
        <Col>
          <Jumbotron>
            <h1>Welcome to the Quiz!</h1>
            <p>
              Test your knowledge with our interactive quizzes. Select a topic,
              answer the questions, and see how much you've learned!
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}

export default QuizContentInfo
