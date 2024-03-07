import React from "react"

// core components
import ColorNavbar from "./IndexSections/ColorNavbar.js"
import IndexHeader from "./IndexSections/IndexHeader.js"
import DemoFooter from "./IndexSections/DemoFooter.js"

// Sections for this page
import Basic from "./IndexSections/Basic.js"
import Navbars from "./IndexSections/Navbars.js"
import Tabs from "./IndexSections/Tabs.js"
import Pills from "./IndexSections/Pills.js"
import Pagination from "./IndexSections/Pagination.js"
import Notifications from "./IndexSections/Notifications.js"
import PreFooter from "./IndexSections/PreFooter.js"
import Footers from "./IndexSections/Footers.js"
import Typography from "./IndexSections/Typography.js"
import ContentAreas from "./IndexSections/ContentAreas.js"
import Cards from "./IndexSections/Cards.js"
import PlainCards from "./IndexSections/PlainCards.js"
import JavaScript from "./IndexSections/JavaScript.js"
import NucleoIcons from "./IndexSections/NucleoIcons.js"

export default function Index() {
  const wrapper = React.useRef(null)
  React.useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    wrapper.current.scrollTop = 0
    document.body.classList.add("index-page")
    return function cleanup() {
      document.body.classList.remove("index-page")
    }
  }, [])
  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <IndexHeader />
        <div className="main">
          <Basic />
          <Navbars />
          <Tabs />
          <Pills />
          <Pagination />
          <Notifications />
          <PreFooter />
          <Footers />
          <Typography />
          <ContentAreas />
          <Cards />
          <PlainCards />
          <JavaScript />
          <NucleoIcons />
        </div>
        <DemoFooter />
      </div>
    </>
  )
}
