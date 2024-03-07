import React from "react"

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center"
    >
      <div className="container" data-aos="fade-up">
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="col-xl-6 col-lg-8">
            <h1>
              Interactive Neuroanatomy Viewer<span>.</span>
            </h1>
            <h2>**Pending Statement**</h2>
          </div>
        </div>
        <div
          className="row gy-4 mt-5 justify-content-center"
          data-aos="zoom-in"
          data-aos-delay="250"
        >
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="ri-store-line"></i>
              <h3>
                <a
                  href="#models"
                  onClick={() => {
                    /* Navigate to Models */
                  }}
                >
                  Models
                </a>
              </h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="ri-bar-chart-box-line"></i>
              <h3>
                <a
                  href="#portfolio"
                  onClick={() => {
                    /* Navigate to Portfolio */
                  }}
                >
                  Portfolio
                </a>
              </h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="ri-calendar-todo-line"></i>
              <h3>
                <a
                  href="#discover"
                  onClick={() => {
                    /* Navigate to Discover */
                  }}
                >
                  Discover
                </a>
              </h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="ri-paint-brush-line"></i>
              <h3>
                <a
                  href="#pending"
                  onClick={() => {
                    /* Navigate to Pending */
                  }}
                >
                  Pending
                </a>
              </h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="ri-database-2-line"></i>
              <h3>
                <a
                  href="#pending-star"
                  onClick={() => {
                    /* Navigate to Pending* */
                  }}
                >
                  Pending*
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
