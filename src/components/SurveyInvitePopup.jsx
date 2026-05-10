import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './SurveyInvitePopup.css'

const STORAGE_KEY = 'amigas-survey-invite-dismissed'

export default function SurveyInvitePopup() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/survey') return
    if (typeof sessionStorage === 'undefined') return
    if (sessionStorage.getItem(STORAGE_KEY)) return
    const t = window.setTimeout(() => setVisible(true), 900)
    return () => window.clearTimeout(t)
  }, [location.pathname])

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!visible || location.pathname === '/survey') return null

  return (
    <aside
      className="survey-invite"
      role="dialog"
      aria-labelledby="survey-invite-title"
      aria-describedby="survey-invite-desc"
    >
      <button type="button" className="survey-invite__close" onClick={dismiss} aria-label="Dismiss">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <p className="survey-invite__kicker">Your voice matters</p>
      <h2 id="survey-invite-title" className="survey-invite__title">Help us improve</h2>
      <p id="survey-invite-desc" className="survey-invite__text">
        Please take a minute to participate in our survey—your responses help us understand real-world challenges and refine our solutions.
      </p>
      <div className="survey-invite__actions">
        <Link to="/survey" className="survey-invite__cta" onClick={dismiss}>
          Take the survey
        </Link>
        <button type="button" className="survey-invite__later" onClick={dismiss}>
          Maybe later
        </button>
      </div>
    </aside>
  )
}
