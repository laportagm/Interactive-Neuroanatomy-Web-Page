import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "./components/views/HomePage"
import Models from "./components/views/Models"
import LoginPage from "./components/views/LoginPage"
import RegisterPage from "./components/views/RegisterPage"
import AccountSettings from "./components/views/AccountSettings"
import ProfilePage from "./components/views/ProfilePage"
import ResetPage from "./components/views/ResetPage"
import QuizPage from "./components/views/QuizPage"
import Error404 from "./components/views/Error404"
import BlogPost from "./components/views/BlogPost"
import ContentAreas from "components/views/IndexSections/ContentAreas"
import AboutUs from "./components/views/AboutUs"
import BrainstemInformation from "components/resources/pages/BrainstemInformation"
import NeuroanatomyResources from "components/resources/MainPage/NeuroanatomyResources"
import NeuroanatomyResources2 from "components/resources/MainPage/NeuroanatomyResources2"
import NeuroanatomyGuide from "./components/views/NeuroanatomyGuide"

// User Context
import { UserProvider } from "./components/views/Profile/UserContext" // Adjust the path as per your project structure

// Ensure that these paths are correct according to your project structure
import "@fortawesome/fontawesome-free/css/all.min.css"
import "assets/css/nucleo-icons.css"
import "assets/scss/blk-design-system-pro-react.scss?v1.2.0"
import "assets/demo/demo.css"
import "assets/demo/react-demo.css"
import "./styles2.css"

function App() {
  return (
    <UserProvider>
      {" "}
      {/* Wrap the Router with UserProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/models" element={<Models />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/reset-password" element={<ResetPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/content-areas" element={<ContentAreas />} />
          <Route
            path="/neuroanatomy-resources"
            element={<NeuroanatomyResources />}
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/brainstem-information"
            element={<BrainstemInformation />}
          />
          <Route
            path="/neuroanatomy-resources2"
            element={<NeuroanatomyResources2 />}
          />
          <Route path="/neuroanatomy-guide" element={<NeuroanatomyGuide />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
