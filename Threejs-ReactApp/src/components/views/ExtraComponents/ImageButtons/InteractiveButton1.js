import React, { useState } from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "react-bootstrap"

const InteractiveButton1 = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <div>
      <Button color="primary" onClick={toggleModal}>
        Toggle Image
      </Button>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Image Viewer</ModalHeader>
        <ModalBody>
          {/* Add your image here */}
          <img
            src="../../../../assets/img/InteractiveButton1.jpg"
            alt="Image"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default InteractiveButton1
