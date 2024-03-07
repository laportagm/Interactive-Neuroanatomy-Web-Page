import { GUI } from "dat.gui"
import { Color } from "three"

const setupDatGui = (scene, selectedGroup, isSpace) => {
  const gui = new GUI({ autoPlace: true }) // autoPlace set to true

  // Check if selectedGroup is not null
  if (selectedGroup) {
    // Light Intensity Controls
    const lightFolder = gui.addFolder("Light Intensity")
    if (selectedGroup.lights) {
      // Check if 'lights' is available
      lightFolder
        .add(selectedGroup.lights[0], "intensity", 0, 2)
        .name("Ambient Light")
      lightFolder
        .add(selectedGroup.lights[1], "intensity", 0, 2)
        .name("Directional Light")
      lightFolder
        .add(selectedGroup.lights[2], "intensity", 0, 2)
        .name("Hemisphere Light")
    }

    // Scene Background Color Control
    const backgroundColor = {
      color: isSpace ? "#333333" : "#d8d2d2",
    }
    const backgroundControl = gui
      .addColor(backgroundColor, "color")
      .name("Background Color")

    backgroundControl.onChange((color) => {
      scene.background = new Color(color)
    })

    // You can add more controls here based on your requirements.
  }

  return gui
}

export default setupDatGui
