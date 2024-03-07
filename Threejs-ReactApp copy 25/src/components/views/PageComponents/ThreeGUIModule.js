import React, { useRef, useEffect } from "react"
import * as dat from "dat.gui"
import { Color } from "three"
import "../../Quiz/css/index-gui.css" // Adjust path as necessary

const ThreeGUIModule = ({
  scene,
  camera,
  ambientLight,
  directionalLight,
  hemisphereLight,
}) => {
  const datGuiRef = useRef(null)

  useEffect(() => {
    const gui = new dat.GUI({ autoPlace: false })
    datGuiRef.current = gui
    const datGuiContainer = document.querySelector(".dat-gui-container")
    datGuiContainer.appendChild(gui.domElement)

    // Light controls
    const lightFolder = gui.addFolder("Lights")
    lightFolder
      .add(ambientLight, "intensity", 0, 2)
      .name("Ambient Light Intensity")
    lightFolder
      .add(directionalLight, "intensity", 0, 2)
      .name("Directional Light Intensity")
    lightFolder
      .add(hemisphereLight, "intensity", 0, 2)
      .name("Hemisphere Light Intensity")

    // Camera controls
    const cameraFolder = gui.addFolder("Camera")
    cameraFolder.add(camera.position, "x", -10, 10).name("Position X")
    cameraFolder.add(camera.position, "y", -10, 10).name("Position Y")
    cameraFolder.add(camera.position, "z", -10, 10).name("Position Z")

    // Scene controls
    const sceneFolder = gui.addFolder("Scene")
    const backgroundColor = { color: scene.background.getHex() }
    sceneFolder
      .addColor(backgroundColor, "color")
      .onChange((value) => {
        scene.background = new Color(value)
      })
      .name("Background Color")

    // Cleanup
    return () => {
      if (datGuiContainer) {
        datGuiContainer.removeChild(gui.domElement)
      }
      gui.destroy()
    }
  }, [scene, camera, ambientLight, directionalLight, hemisphereLight])

  return (
    <div
      className="dat-gui-container"
      ref={datGuiRef}
      style={{ position: "absolute", top: "10px", right: "20px" }}
    ></div>
  )
}

export default ThreeGUIModule
