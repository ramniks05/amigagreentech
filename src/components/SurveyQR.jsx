import { useState, useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { Link } from 'react-router-dom'
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
          fgColor="#0d7a4a"
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

export function SurveyQRBlock() {
  return (
    <section className="survey-qr-block" aria-labelledby="survey-qr-heading">
      <div className="survey-qr-block__inner">
        <h2 id="survey-qr-heading" className="survey-qr-block__title">Take our survey</h2>
        <p className="survey-qr-block__text">Scan the QR code with your phone to open the Green Energy & EV Survey, or use the link below.</p>
        <div className="survey-qr-block__row">
          <SurveyQR size={140} variant="block" />
          <div className="survey-qr-block__actions">
            <Link to={SURVEY_PATH} className="survey-qr-block__btn">
              Open survey in browser
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SurveyQR
