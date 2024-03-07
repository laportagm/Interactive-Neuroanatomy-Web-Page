import React, { useState, useEffect, useRef } from "react"
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Vector2,
  Raycaster,
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  Color,
  LoadingManager,
} from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import * as dat from "dat.gui"
import "../../Quiz/css/index-gui.css"

const ThreeScene = ({
  selectedGroup,
  lightIntensity,
  viewDirection,
  isExpanded,
  isSpace,
}) => {
  const mountRef = useRef(null)
  const cameraRef = useRef(null)
  const datGuiRef = useRef(null)
  const [loadingProgress, setLoadingProgress] = useState(0)

  // Sets up the initial scene
  const setupScene = () => {
    const scene = new Scene()
    scene.background = new Color(isSpace ? 0x333333 : 0xd8d2d2)
    return scene
  }

  // Sets up the camera
  const setupCamera = (mount, scene) => {
    const fov = 75
    const aspect = mount.clientWidth / mount.clientHeight
    const near = 0.1
    const far = 1000
    const camera = new PerspectiveCamera(fov, aspect, near, far)
    cameraRef.current = camera

    const positions = {
      Top: [0, 6, 0],
      Bottom: [0, -6, 0],
      Left: [-6, 0, 0],
      Right: [6, 0, 0],
      Front: [0, 0, 6],
      Back: [0, 0, -6],
    }

    camera.position.set(...(positions[viewDirection] || [0, 0, 6]))
    camera.lookAt(scene.position)

    return camera
  }

  // Sets up the WebGL renderer
  const setupRenderer = (mount) => {
    const renderer = new WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)
    return renderer
  }

  // Sets up the controls for the camera
  const setupControls = (camera, renderer) => {
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.1
    controls.minDistance = 0.2
    controls.maxDistance = 100
    return controls
  }

  // Sets up the lights in the scene
  const setupLights = (scene, lightIntensity) => {
    const ambientLight = new AmbientLight(0x404040, lightIntensity)
    const directionalLight = new DirectionalLight(0xffffff, lightIntensity)
    const hemisphereLight = new HemisphereLight(
      0xffffff,
      0x404040,
      lightIntensity
    )
    scene.add(ambientLight, directionalLight, hemisphereLight)
  }

  // Sets up the GUI for manipulating scene elements
  const setupGUI = (scene, camera) => {
    const gui = new dat.GUI({ autoPlace: false })
    datGuiRef.current = gui
    const datGuiContainer = document.querySelector(".dat-gui-container")
    datGuiContainer.appendChild(gui.domElement)

    // Light folder setup
    const lightFolder = gui.addFolder("Lights")
    scene.children.forEach((child) => {
      if (child.type.includes("Light")) {
        lightFolder
          .add(child, "intensity", 0, 2)
          .name(`${child.type} Intensity`)
      }
    })

    // Camera folder setup
    const cameraFolder = gui.addFolder("Camera")
    cameraFolder.add(camera.position, "x", -10, 10).name("Position X")
    cameraFolder.add(camera.position, "y", -10, 10).name("Position Y")
    cameraFolder.add(camera.position, "z", -10, 10).name("Position Z")
  }

  useEffect(() => {
    const mount = mountRef.current
    const scene = setupScene()
    const camera = setupCamera(mount, scene)
    const renderer = setupRenderer(mount)
    const controls = setupControls(camera, renderer)
    setupLights(scene, lightIntensity)
    setupGUI(scene, camera)

    const manager = new LoadingManager()
    manager.onProgress = (item, loaded, total) => {
      setLoadingProgress((loaded / total) * 100)
    }
    manager.onError = (url) => {
      console.error(`There was an error loading ${url}`)
    }

    // Loads the models into the scene
    const loadModels = () => {
      const loader = new GLTFLoader(manager)
      if (selectedGroup && selectedGroup.models) {
        selectedGroup.models.forEach((model) => {
          loader.load(
            `${process.env.PUBLIC_URL}/assets/models/${model}`,
            (gltf) => {
              // Adjust the model's scale and position as needed
              gltf.scene.scale.set(0.1, 0.1, 0.1) // Example scale
              scene.add(gltf.scene)
            },
            undefined,
            (error) => {
              console.error("Error loading model:", error)
            }
          )
        })
      }
    }
    if (selectedGroup) {
      loadModels()
    }

    const onWindowResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener("resize", onWindowResize)

    const onDoubleClick = (event) => {
      event.preventDefault()
      const mouse = new Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      )
      const raycaster = new Raycaster()
      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(scene.children, true)
      if (intersects.length > 0) {
        intersects[0].object.visible = !intersects[0].object.visible
      }
    }
    mount.addEventListener("dblclick", onDoubleClick)

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      window.removeEventListener("resize", onWindowResize)
      mount.removeEventListener("dblclick", onDoubleClick)
      mount.removeChild(renderer.domElement)
      scene.clear()
      renderer.dispose()
      controls.dispose()
      if (datGuiRef.current) datGuiRef.current.destroy()
    }
  }, [selectedGroup, lightIntensity, viewDirection, isExpanded, isSpace])

  return (
    <div
      className="threejs-container"
      style={{ position: "relative", height: "100%" }}
    >
      <div className="dat-gui-container" ref={datGuiRef}></div>
      <div
        ref={mountRef}
        style={{ width: "100%", height: "100%", overflow: "hidden" }}
      ></div>
      {loadingProgress < 100 && (
        <div
          style={{
            position: "absolute",
            display: "block",
            pointerEvents: "none",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: `${loadingProgress}%`, // Percentage of loading progress
            height: "100%",
            loadingBar: true,
            height: "8px",
            borderRadius: "16px",
            zIndex: 1,
            backgroundColor: "mediumvioletred", // Color of the progress bar
            transition: "width 0.8s ease-out",
          }}
        ></div>
      )}
    </div>
  )
}

export default React.memo(ThreeScene)
