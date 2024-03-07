import React from "react"
import "./Footer.css" // Make sure to create this CSS file

// Main Footer component
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <FooterInfo />
            <FooterLinks
              title="Useful Links"
              links={[
                "Home",
                "About us",
                "Discover",
                "Terms of service",
                "Privacy policy",
              ]}
            />
            <FooterLinks
              title="Our Discover"
              links={[
                "Pending 1",
                "Pending 2",
                "Pending 3",
                "Pending 4",
                "Pending 5",
              ]}
            />
            <FooterNewsletter />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>**Pending Information**</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

// FooterInfo sub-component
const FooterInfo = () => (
  <div className="col-lg-3 col-md-6">
    <div className="footer-info">
      <h3>
        I.A<span>.</span>
      </h3>
      <p>
        Address Line Here <br />
        State Zip Code, Country
        <br />
        <br />
        <strong>Phone:</strong> +1 #### ##### ##
        <br />
        <strong>Email:</strong> info@example.com
        <br />
      </p>
      <div className="social-links mt-3">
        <button className="social-button twitter">
          <i className="bx bxl-twitter"></i>
        </button>
        <button className="social-button facebook">
          <i className="bx bxl-facebook"></i>
        </button>
        <button className="social-button instagram">
          <i className="bx bxl-instagram"></i>
        </button>
        <button className="social-button google-plus">
          <i className="bx bxl-skype"></i>
        </button>
        <button className="social-button linkedin">
          <i className="bx bxl-linkedin"></i>
        </button>
      </div>
    </div>
  </div>
)

// FooterLinks sub-component
const FooterLinks = ({ title, links }) => (
  <div className="col-lg-2 col-md-6 footer-links">
    <h4>{title}</h4>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <i className="bx bx-chevron-right"></i>{" "}
          <button className="link-button">{link}</button>
        </li>
      ))}
    </ul>
  </div>
)

// FooterNewsletter sub-component
const FooterNewsletter = () => (
  <div className="col-lg-4 col-md-6 footer-newsletter">
    <h4>Our Newsletter</h4>
    <p>**Pending Information**</p>
    <form action="#" method="post">
      <input type="email" name="email" />
      <input type="submit" value="Subscribe" />
    </form>
  </div>
)

export default Footer
