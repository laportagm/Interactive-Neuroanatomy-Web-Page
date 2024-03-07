import React from "react"
import "../css/StartQuizButton.css" // Assuming styles are defined in a separate CSS file

const StartQuizButton = ({ onClick }) => {
  return (
    <button className="startQuizButton" onClick={onClick}>
      Start Quiz
    </button>
  )
}

export default StartQuizButton
