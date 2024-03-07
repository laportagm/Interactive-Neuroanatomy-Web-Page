import { useEffect } from "react"
import "../Quiz/css/ModalAnimation.css"

// Function to apply blow-up animation
export const useBlowUpAnimation = (modalRef, isOpen) => {
  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Apply the blow-up animation
      modalRef.current.style.animation = "blowUp 0.5s ease"
    }
  }, [isOpen, modalRef])
}

// Keyframes for the blow-up animation
export const blowUpKeyframes = `
  @keyframes blowUp {
    from {
      transform: scale(0.5);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`

// Function to ensure the modal opens in the center of the screen
export const useCenterModal = (modalRef, isOpen) => {
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const modalElement = modalRef.current
      const windowHeight = window.innerHeight
      const windowWidth = window.innerWidth
      const modalHeight = modalElement.offsetHeight
      const modalWidth = modalElement.offsetWidth

      // Calculate the top and left values to center the modal
      const top = (windowHeight - modalHeight) / 2
      const left = (windowWidth - modalWidth) / 2

      modalElement.style.position = "absolute"
      modalElement.style.top = `${top}px`
      modalElement.style.left = `${left}px`
    }
  }, [isOpen, modalRef])
}
