import React from "react"
import { Container } from "reactstrap"

export default function PresentationHeader() {
  return (
    <>
      <div className="page-header">
        <img
          alt="..."
          className="path"
          src={require("../../../assets/img/blob.png")}
        />
        <img
          alt="path2"
          className="path2"
          src={require("../../../assets/img/path2.png")}
        />
        <img
          alt="triangles"
          className="shapes triangle"
          src={require("../../../assets/img/triunghiuri.png")}
        />
        <img
          alt="waves"
          className="shapes wave"
          src={require("../../../assets/img/waves.png")}
        />
        <img
          alt="squares"
          className="shapes squares"
          src={require("../../../assets/img/patrat.png")}
        />
        <img
          alt="circles"
          className="shapes circle"
          src={require("../../../assets/img/cercuri.png")}
        />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">
              3D Viewer
              <small className="text-warning">Interactive Neuroanatomy</small>
            </h1>
            <h3>Explore Detailed Accurate Neuroanatomy Models.</h3>
          </div>
        </Container>
      </div>
    </>
  )
}
