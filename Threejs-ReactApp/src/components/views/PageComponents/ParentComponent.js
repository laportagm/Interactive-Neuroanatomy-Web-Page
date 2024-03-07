// ParentComponent.js
import React, { useState } from "react"
import Navbar from "./Navbar"
import ThreeScene from "./ThreeScene"

const ParentComponent = () => {
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isSpace, setIsSpace] = useState(false)

  return (
    <div>
      <Navbar
        setSelectedGroup={setSelectedGroup}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        isSpace={isSpace}
        setIsSpace={setIsSpace}
      />
      <ThreeScene
        selectedGroup={selectedGroup}
        isExpanded={isExpanded}
        isSpace={isSpace}
      />
    </div>
  )
}

export default ParentComponent
