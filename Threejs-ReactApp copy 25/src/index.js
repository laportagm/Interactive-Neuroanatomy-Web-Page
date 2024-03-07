import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

// Ensure the root element is present in the HTML
const rootElement = document.getElementById("root")

if (rootElement) {
  // Create a root instance to render the React app
  const root = ReactDOM.createRoot(rootElement)

  // Render the main App component into the root element
  root.render(<App />)
} else {
  // If the root element is not found, log an error message
  console.error(
    'Failed to find the root element. Check if your HTML file has an element with the id "root".'
  )
}

// Call reportWebVitals to measure the performance of your app
reportWebVitals()
