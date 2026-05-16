import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import SurveyForm from './components/SurveyForm'
import AboutPage from './pages/AboutPage'
import ResearchPage from './pages/ResearchPage'
import InventionPage from './pages/InventionPage'
import ContactPage from './pages/ContactPage'
import SurveyDashboardPage from './pages/SurveyDashboardPage'
import ShareSurveyFAB from './components/ShareSurveyFAB'
import SurveyInvitePopup from './components/SurveyInvitePopup'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/hybrid-battery" element={<InventionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/survey" element={<SurveyForm />} />
          <Route path="/survey/dashboard" element={<SurveyDashboardPage />} />
        </Routes>
        <SurveyInvitePopup />
        <ShareSurveyFAB />
      </div>
    </BrowserRouter>
  )
}

export default App
