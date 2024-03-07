import React, { useState, useEffect } from "react"
import { Form, ButtonGroup, Button, Dropdown } from "react-bootstrap"
import "../../../view-css/ControlBar.css"

const modelGroups = [
  {
    label: "Brainstem",
    models: [
      "caudal-medulla.glb",
      "rostral-medulla.glb",
      "midbrain.glb",
      "pons.glb",
    ],
  },
  {
    label: "Spinal Nerves",
    models: [
      "SpinalNerves1.glb",
      "SpinalNerves2.glb",
      "SpinalNerves3.glb",
      "SpinalNerves4.glb",
      "SpinalNerves5.glb",
      "SpinalNerves6.glb",
    ],
  },
  {
    label: "Basal Ganglia",
    models: [
      "BrainstenBasal.glb",
      "StriatumBasal-Left.glb",
      "StriatumBasal-Right.glb",
      "Thalamus-Basal.glb",
    ],
  },
  {
    label: "Visual Pathway",
    models: ["Visual-Pathway-skull.glb", "Visual-Pathway.glb"],
  },
  {
    label: "Crainial Nerves",
    models: ["BrainstemNerves.glb", "CrainialNerves.glb"],
  },
  {
    label: "Cerebellum & Tracts",
    models: ["Brain1.glb", "Tracts.glb"],
  },
]

function ControlBar({
  setSelectedGroup,
  setLightIntensity,
  setModelVisibility,
  resetScene,
  setViewDirection,
}) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredModelGroups, setFilteredModelGroups] = useState(modelGroups)

  useEffect(() => {
    setFilteredModelGroups(
      modelGroups.filter((group) =>
        group.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [searchTerm])

  const loadModels = (selectedModels) => {
    console.log("Loading models:", selectedModels)
  }

  const handleModelGroupChange = (selectedGroupLabel) => {
    const selectedGroup = filteredModelGroups.find(
      (group) => group.label === selectedGroupLabel
    )
    setSelectedGroup(selectedGroup)
    if (selectedGroup) {
      loadModels(selectedGroup.models)
    }
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="d-flex align-items-center" style={{ margin: "0 10px" }}>
      <ButtonGroup className="me-3">
        <Dropdown as={ButtonGroup}>
          <Button variant="outline-light" size="sm">
            Settings
          </Button>
          <Dropdown.Toggle
            split
            variant="outline-light"
            size="sm"
            id="dropdown-split-basic"
          />
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setLightIntensity(0.5)}>
              Light: Low
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setLightIntensity(1)}>
              Light: Medium
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setLightIntensity(1.5)}>
              Light: High
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => setModelVisibility(true)}>
              Show Models
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setModelVisibility(false)}>
              Hide Models
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={resetScene}>Reset Scene</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>

      <ButtonGroup className="me-3">
        <Dropdown as={ButtonGroup}>
          <Button variant="outline-light" size="sm">
            Perspective
          </Button>
          <Dropdown.Toggle
            split
            variant="outline-light"
            size="sm"
            id="dropdown-split-view"
          />
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setViewDirection("Top")}>
              Top
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setViewDirection("Bottom")}>
              Bottom
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setViewDirection("Left")}>
              Left
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setViewDirection("Right")}>
              Right
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setViewDirection("Front")}>
              Front
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setViewDirection("Back")}>
              Back
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>

      <Form.Control
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search models..."
        style={{
          fontSize: "14px",
          padding: "4px 8px",
          borderRadius: "12px",
          backgroundColor: "#343a40",
          borderColor: "#6c757d",
          color: "white",
          margin: "0 5px",
        }}
      />

      <Dropdown onSelect={handleModelGroupChange}>
        <Dropdown.Toggle
          variant="outline-light"
          id="dropdown-basic"
          size="sm"
          style={{
            fontSize: "14px",
            borderRadius: "12px",
            backgroundColor: "#343a40",
            color: "white",
            borderColor: "#6c757d",
            margin: "0 5px",
          }}
        >
          Choose...
        </Dropdown.Toggle>

        <Dropdown.Menu
          style={{
            backgroundColor: "#343a40",
            color: "white",
            borderColor: "#6c757d",
          }}
        >
          {filteredModelGroups.map((group, index) => (
            <Dropdown.Item
              key={index}
              eventKey={group.label}
              style={{ color: "white" }}
            >
              {group.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default ControlBar
