import { Link } from 'react-router-dom'
import { SurveyQR } from './SurveyQR'
import { CONTACT } from './contactData'
import { COMPANY } from '../company'
import { SocialIcons, WhatsAppButton } from './SocialIcons'
import './Footer.css'

const NOIDA_MAP =
  'https://www.openstreetmap.org/export/embed.html?bbox=77.36%2C28.52%2C77.44%2C28.60&layer=mapnik&marker=28.56%2C77.40'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-about">
            <h3 className="footer-brand">{COMPANY.shortName}</h3>
            <p className="footer-desc">{COMPANY.vision}</p>
            <div className="footer-contact">
              <a href={`mailto:${CONTACT.email}`} className="footer-contact__item footer-contact__email">
                <span className="footer-contact__icon" aria-hidden>✉</span>
                {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.mobileRaw}`} className="footer-contact__item footer-contact__phone">
                <span className="footer-contact__icon" aria-hidden>📞</span>
                {CONTACT.mobile}
              </a>
              <p className="footer-contact__item footer-contact__address">
                <span className="footer-contact__icon" aria-hidden>📍</span>
                {CONTACT.address}
              </p>
            </div>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/research">Research</Link>
              <Link to="/survey">Survey</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-social-row">
              <SocialIcons />
              <WhatsAppButton variant="pill" message={`Hi, I have an enquiry for ${COMPANY.shortName}.`} label="Chat on WhatsApp" />
            </div>
          </div>
          <div className="footer-survey">
            <h3 className="footer-survey-title">Survey</h3>
            <p className="footer-survey-desc">Scan to open the Green Energy & EV Survey</p>
            <SurveyQR size={120} showLabel={false} variant="footer" />
          </div>
          <div className="footer-map-wrap">
            <h3 className="footer-map-title">Find us</h3>
            <div className="footer-map">
              <iframe
                title="Office location — Noida"
                src={NOIDA_MAP}
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="footer-map-hint">Noida office (approximate map pin)</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">&copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
