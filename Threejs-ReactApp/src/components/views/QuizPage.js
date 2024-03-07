import React, { useEffect } from "react"
import { Container } from "react-bootstrap"
import ColorNavbar from "./IndexSections/ColorNavbar"
import DemoFooter from "./IndexSections/DemoFooter"
import ErrorBoundary from "../Quiz/ErrorBoundary"
import QuizLayout from "../Quiz/Quiz_Components/QuizLayout"
import { useQuizLogic } from "../Quiz/Quiz_Components/useQuizLogic"
import Brainstem from "../Quiz/Quizzes/Brainstem.json"
import SpinalNerves from "../Quiz/Quizzes/SpinalNerves.json"
import Info from "../Quiz/Quiz_Components/Info"
import ScrollToTopButton from "./ExtraComponents/ScrollToTopButton"
import quiztheme from "../Quiz/quizTheme"
import "../Quiz/css/QuizPage.css" // Keep this for global styles

const allQuizzes = [Brainstem, SpinalNerves]

const QuizPage = () => {
  const {
    state,
    handleQuizSelection,
    startQuiz,
    handleCompleteQuiz,
    updateProgress,
  } = useQuizLogic()

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="fixed-top">
        <ColorNavbar />
      </div>
      <header className="page-header header-filter">
        <div
          className="page-header-image"
          data-parallax={true}
          style={{
            backgroundImage:
              "url(" + require("../../assets/img/quizheader.jpg") + ")",
          }}
        />
        <div className="content-center brand">
          <h1 className="h1-seo">
            INV.
            <small className="text-warning">Quiz Page</small>
          </h1>
          <h3>Explore and Solidify Your Neuroanatomy Knowledge</h3>
        </div>
      </header>
      <div className="transition-gradient" />

      <div className="spacer"></div>

      <main className="page-container">
        <Info />
        <Container className="quiz">
          <ErrorBoundary>
            <QuizLayout
              state={state}
              allQuizzes={allQuizzes}
              handleQuizSelection={handleQuizSelection}
              startQuiz={startQuiz}
              handleCompleteQuiz={handleCompleteQuiz}
              updateProgress={updateProgress}
              quizTheme={quiztheme}
            />
          </ErrorBoundary>
        </Container>
        <div className="spacer"></div>
      </main>

      <DemoFooter />
      <ScrollToTopButton />
    </>
  )
}

export default React.memo(QuizPage)
