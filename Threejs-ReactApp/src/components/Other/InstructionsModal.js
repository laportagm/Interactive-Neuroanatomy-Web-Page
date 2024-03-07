import React, { useState, useRef } from "react"

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { FaBookOpen, FaTimes } from "react-icons/fa"
import { Row } from "react-bootstrap"

const InstructionsModal = ({ buttonLabel }) => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const modalRef = useRef(null)

  const styles = {
    button: {
      backgroundColor: "#007BFF", // Primary color
      color: "#fff",
      padding: "7px 12px", // Increased padding
      borderRadius: "8px",
      width: "130px", // Slightly wider
      height: "45px", // Slightly taller
      cursor: "pointer",
      fontSize: "18px",
      fontWeight: "bold",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle box shadow
    },
    modalContainer: {
      display: "flex",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      minHeight: "580px",
      width: "100%",
      maxWidth: "700px",
      transform: `scale(${modal ? 1 : 0})`,
      transition: "transform 0.3s ease-in-out",
      padding: "4px 4px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      bordersecondary: "2px solid #007BFF",
    },
    modalHeader: {
      display: "flex",
      justifyContent: "center",
      color: "#007BFF", // Primary color
      padding: "15px 20px",
      borderBottom: "2px solid #007BFF", // Primary color
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      fontSize: "24px", // Larger font size
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontFamily: "Barlow, sans-serif",
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle box shadow
    },
    modal: {
      width: "100%",
      fontFamily: "Arial, sans-serif",
      fontSize: "16px",
      color: "#333",
      borderRadius: "8px",
    },
    modalBody: {
      paddingtop: "20px",
      paddingBottom: "0px",
      color: "#333",
      backgroundColor: "#fff",
      marginBottom: "0px",
    },
    modalFooter: {
      padding: "15px 20px",
      justifyContent: "flex-end",
      borderRadius: "0 0 8px 8px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle box shadow
    },
    sectionRow: {
      fontWeight: "bold",
      marginBottom: "10px",
      paddingBottom: "5px",
      fontSize: "18px",
    },
    sectionParagraph: {
      marginBottom: "10px",
      lineHeight: "1.4",
    },
  }

  return (
    <div>
      <Button
        style={styles.button}
        onClick={toggle}
        aria-label="Open Instructions"
      >
        <FaBookOpen />
        {buttonLabel}
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        innerRef={modalRef}
        contentClassName="custom-modal-content"
        style={styles.modalContainer}
      >
        <Row
          id="Header"
          style={{
            color: "#fff",
            marginRight: "10px",
            fontweight: "bold",
            fontSize: "20px",
            display: "flex",
            borderradius: "16px 16px 16px 16px",
          }}
        >
          <ModalHeader
            toggle={toggle}
            style={styles.modalHeader}
            id="modalHeader"
          >
            <FaBookOpen
              style={{
                color: "#fff",
                marginRight: "10px",
                fontweight: "bold",
                fontSize: "20px",
              }}
            />
            Instructions for Using the 3D Viewer
          </ModalHeader>
        </Row>
        <ModalBody style={styles.modalBody}>
          <Section
            title="Settings"
            style={styles.sectionRow}
            paragraphStyle={styles.sectionParagraph}
          >
            Modify environment properties, including toggling model visibility,
            adjusting light intensity, and resetting to default settings.
          </Section>
          <Section
            title="Perspective"
            style={styles.sectionRow}
            paragraphStyle={styles.sectionParagraph}
          >
            Adjust the orientation of the loaded model within the 3D scene by
            selecting the desired option.
          </Section>
          <Section
            title="Expand"
            style={styles.sectionRow}
            paragraphStyle={styles.sectionParagraph}
          >
            Use the Expand Button to switch the 3D environment to full-screen
            mode for a larger interactive space. Press the 'esc' key to exit
            full-screen mode.
          </Section>
          <Section
            title="Space Button"
            style={styles.sectionRow}
            paragraphStyle={styles.sectionParagraph}
          >
            Activates Dark Mode in the 3D environment, adapting the color scheme
            to a dark mode for user comfort.
          </Section>
          <Section
            title="User Interaction"
            style={styles.sectionRow}
            paragraphStyle={styles.sectionParagraph}
          >
            Double-click on any loaded model to toggle its visibility, revealing
            other structures within it.
          </Section>
        </ModalBody>
        <ModalFooter style={styles.modalFooter}>
          <Button
            style={styles.button}
            onClick={toggle}
            aria-label="Close Instructions"
          >
            <FaTimes />
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

const Section = ({ title, children, style, paragraphStyle }) => (
  <div>
    <Row style={style}>{title}:</Row>
    <p style={paragraphStyle}>{children}</p>
  </div>
)

export default InstructionsModal
