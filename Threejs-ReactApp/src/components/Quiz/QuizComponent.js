import React, { useState } from "react"
import Quiz from "react-quiz-component"
import quizData from "./Quizzes/quizData.json"
import {
  Paper,
  Typography,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { styled } from "@mui/material/styles"

// Enhanced styled components for a more modern look and feel
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: "auto",
  maxWidth: "80%",
  marginTop: theme.spacing(6),
  textAlign: "center",
  backgroundColor: theme.palette.background.default,
  boxShadow: "0px 4px 20px rgba(0,0,0,0.25)",
  borderRadius: "15px",
}))

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5),
  fontSize: "1rem",
  fontWeight: "bold",
  color: theme.palette.getContrastText(theme.palette.secondary.main),
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}))

const QuizComponent = () => {
  const [result, setResult] = useState(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const onCompleteAction = (obj) => {
    setResult(obj)
  }

  return (
    <StyledPaper>
      {!result ? (
        <Quiz
          quiz={quizData.quizzes[0]} // Change index for different quizzes
          onComplete={onCompleteAction}
        />
      ) : (
        <Box padding={isMobile ? 3 : 5}>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            component="h2"
            gutterBottom
          >
            Your Score: {result.score}
          </Typography>
          {/* Additional result details can be rendered here */}
          <StyledButton variant="contained" onClick={() => setResult(null)}>
            Retry Quiz
          </StyledButton>
        </Box>
      )}
    </StyledPaper>
  )
}

export default QuizComponent
