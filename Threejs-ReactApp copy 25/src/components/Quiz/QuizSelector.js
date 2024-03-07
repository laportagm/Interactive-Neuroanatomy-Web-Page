import React from "react"
import { Dropdown, Row } from "react-bootstrap"
import styles from "./css/QuizSelector.module.css" // Import CSS module

const QuizSelector = ({ quizzes, onQuizSelect }) => {
  return (
    <Row className={styles["quiz-selector"]}>
      <Dropdown>
        <Dropdown.Toggle
          variant="outline-primary"
          id="quiz-selector-dropdown"
          className={styles["custom-dropdown-toggle"]} // Use CSS module class
        >
          Select Quiz
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles["custom-dropdown-menu"]}>
          {quizzes.map((quiz, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => onQuizSelect(index)}
              position-relative="true"
              style={{ cursor: "pointer" }}
              className={styles["quiz-selector-item"]} // Use CSS module class
            >
              {quiz.quizTitle}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Row>
  )
}

export default QuizSelector
