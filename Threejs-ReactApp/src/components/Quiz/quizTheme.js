// quizTheme.js

// Define basic color palette
const colors = {
  primary: "#007bff",
  secondary: "#6c757d",
  success: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#17a2b8",
  light: "#f8f9fa",
  dark: "#343a40",
  background: "#f4f4f4",
  text: "#212529",
}

// Define typography
const typography = {
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: "1rem",
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
}

// Define breakpoints for responsive design
const breakpoints = {
  xs: "0",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
}

// Define shadows
const shadows = {
  default: "0px 1px 3px rgba(0, 0, 0, 0.2)",
  medium: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  large: "0px 10px 20px rgba(0, 0, 0, 0.15)",
}

// Utility functions for spacing and font-sizing
const spacing = (value) => `${value * 0.25}rem`
const fontSize = (value) => `${value * 0.125}rem`

// Export the theme
const quizTheme = {
  colors,
  typography,
  breakpoints,
  shadows,
  spacing,
  fontSize,
}

export default quizTheme

/*
Usage in a component:
import quizTheme from './quizTheme';

<div style={{ 
  color: quizTheme.colors.primary, 
  fontFamily: quizTheme.typography.fontFamily,
  padding: quizTheme.spacing(4),
  fontSize: quizTheme.fontSize(16),
  boxShadow: quizTheme.shadows.medium
}}>
  Your content
</div>
*/
