import React, { useState, useEffect } from "react"
import { Container, Card } from "react-bootstrap"
import QuizTitle from "./QuizTitle"
import QuizSelector from "../QuizSelector"
import QuizContent from "./QuizContent"
import styles from "../css/QuizLayout.css" // Importing CSS module

const QuizLayout = ({
  state,
  allQuizzes,
  handleQuizSelection,
  startQuiz,
  handleCompleteQuiz,
  updateProgress,
  quizTheme,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Determine container class based on window width
  const containerClass =
    windowWidth > 850 ? styles.quizContainer : styles.quizContainerMobile

  return (
    <Container className={`${containerClass}`} style={quizTheme}>
      <Card className={`${styles.quizCard} enhanced-card`}>
        <Card.Body>
          <QuizSelector
            quizzes={allQuizzes}
            onQuizSelect={handleQuizSelection}
            className={styles.advancedQuizSelector}
          />
          <QuizTitle title={allQuizzes[state.currentQuiz].quizTitle} />
          <QuizContent
            state={state}
            startQuiz={startQuiz}
            quizData={allQuizzes[state.currentQuiz]}
            handleCompleteQuiz={handleCompleteQuiz}
            updateProgress={updateProgress}
          />
        </Card.Body>
      </Card>
    </Container>
  )
}

export default QuizLayout
