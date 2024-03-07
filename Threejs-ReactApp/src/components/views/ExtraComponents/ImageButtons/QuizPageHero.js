import React from "react"
import backgroundImage from "../../../../assets/img/quizheader.jpg" // Adjust the path as needed
import "../../../Quiz/css/QuizPage.css" // Adjust the path as needed

function QuizPageHero() {
  return (
    <div>
      <header className="page-header header-filter">
        <div
          className="page-header-image"
          data-parallax={true}
          style={{
            backgroundImage: `url(${backgroundImage})`,
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
    </div>
  )
}

export default QuizPageHero
