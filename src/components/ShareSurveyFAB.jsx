import { useState } from 'react'
import { SurveyQR } from './SurveyQR'
import './ShareSurveyFAB.css'

export default function ShareSurveyFAB() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="share-fab"
        onClick={() => setOpen(true)}
        aria-label="Share survey – show QR code"
      >
        <span className="share-fab__icon" aria-hidden>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        </span>
        <span className="share-fab__text">Share survey</span>
      </button>

      {open && (
        <div className="share-overlay" role="dialog" aria-modal="true" aria-labelledby="share-modal-title">
          <div className="share-overlay__backdrop" onClick={() => setOpen(false)} aria-hidden />
          <div className="share-overlay__panel">
            <div className="share-overlay__head">
              <h2 id="share-modal-title" className="share-overlay__title">Scan to open survey</h2>
              <button type="button" className="share-overlay__close" onClick={() => setOpen(false)} aria-label="Close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="share-overlay__body">
              <SurveyQR size={200} showLabel={true} variant="card" />
              <p className="share-overlay__hint">Anyone can scan this QR code to open the Green Energy & EV Survey directly.</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
