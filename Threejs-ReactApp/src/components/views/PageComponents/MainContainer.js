import React, { useState } from "react"
import CustomNavbar from "./CustomNavbar"
import ThreeScene from "./ThreeScene"

function MainContainer() {
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [lightIntensity, setLightIntensity] = useState(1)
  const [modelVisibility, setModelVisibility] = useState(true)
  const [viewDirection, setViewDirection] = useState("Front")
  const [isExpanded, setIsExpanded] = useState(false)
  const [isSpace, setIsSpace] = useState(false)

  const resetScene = () => {
    setSelectedGroup(null)
    setLightIntensity(1)
    setModelVisibility(true)
    setViewDirection("Front")
    console.log("Scene reset")
  }

  return (
    <div className="main-container">
      <CustomNavbar
        setSelectedGroup={setSelectedGroup}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        isSpace={isSpace}
        setIsSpace={setIsSpace}
      />
      <ThreeScene
        selectedGroup={selectedGroup}
        lightIntensity={lightIntensity}
        modelVisibility={modelVisibility}
        viewDirection={viewDirection}
        isExpanded={isExpanded}
        isSpace={isSpace}
      />
    </div>
  )
}

export default MainContainer
