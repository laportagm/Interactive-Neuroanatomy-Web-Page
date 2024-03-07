import React, { useState, useEffect } from "react"
import "./css/ScrollToTopButton.css" // Import the CSS for styling

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Function to toggle visibility of the button
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top">
          &#8679; {/* Unicode for upwards arrow */}
        </button>
      )}
    </div>
  )
}

export default ScrollToTopButton
