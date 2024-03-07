// useQuizLogic.js
import { useReducer, useCallback } from "react"

const initialState = {
  currentQuiz: 0,
  quizStarted: false,
  progress: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case "SELECT_QUIZ":
      return {
        ...state,
        currentQuiz: action.payload,
        quizStarted: false,
        progress: 0,
      }
    case "START_QUIZ":
      return { ...state, quizStarted: true }
    case "COMPLETE_QUIZ":
      console.log(action.payload)
      return { ...state, quizStarted: false, progress: 100 }
    case "UPDATE_PROGRESS":
      return {
        ...state,
        progress: (action.payload.current / action.payload.total) * 100,
      }
    default:
      return state
  }
}

export const useQuizLogic = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleQuizSelection = useCallback((quizIndex) => {
    dispatch({ type: "SELECT_QUIZ", payload: quizIndex })
  }, [])

  const startQuiz = useCallback(() => {
    dispatch({ type: "START_QUIZ" })
  }, [])

  const handleCompleteQuiz = useCallback((result) => {
    dispatch({ type: "COMPLETE_QUIZ", payload: result })
  }, [])

  const updateProgress = useCallback((currentStep, totalSteps) => {
    dispatch({
      type: "UPDATE_PROGRESS",
      payload: { current: currentStep, total: totalSteps },
    })
  }, [])

  return {
    state,
    handleQuizSelection,
    startQuiz,
    handleCompleteQuiz,
    updateProgress,
  }
}
