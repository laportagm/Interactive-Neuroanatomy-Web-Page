import React from "react"
import { Button, Row, Col } from "react-bootstrap"

const QuizSelection = ({ quizzes, currentQuiz, handleQuizSelection }) => {
  return (
    <Row className="justify-content-center">
      <Col xs={12} className="text-center">
        <div className="button-container">
          {quizzes.map((quiz, index) => (
            <Button
              key={index}
              variant={index === currentQuiz ? "primary" : "secondary"}
              onClick={() => handleQuizSelection(index)}
              className="m-2 button"
            >
              {quiz.quizTitle}
            </Button>
          ))}
        </div>
      </Col>
    </Row>
  )
}

export default QuizSelection
