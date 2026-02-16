import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import SurveyForm from './components/SurveyForm'
import ShareSurveyFAB from './components/ShareSurveyFAB'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/survey" element={<SurveyForm />} />
        </Routes>
        <ShareSurveyFAB />
      </div>
    </BrowserRouter>
  )
}

export default App
