import React from "react"
import { Col, Button, ProgressBar } from "react-bootstrap"
import Quiz from "react-quiz-component"
import "../css/QuizContent.css"

const QuizContent = ({
  state,
  startQuiz,
  quizData,
  handleCompleteQuiz,
  updateProgress,
}) => {
  return (
    <Col xs={12} className="text-center">
      {!state.quizStarted ? (
        <Button
          variant="outline-primary"
          onClick={startQuiz}
          className="interactive-button custom-button"
        >
          Start Quiz
        </Button>
      ) : (
        <div>
          <Quiz
            quiz={quizData}
            shuffle={true}
            showInstantFeedback={true}
            onComplete={handleCompleteQuiz}
            onProgress={updateProgress}
          />
          <ProgressBar
            now={state.progress}
            variant="info"
            animated
            className="dynamic-progress-bar custom-progress-bar"
          />
        </div>
      )}
    </Col>
  )
}

export default QuizContent
