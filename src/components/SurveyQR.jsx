import { useState, useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { Link } from 'react-router-dom'
import { CONTACT } from './contactData'
import { COMPANY } from '../company'
import './SurveyQR.css'

const SURVEY_PATH = '/survey'

function getSurveyUrl() {
  if (typeof window === 'undefined') return ''
  return `${window.location.origin}${SURVEY_PATH}`
}

export function SurveyQR({ size = 160, showLabel = true, variant = 'card' }) {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(getSurveyUrl())
  }, [])

  if (!url) return null

  return (
    <div className={`survey-qr survey-qr--${variant}`}>
      <div className="survey-qr__box" style={{ width: size, height: size }}>
        <QRCodeSVG
          value={url}
          size={size}
          level="M"
          includeMargin={true}
          bgColor="#ffffff"
          fgColor="#2E7D32"
          role="img"
          aria-label="QR code to open Green Energy & EV Survey"
        />
      </div>
      {showLabel && (
        <p className="survey-qr__label">
          Scan to open <strong>Survey</strong>
        </p>
      )}
    </div>
  )
}

/** Merged “Take our survey” + “Partner with us” for the home page */
export function SurveyQRBlock() {
  return (
    <section className="connect-section" id="contact" aria-labelledby="connect-heading">
      <div className="connect-bg" aria-hidden />
      <div className="connect-inner">
        <h2 id="connect-heading" className="connect-heading">Connect with {COMPANY.shortName}</h2>
        <p className="connect-sub">Share your feedback through our survey, or reach out for partnerships and projects.</p>

        <div className="connect-panels">
          <article className="connect-card connect-card--survey" aria-labelledby="connect-survey-title">
            <div className="connect-card-icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h3 id="connect-survey-title" className="connect-card-title">Take our survey</h3>
            <p className="connect-card-text">Help us understand green energy and EV adoption. Scan the QR code or open the survey in your browser.</p>
            <div className="connect-card-body">
              <SurveyQR size={128} showLabel={false} variant="block" />
              <div className="connect-card-actions">
                <Link to={SURVEY_PATH} className="connect-btn connect-btn--primary">
                  Open survey
                </Link>
              </div>
            </div>
          </article>

          <article className="connect-card connect-card--partner" aria-labelledby="connect-partner-title">
            <div className="connect-card-icon connect-card-icon--partner" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm12-2a4 4 0 11-8 0 4 4 0 018 0zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h3 id="connect-partner-title" className="connect-card-title">Partner with us</h3>
            <p className="connect-card-text">For renewable energy solutions, EPC, consultancy, or collaboration—we would love to hear from you.</p>
            <div className="connect-card-body connect-card-body--partner">
              <a href={`mailto:${CONTACT.email}`} className="connect-btn connect-btn--outline">
                Email us
              </a>
              <a href={`tel:${CONTACT.mobileRaw}`} className="connect-btn connect-btn--ghost">
                {CONTACT.mobile}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default SurveyQR
